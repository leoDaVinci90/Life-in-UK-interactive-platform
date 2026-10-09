// Search Wikimedia Commons for candidate images and print licence metadata.
const q = process.argv.slice(2).join(' ');
const u = new URL('https://commons.wikimedia.org/w/api.php');
Object.entries({action:'query',format:'json',generator:'search',gsrsearch:`filetype:bitmap ${q}`,gsrnamespace:'6',gsrlimit:'8',prop:'imageinfo',iiprop:'url|extmetadata|size',iiextmetadatafilter:'LicenseShortName|Artist|DateTimeOriginal'}).forEach(([k,v])=>u.searchParams.set(k,v));
const r = await fetch(u,{headers:{'User-Agent':'LifeInUKStudy/0.1 (personal study project)'}});
const j = await r.json();
for (const p of Object.values(j.query?.pages??{})) { const ii=p.imageinfo[0]; const m=ii.extmetadata; console.log(`${p.title} | ${m.LicenseShortName?.value} | ${(m.Artist?.value||'').replace(/<[^>]+>/g,'').slice(0,60)} | ${ii.width}x${ii.height}`); }
