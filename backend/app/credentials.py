import os

def get_credentials():
    username = os.getenv("LINKEDIN_USERNAME", "your_username")
    password = os.getenv("LINKEDIN_PASSWORD", "your_password")
    if not username or not password:
        raise ValueError("Missing LinkedIn credentials")
    return username, password
