import os
import json
import glob
from openai import OpenAI
from dotenv import load_dotenv

# 환경 변수 로드
load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# 경로 설정
EPISODE_ID = "danjong_tragedy_long"
BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SCENES_DIR = os.path.join(BASE_DIR, "data", "generated", EPISODE_ID, "scenes")
OUTPUT_PATH = os.path.join(BASE_DIR, "data", "generated", EPISODE_ID, "image_prompts.md")
STYLE_PRESET_PATH = os.path.join(BASE_DIR, "knowledge", "reference", "Visual_Style_Preset.md")

# 스타일 프리셋 로드
with open(STYLE_PRESET_PATH, "r", encoding="utf-8") as f:
    STYLE_PRESET = f.read()

def generate_image_prompt(scene_json):
    scene_id = scene_json['scene_structure']['scene_id']
    narration = scene_json['scene_structure'].get('narration_text', '')
    components = [c['type'] for c in scene_json['scene_structure']['components']]
    
    prompt = f"""
너는 Chronos Engine의 Asset Director이다.
아래의 장면(Scene) 정보를 바탕으로, 배경으로 사용할 'Cinematic 2D Vector Art'를 위한 이미지 생성 프롬프트를 작성하라.

[장면 정보]
Scene ID: {scene_id}
Narration: {narration}
UI Components: {', '.join(components)}

[참조 스타일 가이드]
{STYLE_PRESET}

[작성 규칙]
1. 장면의 핵심 사건이나 분위기를 묘사하는 영어 프롬프트를 작성하라.
2. 반드시 스타일 가이드의 'Master Style Prompt' 접미사를 포함하라.
3. UI 컴포넌트가 배치될 위치(하단 30%)는 단순하게 처리하도록 지시하라.
4. 결과물은 반드시 해당 장면의 ID와 프롬프트만 포함하는 마크다운 형식으로 출력하라.

JSON:
"""
    
    response = client.chat.completions.create(
        model="gpt-4o-mini", # 비용 절감을 위해 mini 사용
        messages=[{"role": "system", "content": "You are a professional AI image prompt engineer."},
                  {"role": "user", "content": prompt}]
    )
    
    return response.choices[0].message.content

def main():
    scene_files = sorted(glob.glob(os.path.join(SCENES_DIR, "scene_*.json")))
    print(f"Loading {len(scene_files)} scene files...", flush=True)
    
    prompts = []
    for file_path in scene_files:
        with open(file_path, "r", encoding="utf-8") as f:
            scene_json = json.load(f)
        
        scene_id = scene_json['scene_structure']['scene_id']
        print(f"Generating prompt for {scene_id}...", flush=True)
        try:
            image_prompt = generate_image_prompt(scene_json)
            prompts.append(image_prompt)
        except Exception as e:
            print(f"Failed {scene_id}: {e}", flush=True)
            
    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        f.write("# 🖼️ Image Generation Prompts\n\n")
        f.write("\n\n---\n\n".join(prompts))
        
    print(f"Successfully saved prompts to {OUTPUT_PATH}", flush=True)

if __name__ == "__main__":
    main()
