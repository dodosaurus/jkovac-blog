import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import sharp from 'sharp';

const root = new URL('../', import.meta.url).pathname;
const directory = path.join(root, 'content/case-studies');
await fs.mkdir(path.join(root, 'public/case-studies/thumbnails'), { recursive: true });
for (const file of await fs.readdir(directory)) {
  if (!file.endsWith('.md') || file === 'README.md') continue;
  const { data } = matter(await fs.readFile(path.join(directory, file), 'utf8'));
  if (!data.media.some(media => media.src === data.thumbnail && !media.type)) {
    throw new Error(`Choose an image from the gallery as the thumbnail in ${file}`);
  }
  await sharp(path.join(root, 'public', data.thumbnail))
    .resize(720, 450, { fit: 'cover', position: 'centre' })
    .webp({ quality: 82 })
    .toFile(path.join(root, 'public/case-studies/thumbnails', `${data.slug}.webp`));
}
