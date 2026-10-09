// Search Wikimedia Commons and print candidates with licence and author.
// Usage: node scripts/commons-search.mjs "search terms"
const q = process.argv.slice(2).join(' ');
const u = new URL('https://commons.wikimedia.org/w/api.php');
Object.entries({ action: 'query', format: 'json', generator: 'search', gsrsearch: `filetype:bitmap ${q}`, gsrnamespace: '6', gsrlimit: '10', prop: 'imageinfo', iiprop: 'url|extmetadata|size', iiextmetadatafilter: 'LicenseShortName|Artist|ImageDescription' })
  .forEach(([k, v]) => u.searchParams.set(k, v));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let j;
for (let attempt = 0; attempt < 6 && !j; attempt++) {
  const text = await (await fetch(u, { headers: { 'User-Agent': 'LifeInUKStudy/0.1 (personal study project)' } })).text();
  try { j = JSON.parse(text); } catch { await sleep(10000 * (attempt + 1)); }
}
if (!j) { console.error('Rate-limited, try again in a minute.'); process.exit(1); }
for (const p of Object.values(j.query?.pages ?? {})) {
  const ii = p.imageinfo[0];
  const m = ii.extmetadata;
  const clean = (s = '') => s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  console.log(`${p.title} | ${clean(m.LicenseShortName?.value)} | ${clean(m.Artist?.value).slice(0, 60)} | ${ii.width}x${ii.height} | ${clean(m.ImageDescription?.value).slice(0, 90)}`);
}
