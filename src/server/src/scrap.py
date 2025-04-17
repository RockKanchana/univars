import sys
import time

import requests
from bs4 import BeautifulSoup
import xml.etree.ElementTree as ET
import ollama
import pandas as pd

from firecrawl.firecrawl import FirecrawlApp
from pydantic import BaseModel, Field

SITE_URL = "https://esoft.lk"

def scrape_page_content(url):

    app = FirecrawlApp(api_key="fc-dbd7eb301a4f41d7a540d36ccc4f12a9")

    class ExtractSchema(BaseModel):
        company_mission: str
        supports_sso: bool
        is_open_source: bool
        is_in_yc: bool

        # Start scraping

    print("Starting extraction...")

    # Simulate progress bar while waiting for the request to complete
    for i in range(10):  # Adjust range based on expected duration
        sys.stdout.write(f"\rExtracting... {i * 10}%")
        sys.stdout.flush()
        time.sleep(0.5)  # Adjust delay as needed

    scrape_status = app.scrape_url(
        url,
        params={'formats': ['markdown', 'html']}
    )

    print("\rExtraction complete!")
    return {"content": scrape_status}

    # Crawl a website:
    # crawl_status = app.crawl_url(
    #     'https://esoft.lk',
    #     params={
    #         'limit': 100,
    #         'scrapeOptions': {'formats': ['markdown', 'html']}
    #     },
    #     poll_interval=30
    # )
    # print(crawl_status)

# def fetch_sitemap_urls(sitemap_url):
#     """Fetch all page URLs from the sitemap."""
#     response = requests.get(sitemap_url)
#     if response.status_code != 200:
#         print("Failed to fetch sitemap")
#         return []
#
#     # Parse XML
#     root = ET.fromstring(response.text)
#     all_urls = [url.text for url in root.findall(".//{http://www.sitemaps.org/schemas/sitemap/0.9}loc")]
#     print(f"Found {len(all_urls)} URLs in the sitemap.")
#
#     # Filter only URLs containing "program", "degree", "course"
#     program_urls = [url for url in all_urls if
#                     any(keyword in url.lower() for keyword in ["/program", "/degree", "/course"])]
#
#     print(f"Found {len(program_urls)} program-related URLs.")
#     return program_urls
#
#
# def scrape_page_content(url):
#     """Scrape the main content from a webpage."""
#     response = requests.get(url)
#     if response.status_code != 200:
#         print(f"Failed to fetch {url}")
#         return None
#
#     soup = BeautifulSoup(response.text, 'html.parser')
#
#     # Extract title
#     title = soup.title.text.strip() if soup.title else "No Title"
#
#     # Extract main content (adjust selectors based on structure)
#     content = ""
#     main_section = soup.select_one("div.main-content")  # Adjust selector
#     if main_section:
#         content = main_section.get_text(separator=" ", strip=True)
#     else:
#         content = soup.get_text(separator=" ", strip=True)[:2000]  # Fallback (first 2000 chars)
#
#     return {"title": title, "content": content, "url": url}


def generate_llm_summary(page_data):
    """Pass scraped data to Llama 3.2 for a structured summary."""
    prompt = f"""
        Based on the following course details, generate a structured comparison matrix and table:

        {page_data}

        Provide a table with columns: Course Name, Duration, Fee in LKR, Key Topics.
        Also, generate a short comparison matrix for top courses.
        """

    print("\rGenerating summary...")

    for i in range(10):
        sys.stdout.write(f"\rGenerating... {i * 10}%")
        sys.stdout.flush()
        time.sleep(0.5)

    response = ollama.chat(
        model="llama3.2",
        messages=[{"role": "system", "content": "You are an intelligent web page summarizer."},
                  {"role": "user", "content": prompt}]
    )

    return response["message"]["content"]


def main():
    """Main function to scrape and summarize site content."""
    # urls = fetch_sitemap_urls(SITEMAP_URL)
    all_data = []

    # for idx, url in enumerate(urls[:10]):  # Limit to 10 for testing
    #     print(f"Scraping ({idx+1}/{len(urls)}): {url}")
    page_data = scrape_page_content(SITE_URL)
    if page_data:
        summary = generate_llm_summary(page_data)
        page_data["summary"] = summary
        all_data.append(page_data)

    # Save to CSV
    pd.DataFrame(all_data).to_csv("uniwise_data.csv", index=False)
    print("\r✅ Scraping complete! Data saved to 'uniwise_data.csv'.")


if __name__ == "__main__":
    main()
