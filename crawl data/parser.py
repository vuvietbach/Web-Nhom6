from lxml import html
from lxml import etree

import json
import re

from bs4 import BeautifulSoup



all_products = {}
def extract_details(product):
    detail = {}
    try:
        detail['url'] = product.get('href')
        detail['title'] = product.find('div', attrs={'class': 'name'}).find('h3').text
        detail['price'] = product.find('div', attrs={'class': 'price-discount__price'}).text
        detail['image_url'] = product.find('div', attrs={'class': 'image-wrapper'}).find('img').get('src')
        
        sold = product.find('div', attrs={'class': 'styles__StyledQtySold-sc-732h27-2 fCfYNm'})
        if sold is not None:
            detail['number_sold'] = sold.text
        else:
            detail['number_sold'] = ""
        
        rating = product.find('div', attrs={'class': 'full-rating'})
        if rating is not None:
            detail['rating'] = rating.find('span').text 
        else:
            detail['rating'] = ""  
        return detail
    
    except Exception as e:
        return None

def extract_products(page):
    
    with open(f'pages/{page["id"]}.html', 'r') as file:
        html_content = file.read()
    
    soup = BeautifulSoup(html_content, 'html.parser')
    
    products = soup.find_all("a", attrs={"class": "product-item"})
    details = []
    for product in products:
        detail = extract_details(product)
        if detail is not None:
            detail['category'] = page['id']
            details.append(detail)
    all_products[page['id']] = details

if __name__ == "__main__":
    with open("pages.json", "r") as file:
        pages = json.load(file)
    for page in pages:
        extract_products(page)
    with open("products.json", "w") as file:
        json.dump(all_products, file, ensure_ascii=False, indent=4)