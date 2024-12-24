import os

def validate_profiles(profiles):
    return all(profile.startswith("https://www.linkedin.com/") for profile in profiles)
