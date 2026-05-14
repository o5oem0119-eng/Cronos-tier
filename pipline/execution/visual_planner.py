import os
import json
import re
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

EPISODE_ID = "mongol_empire"
BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SCRIPT_PATH = os.path.join(BASE_DIR, "data", "generated", EPISODE_ID, "script.md")
OUTPUT_DIR = os.path.join(BASE_DIR, "data", "generated", EPISODE_ID)

def generate_visual_plans(script_content):
    prompt = f"""
너는 Chronos Engine의 Visual Planner(Visual_Director 에이전트)이다.
아래의 전체 대본을 분석하여, 단일 `scenario.json`과 `asset_plan.json`을 생성하라.

[작성 규칙]
1. `scenario.json`: 모든 씬을 배열로 포함하는 단일 JSON. 
   - 각 씬은 `background` (1, 2, 3 중 하나), `text` (자막바 텍스트), `components` (StatCard, WobblySpeechBubble 등 V4 컴포넌트 목록) 속성을 가져야 함.
2. `asset_plan.json`: 대본 전체에 필요한 사료 이미지와 캐릭터 생성 정보를 담음.
   - `sources`: [{{"id": "src_01", "keyword": "...", "scene_index": 0}}]
   - `characters`: [{{"id": "char_01", "nation": "mongol", "animal": "wolf", "attire": "..."}}]
3. 오직 아래 지정된 JSON 형식으로만 2개의 키를 가진 JSON 객체를 리턴하라:
{{
  "scenario": {{
    "scenes": [ ... ]
  }},
  "asset_plan": {{
    "sources": [ ... ],
    "characters": [ ... ]
  }}
}}

[전체 대본]
{script_content}
"""
    response = client.chat.completions.create(
        model="gpt-4o",
        messages=[
            {"role": "system", "content": "You output only valid JSON."},
            {"role": "user", "content": prompt}
        ],
        response_format={"type": "json_object"}
    )
    return json.loads(response.choices[0].message.content)

def main():
    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)
        
    print(f"Loading script: {SCRIPT_PATH}", flush=True)
    if not os.path.exists(SCRIPT_PATH):
        print("Script file not found. Run Stage 2 first.")
        return

    with open(SCRIPT_PATH, "r", encoding="utf-8") as f:
        script_content = f.read()
    
    print("Generating visual plans via LLM...", flush=True)
    try:
        plans = generate_visual_plans(script_content)
        
        scenario_path = os.path.join(OUTPUT_DIR, "scenario.json")
        with open(scenario_path, "w", encoding="utf-8") as f:
            json.dump(plans.get("scenario", {}), f, indent=4, ensure_ascii=False)
        print(f"Saved: {scenario_path}", flush=True)
        
        asset_plan_path = os.path.join(OUTPUT_DIR, "asset_plan.json")
        with open(asset_plan_path, "w", encoding="utf-8") as f:
            json.dump(plans.get("asset_plan", {}), f, indent=4, ensure_ascii=False)
        print(f"Saved: {asset_plan_path}", flush=True)
            
    except Exception as e:
        print(f"Failed to generate plans: {e}", flush=True)

if __name__ == "__main__":
    main()
