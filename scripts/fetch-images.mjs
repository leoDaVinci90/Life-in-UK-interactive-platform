// Downloads openly licensed images from Wikimedia Commons into public/images
// and records attribution in src/content/credits/<unitId>.json.
//
// Usage: node scripts/fetch-images.mjs <unitId> <list.json>
//   list.json = { "<imageId>": "File:Exact Commons title.jpg", ... }
// Image ids must be unique across the whole site. Already-downloaded ids are skipped.
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const [unitId, listPath] = process.argv.slice(2);
if (!unitId || !listPath) {
  console.error('Usage: node scripts/fetch-images.mjs <unitId> <list.json>');
  process.exit(1);
}
const UA = { 'User-Agent': 'LifeInUKStudy/0.1 (personal, non-commercial study project)' };
const IMAGES = JSON.parse(await readFile(listPath, 'utf8'));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const strip = (s = '') => s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

async function getJson(url) {
  for (let attempt = 0; attempt < 6; attempt++) {
    const res = await fetch(url, { headers: UA });
    const text = await res.text();
    try { return JSON.parse(text); } catch { await sleep(10000 * (attempt + 1)); }
  }
  throw new Error('Commons API kept rate-limiting; try again later.');
}
async function getBytes(url) {
  for (let attempt = 0; attempt < 6; attempt++) {
    const res = await fetch(url, { headers: UA });
    if (res.ok) return Buffer.from(await res.arrayBuffer());
    await sleep(10000 * (attempt + 1));
  }
  throw new Error(`Download failed: ${url}`);
}
const extFromBytes = (b) =>
  b[0] === 0x89 && b[1] === 0x50 ? 'png' : b[0] === 0xff && b[1] === 0xd8 ? 'jpg' : b.slice(0, 4).toString() === 'RIFF' ? 'webp' : 'jpg';
function size(b) {
  if (b[0] === 0x89) return [b.readUInt32BE(16), b.readUInt32BE(20)];
  let i = 2;
  while (i < b.length) {
    const marker = b[i + 1];
    const len = b.readUInt16BE(i + 2);
    if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) return [b.readUInt16BE(i + 7), b.readUInt16BE(i + 5)];
    i += 2 + len;
  }
  return [0, 0];
}

const creditsPath = `src/content/credits/${unitId}.json`;
let credits = {};
try { credits = JSON.parse(await readFile(creditsPath, 'utf8')); } catch {}
await mkdir('public/images', { recursive: true });

for (const [id, title] of Object.entries(IMAGES)) {
  if (credits[id] && existsSync(`public${credits[id].src}`)) continue;
  const u = new URL('https://commons.wikimedia.org/w/api.php');
  Object.entries({ action: 'query', format: 'json', titles: title, prop: 'imageinfo', iiprop: 'url|extmetadata|size', iiurlwidth: '1600' })
    .forEach(([k, v]) => u.searchParams.set(k, v));
  const page = Object.values((await getJson(u)).query.pages)[0];
  if (!page.imageinfo) { console.warn('✗ missing', id, title); continue; }
  const ii = page.imageinfo[0];
  const m = ii.extmetadata;
  const bytes = await getBytes(ii.thumburl ?? ii.url);
  const file = `/images/${id}.${extFromBytes(bytes)}`;
  await writeFile(`public${file}`, bytes);
  const [width, height] = size(bytes);
  credits[id] = {
    src: file,
    width: width || ii.thumbwidth || ii.width,
    height: height || ii.thumbheight || ii.height,
    title: title.replace(/^File:/, ''),
    author: strip(m.Artist?.value) || 'Unknown',
    licence: strip(m.LicenseShortName?.value),
    licenceUrl: m.LicenseUrl?.value ?? null,
    sourceUrl: ii.descriptionurl,
  };
  await writeFile(creditsPath, JSON.stringify(credits, null, 2) + '\n');
  console.log('✓', id, credits[id].licence, `${credits[id].width}x${credits[id].height}`, '|', credits[id].author.slice(0, 60));
  await sleep(4000);
}
