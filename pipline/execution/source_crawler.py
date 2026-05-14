import os
import json
import requests
import time
from urllib.parse import quote

EPISODE_ID = "mongol_empire"
BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
PLAN_PATH = os.path.join(BASE_DIR, "data", "generated", EPISODE_ID, "asset_plan.json")
OUTPUT_DIR = os.path.join(BASE_DIR, "assets", "sources", EPISODE_ID)
REMOTION_PUBLIC_DIR = os.path.join(BASE_DIR, "remotion", "public", "assets", "sources", EPISODE_ID)

def search_wikimedia(keyword):
    print(f"Searching Wikimedia Commons for: {keyword}...")
    headers = {
        'User-Agent': 'ChronosCrawler/1.0 (pjm28@example.com)'
    }
    # 1. Search for files
    search_url = f"https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch={quote(keyword)}&srnamespace=6&format=json&srlimit=1"
    
    try:
        r = requests.get(search_url, headers=headers)
        r.raise_for_status()
        data = r.json()
        search_results = data.get('query', {}).get('search', [])
        if not search_results:
            print(f"No results found for {keyword}")
            return None
            
        file_title = search_results[0]['title']
        
        # 2. Get direct image URL
        info_url = f"https://commons.wikimedia.org/w/api.php?action=query&titles={quote(file_title)}&prop=imageinfo&iiprop=url&format=json"
        r_info = requests.get(info_url, headers=headers)
        r_info.raise_for_status()
        data_info = r_info.json()
        pages = data_info.get('query', {}).get('pages', {})
        for page_id in pages:
            image_info = pages[page_id].get('imageinfo', [])
            if image_info:
                return image_info[0]['url']
                
    except Exception as e:
        print(f"Error searching Wikimedia: {e}")
        
    return None

def download_image(url, output_path):
    try:
        r = requests.get(url, stream=True)
        if r.status_code == 200:
            with open(output_path, 'wb') as f:
                for chunk in r.iter_content(1024):
                    f.write(chunk)
            return True
    except Exception as e:
        print(f"Failed to download image: {e}")
    return False

def main():
    for d in [OUTPUT_DIR, REMOTION_PUBLIC_DIR]:
        if not os.path.exists(d):
            os.makedirs(d)
        
    if not os.path.exists(PLAN_PATH):
        print("asset_plan.json not found. Run Stage 4 first.")
        return
        
    with open(PLAN_PATH, "r", encoding="utf-8") as f:
        plan = json.load(f)
        
    sources = plan.get("sources", [])
    for src in sources:
        keyword = src.get("keyword", "History")
        source_id = src["id"]
        
        image_url = search_wikimedia(keyword)
        if image_url:
            # Download to main assets
            local_path = os.path.join(OUTPUT_DIR, f"{source_id}.png")
            if download_image(image_url, local_path):
                print(f"Successfully downloaded to {local_path}")
                # Copy to remotion public
                remotion_path = os.path.join(REMOTION_PUBLIC_DIR, f"{source_id}.png")
                with open(local_path, 'rb') as f_src:
                    with open(remotion_path, 'wb') as f_dst:
                        f_dst.write(f_src.read())
        
        time.sleep(1) # Prevent rate limiting
        
    print("Source crawling complete.")

if __name__ == "__main__":
    main()
