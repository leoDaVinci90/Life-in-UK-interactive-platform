"""Build simplified SVG outlines of Britain, Ireland and the near continent
from Natural Earth (public domain) 10m admin-0 GeoJSON.

Usage: python3 scripts/build-map.py path/to/ne_10m_admin_0_countries.geojson
Writes src/content/map/basemap.json. Projection is in src/lib/geo.ts (keep in sync).
"""
import json, math, sys

LON0, LAT0 = -11.0, 61.2          # top-left corner
K = 60.0                           # pixels per degree of latitude
COS = math.cos(math.radians(55))   # horizontal compression at ~55°N
W, H = round(15.0 * K * COS), round(12.4 * K)

def project(lon, lat):
    return ((lon - LON0) * K * COS, (LAT0 - lat) * K)

def simplify(pts, tol=0.7):
    out = [pts[0]]
    for p in pts[1:]:
        if math.dist(p, out[-1]) >= tol:
            out.append(p)
    return out

KEEP = {'United Kingdom': 'uk', 'Isle of Man': 'crown', 'Jersey': 'crown', 'Guernsey': 'crown',
        'Ireland': 'ireland', 'France': 'continent', 'Belgium': 'continent',
        'Netherlands': 'continent', 'Germany': 'continent', 'Denmark': 'continent', 'Norway': 'continent'}

data = json.load(open(sys.argv[1]))
paths = {}
for f in data['features']:
    name = f['properties']['NAME']
    if name not in KEEP:
        continue
    g = f['geometry']
    polys = g['coordinates'] if g['type'] == 'MultiPolygon' else [g['coordinates']]
    d = []
    for poly in polys:
        ring = [project(*c) for c in poly[0]]
        xs, ys = [p[0] for p in ring], [p[1] for p in ring]
        if max(xs) < -20 or min(xs) > W + 20 or max(ys) < -20 or min(ys) > H + 20:
            continue
        ring = simplify(ring)
        if len(ring) < 4:
            continue
        d.append('M' + 'L'.join(f'{x:.1f},{y:.1f}' for x, y in ring) + 'Z')
    if d:
        paths.setdefault(KEEP[name], []).append(''.join(d))

out = {'width': W, 'height': H, 'projection': {'lon0': LON0, 'lat0': LAT0, 'k': K, 'cos': COS},
       'source': 'Natural Earth 1:10m Admin 0 – Countries (public domain), naturalearthdata.com',
       'paths': {k: ''.join(v) for k, v in paths.items()}}
import os
os.makedirs('src/content/map', exist_ok=True)
json.dump(out, open('src/content/map/basemap.json', 'w'))
print(W, H, {k: len(v) for k, v in out['paths'].items()})
