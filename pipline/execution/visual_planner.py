import os
import json
import re
from openai import OpenAI
from dotenv import load_dotenv

# 환경 변수 로드
load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# 경로 설정
EPISODE_ID = "danjong_tragedy_long"
BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SCRIPT_PATH = os.path.join(BASE_DIR, "data", "generated", EPISODE_ID, "script_v4.md")
OUTPUT_DIR = os.path.join(BASE_DIR, "data", "generated", EPISODE_ID, "scenes")
SCHEMA_DIR = os.path.join(BASE_DIR, ".agents", "skills", "TierZoo_Styling_Guide")

# 데이터 로드
with open(os.path.join(SCHEMA_DIR, "scene_schema.json"), "r", encoding="utf-8") as f:
    SCENE_SCHEMA = f.read()
with open(os.path.join(SCHEMA_DIR, "ui_schema.json"), "r", encoding="utf-8") as f:
    UI_SCHEMA = f.read()
with open(os.path.join(SCHEMA_DIR, "visual_tag_map.md"), "r", encoding="utf-8") as f:
    VISUAL_TAG_MAP = f.read()
with open(os.path.join(BASE_DIR, "data", "stats", f"{EPISODE_ID}_stats.json"), "r", encoding="utf-8") as f:
    STATS_JSON = f.read()

def parse_markdown_script(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Stage별로 분리
    stages = re.split(r"## ■ STAGE \d+:", content)
    metadata = stages[0]
    stages = stages[1:]
    
    all_scenes = []
    for stage_idx, stage_content in enumerate(stages):
        # 테이블 추출
        table_match = re.search(r"\| VIDEO \| AUDIO \|\n\| :--- \| :--- \|\n((?:\|.*\|(?:\n|$))*)", stage_content)
        if table_match:
            rows = table_match.group(1).strip().split("\n")
            for row in rows:
                cols = [c.strip() for c in row.split("|") if c.strip()]
                if len(cols) >= 2:
                    all_scenes.append({
                        "stage": stage_idx + 1,
                        "video": cols[0],
                        "audio": cols[1]
                    })
    
    return all_scenes

def generate_scene_json(scene_data, scene_index):
    prompt = f"""
너는 Chronos Engine의 Visual Planner이다.
아래의 대본 행(Row)을 분석하여 Remotion 렌더링을 위한 JSON 데이터로 변환하라.

[대본 정보]
VIDEO: {scene_data['video']}
AUDIO: {scene_data['audio']}

[참조 데이터]
STATS_JSON:
{STATS_JSON}

[참조 스키마]
SCENE_SCHEMA:
{SCENE_SCHEMA}

UI_SCHEMA:
{UI_SCHEMA}

VISUAL_TAG_MAP:
{VISUAL_TAG_MAP}

[작성 규칙]
1. 반드시 JSON 형식으로만 답변하라.
2. `scene_id`는 `scene_{scene_index:02d}` 형식으로 작성하라.
3. `components` 배열에는 `ui_schema.json`에 정의된 컴포넌트 타입을 사용하라.
4. `visual_tag_map.md`를 참조하여 VIDEO 지시어를 적절한 컴포넌트와 속성으로 매핑하라.
5. `narration_text`는 AUDIO 컬럼의 NARRATOR 대사만 추출하여 작성하라.
6. `audio` 객체에는 `music_cue`와 `sfx`를 포함하라.

JSON:
"""
    
    response = client.chat.completions.create(
        model="gpt-5.4-nano", # orchestration.md 설계도 기준 모델 적용
        messages=[{"role": "system", "content": "You are a professional JSON generator for a video production engine."},
                  {"role": "user", "content": prompt}],
        response_format={"type": "json_object"}
    )
    
    return json.loads(response.choices[0].message.content)

def main():
    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)
        
    print(f"Loading script: {SCRIPT_PATH}", flush=True)
    scenes = parse_markdown_script(SCRIPT_PATH)
    print(f"Detected {len(scenes)} scenes.", flush=True)
    
    for i, scene in enumerate(scenes):
        print(f"Converting scene {i:02d}... (Stage {scene['stage']})", flush=True)
        try:
            scene_json = generate_scene_json(scene, i)
            file_name = f"scene_{i:02d}.json"
            with open(os.path.join(OUTPUT_DIR, file_name), "w", encoding="utf-8") as f:
                json.dump(scene_json, f, indent=4, ensure_ascii=False)
            print(f"Saved: {file_name}", flush=True)
        except Exception as e:
            print(f"Failed scene {i:02d}: {e}", flush=True)

if __name__ == "__main__":
    main()
