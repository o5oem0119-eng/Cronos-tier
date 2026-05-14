import os
import json
import time
import base64
import requests
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()
client = OpenAI()

EPISODE_ID = "mongol_empire"
BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
PLAN_PATH = os.path.join(BASE_DIR, "data", "generated", EPISODE_ID, "asset_plan.json")

def generate_doodle_character(char_info):
    nation = char_info.get("nation", "unknown")
    animal = char_info.get("animal", "animal")
    attire = char_info.get("attire", "historical warrior attire")
    output_dir = os.path.join(BASE_DIR, "assets", "characters", nation)
    os.makedirs(output_dir, exist_ok=True)

    print(f"Generating character: {nation} ({animal}) via gpt-image-2...")

    # 핵심: 투명 배경 + 흰색 sticker outline (TierZoo 스타일)
    prompt = (
        f"A cartoon doodle character of a {animal} warrior wearing {attire}. "
        f"Style: hand-drawn sketch/doodle like TierZoo YouTube channel — simple crayon/marker lines, "
        f"flat colors with slight texture. "
        f"CRITICAL: The character must have a THICK WHITE OUTLINE/BORDER around it (sticker effect). "
        f"Background must be TRANSPARENT or pure white so the character can be cut out. "
        f"Full body, standing upright, facing slightly sideways. Simple but recognizable."
    )

    try:
        response = client.images.generate(
            model="gpt-image-2",
            prompt=prompt,
            n=1,
            size="1024x1024"
        )

        img_data = None
        item = response.data[0]

        # gpt-image-2는 b64_json으로 기본 반환
        if hasattr(item, 'b64_json') and item.b64_json:
            img_data = base64.b64decode(item.b64_json)
        elif hasattr(item, 'url') and item.url:
            img_data = requests.get(item.url).content

        if not img_data:
            print(f"[ERROR] 이미지 데이터 없음. response: {item}")
            return

        output_path = os.path.join(output_dir, "doodle.png")
        with open(output_path, 'wb') as f:
            f.write(img_data)
        print(f"Saved: {output_path} ({len(img_data)} bytes)")

        # Remotion public 폴더에도 복사
        remotion_dir = os.path.join(BASE_DIR, "remotion", "public", "assets", "characters", nation)
        os.makedirs(remotion_dir, exist_ok=True)
        with open(os.path.join(remotion_dir, "doodle.png"), 'wb') as f:
            f.write(img_data)

    except Exception as e:
        print(f"[ERROR] 생성 실패: {e}")


def main():
    if not os.path.exists(PLAN_PATH):
        print("asset_plan.json 없음. visual_planner.py 먼저 실행하세요.")
        return

    with open(PLAN_PATH, "r", encoding="utf-8") as f:
        plan = json.load(f)

    for char in plan.get("characters", []):
        generate_doodle_character(char)
        time.sleep(1)

    print("Character generation complete.")


if __name__ == "__main__":
    main()
