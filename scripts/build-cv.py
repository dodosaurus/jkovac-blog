"""Edit the supplied CV in place at the PDF-content level, preserving its artwork.

Requires reportlab and pypdf. Edit content/cv/cv.en.json, then run this script.
The reference PDF supplies the original typography, photo, geometry and links.
"""
from pathlib import Path
from io import BytesIO
from copy import deepcopy
import json
import re
from pypdf import PdfReader, PdfWriter, Transformation
from pypdf.generic import ContentStream, FloatObject, NameObject, ArrayObject, ByteStringObject, DictionaryObject, BooleanObject, RectangleObject
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.utils import simpleSplit

ROOT = Path(__file__).resolve().parents[1]
data = json.loads((ROOT / 'content/cv/cv.en.json').read_text())
reader = PdfReader(ROOT / data['reference'])
W, H = map(float, reader.pages[0].mediabox[2:])
INK = [.098039, .2, .25098]
TEAL = [.090196, .427451, .439216]
MUTED = [.364706, .439216, .470588]
LINE = [.831373, .878431, .870588]

cid_starts = {}
for resource, name in [('/CVRegular', 'OriginalRegular'), ('/CVBold', 'OriginalBold'), ('/CVSemiBold', 'OriginalSemiBold')]:
    font = reader.pages[0]['/Resources']['/Font'][resource].get_object()
    match = re.search(r'<([0-9A-Fa-f]+)> <[0-9A-Fa-f]+> <0020>', font['/ToUnicode'].get_data().decode())
    assert match, 'Unexpected font character map'
    cid_starts[resource] = int(match.group(1), 16)
    descendant = font['/DescendantFonts'][0].get_object()
    pdfmetrics.registerFont(TTFont(name, BytesIO(descendant['/FontDescriptor']['/FontFile2'].get_data())))


def nums(values):
    return [FloatObject(value) for value in values]


def multiply(a, b):
    return [a[0]*b[0]+a[1]*b[2], a[0]*b[1]+a[1]*b[3],
            a[2]*b[0]+a[3]*b[2], a[2]*b[1]+a[3]*b[3],
            a[4]*b[0]+a[5]*b[2]+b[4], a[4]*b[1]+a[5]*b[3]+b[5]]


def inverse(m):
    a, b, c, d, e, f = m
    determinant = a*d-b*c
    return [d/determinant, -b/determinant, -c/determinant, a/determinant,
            (c*f-d*e)/determinant, (b*e-a*f)/determinant]


def text_ops(lines, x, baseline, size, leading, matrix, bold=False, color=INK, font_resource=None):
    # Reuse the reference's embedded CID fonts and their printable-ASCII maps.
    assert all(32 <= ord(char) <= 126 for line in lines for char in line), 'Replacement text must use printable ASCII'
    resource = font_resource or ('/CVBold' if bold else '/CVRegular')
    ops = [([], b'q'), (nums(inverse(matrix)), b'cm'), (nums(color), b'rg'), ([], b'BT'),
           ([NameObject(resource), FloatObject(size)], b'Tf'),
           (nums([leading]), b'TL'), (nums([1, 0, 0, 1, x, H-baseline]), b'Tm')]
    for line in lines:
        start = cid_starts[resource]
        encoded = b''.join((ord(char)-32+start).to_bytes(2, 'big') for char in line)
        ops.extend([([ByteStringObject(encoded)], b'Tj'), ([], b'T*')])
    return ops + [([], b'ET'), ([], b'Q')]


def paragraph(text, x, baseline, width, size, leading, max_lines, matrix):
    lines = simpleSplit(text, 'OriginalRegular', size, width)
    assert len(lines) <= max_lines, f'Text exceeds original area: {len(lines)} lines'
    return text_ops(lines, x, baseline, size, leading, matrix)


def edit_text(page, select):
    """Replace/remove whole text objects without leaving old text beneath overlays."""
    stream = ContentStream(page.get_contents(), reader)
    output, stack, changed = [], [], []
    matrix = [1, 0, 0, 1, 0, 0]
    i = 0
    while i < len(stream.operations):
        operands, operator = stream.operations[i]
        if operator == b'q':
            stack.append(matrix[:])
        elif operator == b'Q':
            matrix = stack.pop()
        elif operator == b'cm':
            matrix = multiply(list(map(float, operands)), matrix)
        if operator != b'BT':
            output.append((operands, operator)); i += 1; continue
        end = i
        while stream.operations[end][1] != b'ET':
            end += 1
        block = stream.operations[i:end+1]
        tm = next((a for a, op in block if op == b'Tm'), None)
        action = None
        if tm is not None:
            x = float(tm[4])*matrix[0] + float(tm[5])*matrix[2] + matrix[4]
            y = float(tm[4])*matrix[1] + float(tm[5])*matrix[3] + matrix[5]
            font_resource = next((str(a[0]) for a, op in block if op == b'Tf'), None)
            action = select(x, H-y, matrix, font_resource)
        if action is not None:
            changed.append((round(x, 2), round(H-y, 2)))
        if action == 'remove':
            pass
        elif isinstance(action, list):
            output.extend(action)
        elif isinstance(action, (int, float)):
            output.extend([([], b'q'), (nums([1, 0, 0, 1, 0, action]), b'cm')])
            output.extend(block); output.append(([], b'Q'))
        else:
            output.extend(block)
        i = end+1
    stream.operations = output
    page[NameObject('/Contents')] = stream
    return changed


def first_page(x, top, matrix, font_resource):
    if 45 <= x <= 55 and 94 <= top <= 106:
        if font_resource == '/CVSemiBold':
            return text_ops([data['subtitle']], 49, 101, 8.75, 10.5, matrix,
                            color=TEAL, font_resource='/CVSemiBold')
        return 'remove' 
    if 60 <= x <= 100 and 230 <= top <= 300:
        if top < 250:
            return paragraph(data['profile'], 63, 239.05, W-63-49, 8.55, 13.5, 5, matrix) + text_ops([
                'Outside of software engineering, I enjoy spending time with my family, running in the local',
                'park, playing video and board games, and flying my FPV drone.',
            ], 63, 319.55, 8.55, 13.5, matrix)
        return 'remove'
    if 60 <= x <= 100 and 310 <= top <= 340:
        return 'remove'
    if 60 <= x <= 100 and 490 <= top <= 505:
        return text_ops([data['founder_title']], 62, 498.8, 10.6, 12.72, matrix, bold=True)
    if 60 <= x <= 100 and 525 <= top <= 550:
        return paragraph(data['founder_description'], 62, 532.45, W-62-49, 8.65, 13.15, 2, matrix)


page1 = reader.pages[0]
# The attachment contains a white patch from an earlier bio edit; remove its paint.
stream = ContentStream(page1.get_contents(), reader)
patches = 0
for index, (operands, operator) in enumerate(stream.operations):
    if operator == b're' and len(operands) == 4 and abs(float(operands[0])-62.4) < .01 and abs(float(operands[1])-501.88978) < .01:
        paint = next(i for i in range(index+1, len(stream.operations)) if stream.operations[i][1] in (b'B', b'B*', b'f', b'f*'))
        stream.operations[paint] = ([], b'n')
        patches += 1
assert patches == 1
page1[NameObject('/Contents')] = stream
changed = edit_text(page1, first_page)
assert len(changed) == 8, f'Unexpected first-page text blocks: {changed}'
page2 = reader.pages[1]
include_pharmacy = data['include_pharmacy_experience']
pharmacy_source = deepcopy(page2) if include_pharmacy else None
if data['omit_other_pharmacy_references']:
    def second_page(x, top, matrix, font_resource):
        if top < 180 or top > 780:
            return 'remove'
        if x < 100 and 260 < top < 315:
            return paragraph(data['rxops_description'], 62, 274.35, 216.64, 8.05, 11.7, 4, matrix)
        if x > 300 and 425 < top < 445:
            return text_ops(['Certifications'], 303.6378, 434.8, 11.2, 13.44, matrix, bold=True)
        if x > 300 and 450 < top < 530:
            return 'remove'
        if x > 300 and 530 < top < 550:
            return 74.5

    changed = edit_text(page2, second_page)
    assert len(changed) == 11, f'Unexpected second-page text blocks: {changed}'
    stream = ContentStream(page2.get_contents(), reader)
    assert stream.operations[3][1] == b'm' and stream.operations[4][1] == b'l'
    del stream.operations[3:6]  # Marker for the removed pharmacy role.
    footer_lines = []
    for i, (operands, operator) in enumerate(stream.operations):
        if operator == b'm' and len(operands) == 2 and abs(float(operands[0])-49) < .01 and abs(float(operands[1])-46) < .01:
            assert stream.operations[i+1][1] == b'l' and stream.operations[i+2][1] == b'S'
            footer_lines.append(i)
    assert len(footer_lines) == 1
    i = footer_lines[0]; del stream.operations[i:i+3]
    page2[NameObject('/Contents')] = stream
    offset = 0 if include_pharmacy else 124
    page2.add_transformation(Transformation().translate(0, offset))
    for annotation in page2.get('/Annots', []):
        annotation = annotation.get_object()
        annotation[NameObject('/Rect')] = ArrayObject([
            FloatObject(float(value)+(offset if index in (1, 3) else 0))
            for index, value in enumerate(annotation['/Rect'])
        ])
    # Restore the footer at the same physical position after arranging the body.
    stream = ContentStream(page2.get_contents(), reader)
    stream.operations.extend([([], b'q'), (nums(LINE), b'RG'), (nums([.6]), b'w'),
                              (nums([49, 46]), b'm'), (nums([W-49, 46]), b'l'), ([], b'S'), ([], b'Q')])
    identity = [1, 0, 0, 1, 0, 0]
    stream.operations.extend(text_ops(['Jozef Kovac'], 49, H-34, 7.2, 8.64, identity, color=MUTED))
    number_width = pdfmetrics.stringWidth('2 / 2', 'OriginalRegular', 7.2)
    stream.operations.extend(text_ops(['2 / 2'], W-49-number_width, H-34, 7.2, 8.64, identity, color=MUTED))
    page2[NameObject('/Contents')] = stream

writer = PdfWriter()
if include_pharmacy:
    assert data['omit_other_pharmacy_references'], 'The original pharmacy slot must be removed before reordering it'

    def merge_region(target, source, top, bottom, offset=0):
        """Move original artwork while removing, rather than hiding, excluded text."""
        fragment = deepcopy(source)
        edit_text(fragment, lambda x, baseline, matrix, font:
                  None if top <= baseline < bottom else 'remove')
        bounds = RectangleObject([0, H-bottom, W, H-top])
        fragment.cropbox = bounds
        fragment.trimbox = RectangleObject(bounds)
        fragment[NameObject('/Annots')] = ArrayObject([
            annotation for annotation in fragment.get('/Annots', [])
            if top <= H-(float(annotation.get_object()['/Rect'][1])+
                          float(annotation.get_object()['/Rect'][3]))/2 < bottom
        ])
        target.merge_transformed_page(fragment, Transformation().translate(0, offset))

    writer.add_page(page1)                           # Header, profile and four software roles.
    second = writer.add_blank_page(width=W, height=H)
    merge_region(second, pharmacy_source, 65, 175)    # Earliest role follows FPT on page two.
    merge_region(second, page2, 183, H)               # Projects, skills, certifications, footer.
else:
    writer.add_page(page1); writer.add_page(page2)
writer.add_metadata({'/Title': data['document_title'], '/Author': 'Jozef Kováč'})
writer.root_object[NameObject('/ViewerPreferences')] = DictionaryObject({
    NameObject('/DisplayDocTitle'): BooleanObject(True),
})
out = ROOT / 'output/pdf/Jozef_Kovac_CV.pdf'
out.parent.mkdir(parents=True, exist_ok=True)
with out.open('wb') as file:
    writer.write(file)
result = PdfReader(out)
assert len(result.pages) == 2
text = '\n'.join(page.extract_text() for page in result.pages)
if data['omit_other_pharmacy_references']:
    if include_pharmacy:
        page_one = result.pages[0].extract_text(extraction_mode='layout')
        experience = page_one.split('Experience', 1)[1]
        assert experience.strip().startswith('Software Engineer')
        assert experience.index('Software Engineer') < experience.index(data['founder_title']) < experience.index('Test Automation Engineer') < experience.index('FPT Slovakia')
        assert 'Flying Pharmacist' not in page_one
        assert text.count('Flying Pharmacist') == 1 and text.count('BENU') == 1
        # Pharmacy is present only in the last role, without restoring education
        # or the former pharmacy references in the profile and project cards.
        page_two = result.pages[1].extract_text(extraction_mode='layout')
        assert page_two.strip().startswith('Flying Pharmacist')
        assert page_two.index('Flying Pharmacist') < page_two.index('Selected public projects')
        remainder = page_one + page_two.split('Selected public projects', 1)[1]
        assert not any(word in remainder.lower() for word in ['pharmac', 'pharmdr', 'benu'])
    else:
        assert not any(word in text.lower() for word in ['pharmac', 'pharmdr', 'benu'])
assert data['founder_title'] in text and 'February 2026 - Present' in text
(ROOT / 'output/pdf/Jozef_Kovac_CV.md').write_text('\n\n'.join(
    page.extract_text(extraction_mode='layout').strip() for page in result.pages
)+'\n')
print(out)
