import json
import re
path = 'src/axios/data/products.json'
with open(path, 'r') as f:
    data = json.load(f)

for k, v in data.items():
    for item in v:
        item['price'] = int(item['price'][:-2].replace('.', ''))
        item['number_sold'] = 0 if item['number_sold'] == '' else int(re.sub(r'\D', '', item['number_sold']))
        item['rating'] = 0 if item['rating'] == '' else float(item['rating'])

with open(path, 'w') as f:
    json.dump(data, f, indent=4, ensure_ascii=False)