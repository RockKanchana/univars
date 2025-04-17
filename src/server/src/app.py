from flask import Flask, request, jsonify, make_response
from flask_cors import CORS

import sys
import time
import requests
import pandas as pd
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

    for i in range(5):  # Shortened for performance
        sys.stdout.write(f"\rExtracting... {i * 20}%")
        sys.stdout.flush()
        time.sleep(0.3)

    scrape_status = firecrawl_app.scrape_url(
        url,
        params={'formats': ['markdown', 'html']}
    )

    return {"content": scrape_status}

def generate_llm_summary(page_data):
    prompt = f"""
        Based on the following course details, generate a structured comparison matrix and table
        in HTML format (with table border).

        {page_data}

        Provide a HTML table with columns: Course Name, Duration, Fee in LKR, Key Topics.
        Also, generate a short comparison matrix for top courses in HTML.
    """

    for i in range(5):
        sys.stdout.write(f"\rGenerating... {i * 20}%")
        sys.stdout.flush()
        time.sleep(0.3)

    response = ollama.chat(
        model="llama3.2",
        messages=[
            {"role": "system", "content": "You are an intelligent web page summarizer."},
            {"role": "user", "content": prompt}
        ]
    )

    return response["message"]["content"]

@app.route("/scrape", methods=['GET', 'POST', 'OPTIONS'])
def scrape_and_summarize():
    if request.method == 'OPTIONS':
        response = make_response()
        response.headers['Access-Control-Allow-Origin'] = '*'
        response.headers['Access-Control-Allow-Methods'] = 'POST, OPTIONS'
        response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
        return response

    data = request.get_json()
    url = data.get("url")

    if not url:
        return jsonify({"error": "Missing 'url' in request body"}), 400

    try:
        page_data = scrape_page_content(url)
        summary = generate_llm_summary(page_data)
        page_data["summary"] = summary

        # Optionally save to CSV
        pd.DataFrame([page_data]).to_csv("uniwise_data.csv", index=False)

        return jsonify(page_data)

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
