// Downloads openly licensed images from Wikimedia Commons into public/images
// and records attribution in src/content/image-credits.json.
// Usage: node scripts/fetch-images.mjs  (edit the list below to add images)
import { writeFile, mkdir, readFile } from 'node:fs/promises';

const UA = { 'User-Agent': 'LifeInUKStudy/0.1 (personal, non-commercial study project)' };
const IMAGES = {
  'stonehenge': 'File:Stonehenge2007 07 30.jpg',
  'skara-brae': 'File:Skara Brae - geograph.org.uk - 3912232.jpg',
  'round-barrow': 'File:Bronze Age Round Barrow (geograph 7057789).jpg',
  'maiden-castle': 'File:Aerial photograph of Maiden Castle from the west, 1937.jpg',
  'cunobelinus-coin': 'File:Iron Age coin , stater of Cunobelinus (FindID 881348).jpg',
  'julius-caesar': 'File:Retrato de Julio César (3x4 close cropped).jpg',
  'claudius': 'File:Claudius MAN Napoli Inv6060 (cropped).jpg',
  'boudicca-statue': 'File:Boudica statue, Westminster (8433726848).jpg',
  'hadrians-wall': "File:Hadrian's Wall west of Housesteads 3.jpg",
  'housesteads': "File:Hadrian's Wall and Housesteads Roman Fort aerial.jpg",
  'sutton-hoo-helmet': 'File:Sutton Hoo helmet 2016.png',
  'iona-abbey': 'File:Iona Abbey - general view from SW.jpg',
  'augustine-gospels': 'File:Meister des Evangelienbuches des Heiligen Augustinus 001.jpg',
  'alfred-statue': 'File:Statue alfred the great winchester.jpg',
  'cnut-emma': 'File:Blmsstowe944fol6r.jpg',
  'bayeux-harold': 'File:Bayeux Tapestry scene57 Harold death (cropped).jpg',
  'domesday-book': 'File:Domesday-book-1804x972.jpg',
};

const strip = (s = '') => s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const creditsPath = 'src/content/image-credits.json';
let credits = {};
try { credits = JSON.parse(await readFile(creditsPath, 'utf8')); } catch {}
await mkdir('public/images', { recursive: true });

for (const [id, title] of Object.entries(IMAGES)) {
  if (credits[id]) continue;
  const u = new URL('https://commons.wikimedia.org/w/api.php');
  Object.entries({ action: 'query', format: 'json', titles: title, prop: 'imageinfo', iiprop: 'url|extmetadata|size', iiurlwidth: '1600' })
    .forEach(([k, v]) => u.searchParams.set(k, v));
  const page = Object.values((await (await fetch(u, { headers: UA })).json()).query.pages)[0];
  if (!page.imageinfo) { console.warn('✗ missing', id, title, JSON.stringify(page).slice(0, 200)); continue; }
  const ii = page.imageinfo[0];
  const m = ii.extmetadata;
  const src = ii.thumburl ?? ii.url;
  const ext = new URL(src).pathname.split('.').pop().toLowerCase().replace('jpeg', 'jpg');
  const file = `/images/${id}.${ext}`;
  const res = await fetch(src, { headers: UA });
  if (!res.ok) throw new Error(`${id}: ${res.status}`);
  await writeFile(`public${file}`, Buffer.from(await res.arrayBuffer()));
  credits[id] = {
    src: file,
    width: ii.thumbwidth ?? ii.width,
    height: ii.thumbheight ?? ii.height,
    title: title.replace(/^File:/, ''),
    author: strip(m.Artist?.value) || 'Unknown',
    licence: strip(m.LicenseShortName?.value),
    licenceUrl: m.LicenseUrl?.value ?? null,
    sourceUrl: ii.descriptionurl,
  };
  await mkdir('src/content', { recursive: true });
  await writeFile(creditsPath, JSON.stringify(credits, null, 2) + '\n');
  console.log('✓', id, credits[id].licence, `${credits[id].width}x${credits[id].height}`);
  await new Promise((r) => setTimeout(r, 7000));
}
await mkdir('src/content', { recursive: true });
await writeFile(creditsPath, JSON.stringify(credits, null, 2) + '\n');
