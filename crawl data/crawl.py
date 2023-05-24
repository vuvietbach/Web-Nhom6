from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.common.exceptions import WebDriverException

from webdriver_manager.chrome import ChromeDriverManager
from bs4 import BeautifulSoup

import time
import json

root_url = "https://tiki.vn"
start_links = json.load(open("start.json", "r"))
for start_link in start_links:
    start_link['url'] = root_url + '/' + start_link['url']

with open("links.json", "w") as file:
    json.dump(start_links, file, ensure_ascii=False, indent=4)


driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()))
driver.implicitly_wait(200)

pages = []
limit_pages = 3

def extract_links(html_content, parent_id):
    sub_pages = []
    soup = BeautifulSoup(html_content, 'html.parser')
    items = soup.find_all("a", attrs={"class": "item item--category"})
    for item in items:
        detail_url = item.get("href")
        page = {
            "url": root_url + detail_url,
            "id": item.get_text(),
            "parent_id": parent_id,
        }
        sub_pages.append(page)
    
    sub_pages = sub_pages[:3]
    return sub_pages

def crawl_pages(page, depth=0):
    if depth > 2:
        return
    
    pages.append(page)
    
    driver.get(page['url'])
    time.sleep(3)
    with open(f"pages/{page['id']}.html", 'w') as file:
        file.write(driver.page_source)
    
    sub_pages = extract_links(driver.page_source, page['id'])
    for sub_page in sub_pages:
        crawl_pages(sub_page, depth + 1)


if __name__ == '__main__':
    for start_link in start_links:
        crawl_pages(start_link)
    
    with open("pages.json", "w") as file:
        json.dump(pages, file, ensure_ascii=False, indent=4)
    
    driver.quit()
