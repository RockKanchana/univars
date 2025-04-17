import traceback
from concurrent.futures import ThreadPoolExecutor

import asyncio
from crawl4ai import AsyncWebCrawler

from flask import Flask, request, jsonify, make_response
from flask_cors import CORS

import sys
import time
from bs4 import BeautifulSoup
import ollama
from firecrawl.firecrawl import FirecrawlApp
from pydantic import BaseModel

app = Flask(__name__)
CORS(app, origins="*", allow_headers="*", methods="*")

FIRECRAWL_API_KEY = "fc-dbd7eb301a4f41d7a540d36ccc4f12a9"

class ExtractSchema(BaseModel):
    company_mission: str
    supports_sso: bool
    is_open_source: bool
    is_in_yc: bool

def scrape_page_content(url):
    firecrawl_app = FirecrawlApp(api_key=FIRECRAWL_API_KEY)
    scrape_status = firecrawl_app.scrape_url(
        url,
        params={'formats': ['markdown', 'html']}
    )

    # async with AsyncWebCrawler(verbose=True) as crawler:
    #   result = await crawler.arun(url)
    #   print(result.markdown)

    return {"content": scrape_status}

def generate_llm_summary(page_data, program_type, program_field, program_duration, program_fee):
    prompt = f"""
        You are a smart assistant helping students to choose the right academic program.

        The following is the course information dump:

        {page_data}

        From above data please filter and show only the courses that meet **all** of the following
        criteria:
        - Program Type: {program_type}
        - Program Field: {program_field}
        - Program Duration: {program_duration}
        - Program Fee: {program_fee}

        Generate & output the results as **pure HTML**, with a single `<table border='1'>` using
        these columns:
        - Course Name
        - Duration
        - Fee in LKR
        - Key Topics
        - Offering Institute/University
        - Next Intake Date

        [IMPORTANT] Do not include any code snippets, explanations, or extra text.

        If there is no any courses match, return a simple paragraph saying: “No matching courses
        found.”
    """
    response = ollama.chat(
        model="llama3.2",
        messages=[
            {"role": "system", "content": "You are an intelligent web page summarizer."},
            {"role": "user", "content": prompt}
        ]
    )

    return response["message"]["content"]


def scrape_and_summarize_single(url, program_type, program_field, program_duration, program_fee):
  try:
    page_data = scrape_page_content(url)
    summary = generate_llm_summary(page_data, program_type, program_field, program_duration,
                                   program_fee)
    page_data["summary"] = summary
    page_data["source_url"] = url
    return page_data
  except Exception as e:
    return {"error": str(e), "source_url": url}

@app.route("/scrape", methods=['GET', 'POST', 'OPTIONS'])
def scrape_and_summarize():
    if request.method == 'OPTIONS':
        response = make_response()
        response.headers['Access-Control-Allow-Origin'] = '*'
        response.headers['Access-Control-Allow-Methods'] = 'POST, OPTIONS'
        response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
        return response

    data = request.get_json()
    urls = data.get("url")
    program_type = data.get("program_type")
    program_field = data.get("program_field")
    program_duration = data.get("program_duration")
    program_fee = data.get("program_fee")

    if not urls or not isinstance(urls, list):
        return jsonify({"error": "'url' should be a list of URLs"}), 400

    try:
        all_page_data = []

        with ThreadPoolExecutor() as executor:
            futures = [
                executor.submit(scrape_page_content, u)
                for u in urls
            ]
            for future in futures:
                result = future.result()
                if "content" in result:
                    all_page_data.append(result["content"])

        combined_content = "\n\n".join(page["content"] for page in all_page_data if "content" in page)

        final_summary = generate_llm_summary(combined_content, program_type, program_field, program_duration, program_fee)

        return jsonify({"summary": final_summary})

    except Exception as e:
        traceback.print_exc()
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
