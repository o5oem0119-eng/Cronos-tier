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
OUTPUT_PATH = os.path.join(BASE_DIR, "data", "generated", EPISODE_ID, "image_prompts.json")
STYLE_PRESET_PATH = os.path.join(BASE_DIR, "knowledge", "reference", "Visual_Style_Preset.md")

# 스타일 프리셋 로드
with open(STYLE_PRESET_PATH, "r", encoding="utf-8") as f:
    STYLE_PRESET = f.read()

def generate_image_prompt(scene_json):
    scene_id = scene_json['scene_structure']['scene_id']
    narration = scene_json['scene_structure'].get('narration_text', '')
    components = [c['type'] for c in scene_json['scene_structure']['components']]
    
    prompt = f"""
ROLE:
image prompt generator for historical documentary YouTube videos with game UI style

INPUT:
scene_id: {scene_id}
narration: {narration}
ui_components: {', '.join(components)}
visual_style_reference: {STYLE_PRESET}

TASK:
convert each scene unit into image-generation prompts for historical documentary visuals

PROCESS:
1 read the scene unit (narration and UI components)
2 identify:
- historical period (Joseon Dynasty)
- location
- main subject
- clothing / armor / props
- mood
- camera angle
- composition
- lighting
- background details
3 generate one main image prompt per scene in English
4 keep prompts historically grounded based on provided source material
5 avoid modern objects unless explicitly required (apply negative prompts)
6 create prompts suitable for cinematic AI image generation
7 game UI overlay suggestion: If UI components exist, dictate composition to leave the bottom 30% with empty space/negative space (e.g., blurry ground, shadows) so UI elements do not cover the main subject.

OUTPUT FORMAT:
(Must Output strictly in valid JSON format)
{{
    "scene_id": "{scene_id}",
    "scene_title": "A short dramatic title for the scene",
    "description": "Scene summary and camera motion suggestion",
    "prompt": "Main image prompt (must include {STYLE_PRESET} suffix and UI overlay negative space instructions)",
    "negative_prompt": "modern objects, text, ui, artifacts",
    "status": "pending",
    "retry_count": 0
}}
"""
    
    response = client.chat.completions.create(
        model="gpt-5.4-nano", # orchestration.md 설계도 기준 모델 적용
        messages=[{"role": "system", "content": "You are a professional AI image prompt engineer. Always output valid JSON."},
                  {"role": "user", "content": prompt}],
        response_format={"type": "json_object"}
    )
    
    return json.loads(response.choices[0].message.content)

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
        json.dump(prompts, f, ensure_ascii=False, indent=4)
        
    print(f"Successfully saved prompts to {OUTPUT_PATH}", flush=True)

if __name__ == "__main__":
    main()
