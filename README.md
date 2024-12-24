# LinkedIn Web Crawler

## Project Overview

The **LinkedIn Web Crawler** is a tool designed to extract publicly available data from LinkedIn profiles and company pages. It enables users to scrape information such as job titles, locations, summaries, and other key details from LinkedIn’s public-facing content. The crawler handles multiple URLs, supports pagination, and includes anti-bot measures to prevent blocking by LinkedIn’s anti-scraping mechanisms.

This project is divided into two main components:
1. **Backend**: Built using Python to perform the actual web crawling, data extraction, and output generation.
2. **Frontend**: A React-based interface that allows users to initiate crawls, view results, and navigate through the crawled data.

### Features:
- Crawl LinkedIn public profiles (e.g., individuals' profiles, company pages)
- Extract key details:
  - **Profiles**: Name, Job Title, Location, Summary/About Section
  - **Company Pages**: Company Name, Industry, Headquarters Location, Overview/About Section
- Pagination support to handle multiple pages of results
- Anti-bot mechanisms (headers, proxies, rate-limiting)
- Structured output in JSON format
- Simple web interface for managing crawl tasks and viewing results

## Project Structure

```
linkedin-web-crawler/
├── backend/                  # Backend folder for Python or Node.js crawler
│   ├── __init__.py           # Python package initializer (if using Python)
│   ├── crawler.py            # Main web crawling script
│   ├── scraper_utils.py      # Helper functions for scraping and data cleaning
│   ├── config.py             # Configuration file for headers, proxies, etc.
│   ├── requirements.txt      # Python dependencies
│   ├── package.json          # Node.js dependencies (if using Node.js backend)
│   └── output/               # Folder to store crawled data
│       ├── profiles.json     # JSON file for profiles
│       ├── companies.json    # JSON file for company data
│       └── logs/             # Logs of crawled sessions or errors
├── frontend/                 # Frontend folder for React
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── index.jsx
│   ├── package.json
│   ├── vite.config.js


```

## Requirements

### Backend:
The backend is built using either **Python**.Below are the required dependencies for both languages:

You can install these dependencies by running the following commands:

**For Python:**
```bash
pip install -r requirements.txt
```

**For Node.js:**
```bash
npm install
```

## Getting Started

To run this project, you need to set up both the backend and the frontend.

### Step 1: Clone the Repository

```bash
git clone https://github.com/chuck-ankit/linkedin-web-crawler.git
cd linkedin-web-crawler
```

### Step 2: Set up the Backend

1. **Python Setup** (if using Python):
   - Install dependencies:
     ```bash
     pip install -r backend/requirements.txt
     ```
   - Navigate to the `backend/` folder and run the crawler script:
     ```bash
     python backend/crawler.py
     ```

2. **Node.js Setup** (if using Node.js):
   - Install dependencies:
     ```bash
     npm install
     ```
   - Navigate to the `backend/` folder and run the crawler:
     ```bash
     node backend/crawler.js
     ```

### Step 3: Set up the Frontend

1. Navigate to the `frontend/` folder:
   ```bash
   cd frontend
   ```
   
2. Install the required frontend dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

This **LinkedIn Web Crawler** project allows users to gather LinkedIn data efficiently while providing a user-friendly interface for easy management and viewing of results. Be sure to respect LinkedIn’s terms of service and use this tool responsibly.
