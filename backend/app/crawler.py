from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from bs4 import BeautifulSoup
import time

class LinkedInCrawler:
    def __init__(self, username: str, password: str):
        self.username = username
        self.password = password
        self.driver = self.init_driver()

    def init_driver(self):
        options = webdriver.ChromeOptions()
        options.add_argument('--headless')  # Run in headless mode
        options.add_argument('--no-sandbox')
        options.add_argument('--disable-dev-shm-usage')
        return webdriver.Chrome(options=options)

    def login(self):
        self.driver.get("https://www.linkedin.com/login")
        time.sleep(2)
        self.driver.find_element("id", "username").send_keys(self.username)
        self.driver.find_element("name", "session_password").send_keys(self.password)
        self.driver.find_element("xpath", '//*[@id="organic-div"]/form/div[3]/button').click()
        time.sleep(3)

    def scrape_profile(self, url: str):
        self.driver.get(url)
        time.sleep(2)
        soup = BeautifulSoup(self.driver.page_source, "html.parser")
        try:
            name = soup.find('li', class_='inline t-24 t-black t-normal break-words').text.strip()
            title = soup.find('h2', class_='mt1 t-18 t-black t-normal break-words').text.strip()
            location = soup.find('li', class_='t-16 t-black t-normal inline-block').text.strip()
            return {"name": name, "title": title, "location": location, "url": url}
        except AttributeError:
            return {"error": "Data not found for the profile"}

    def crawl_profiles(self, profiles: list[str]):
        self.login()
        results = []
        for profile in profiles:
            data = self.scrape_profile(profile)
            results.append(data)
        self.driver.quit()
        return results
