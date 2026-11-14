import sharp from 'sharp';
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<rect width="1200" height="630" fill="#090909"/>
<defs><pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse"><path d="M 80 0 L 0 0 0 80" fill="none" stroke="#191919" stroke-width="1"/></pattern></defs>
<rect width="1200" height="630" fill="url(#grid)"/><rect x="72" y="74" width="90" height="90" fill="none" stroke="#aaa"/>
<g font-family="monospace"><text x="90" y="133" fill="#f1f1ef" font-size="44">JK</text>
<text x="72" y="300" fill="#f1f1ef" font-size="65">I build software.</text>
<text x="72" y="380" fill="#9a9a96" font-size="54">And confidence in it.</text>
<text x="72" y="479" fill="#9a9a96" font-size="24">JOZEF KOVÁČ / SOFTWARE ENGINEER &amp; SDET</text>
<text x="72" y="566" fill="#6f6f6b" font-size="22">jkovac.eu</text></g>
<path d="M72 525H1128" stroke="#30302e"/></svg>`;
await sharp(Buffer.from(svg)).png().toFile(new URL('../public/social-card.png', import.meta.url).pathname);
