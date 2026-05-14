import os
import json
import urllib.request
import urllib.parse
import time

EPISODE_ID = "mongol_empire"
BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
PLAN_PATH = os.path.join(BASE_DIR, "data", "generated", EPISODE_ID, "asset_plan.json")
OUTPUT_DIR = os.path.join(BASE_DIR, "assets", "sources", EPISODE_ID)

def download_image(keyword, source_id):
    # MVP용 임시 플레이스홀더 (추후 위키미디어 API 연동 예정)
    print(f"Searching for: {keyword}...")
    safe_keyword = urllib.parse.quote(keyword)
    url = f"https://placehold.co/800x600/F8F8F0/1E3A5F.png?text={safe_keyword}"
    
    output_path = os.path.join(OUTPUT_DIR, f"{source_id}.png")
    try:
        urllib.request.urlretrieve(url, output_path)
        print(f"Downloaded: {output_path}")
    except Exception as e:
        print(f"Failed to download {keyword}: {e}")

def main():
    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)
        
    if not os.path.exists(PLAN_PATH):
        print("asset_plan.json not found. Run Stage 4 first.")
        return
        
    with open(PLAN_PATH, "r", encoding="utf-8") as f:
        plan = json.load(f)
        
    sources = plan.get("sources", [])
    for src in sources:
        download_image(src.get("keyword", "Image"), src["id"])
        time.sleep(1)
        
    print("Source crawling complete.")

if __name__ == "__main__":
    main()
