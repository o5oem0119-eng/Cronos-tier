import os
import json
import time

EPISODE_ID = "mongol_empire"
BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
PLAN_PATH = os.path.join(BASE_DIR, "data", "generated", EPISODE_ID, "asset_plan.json")
TEMPLATE_PATH = os.path.join(BASE_DIR, "assets", "characters", "_template", "character_reference.png")

def generate_doodle_character(char_info):
    nation = char_info.get("nation", "unknown")
    animal = char_info.get("animal", "animal")
    output_dir = os.path.join(BASE_DIR, "assets", "characters", nation)
    
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
        
    print(f"Starting 3-step pipeline for {nation} ({animal})...")
    print(f" - [Step 1] Loading reference: {TEMPLATE_PATH}")
    print(f" - [Step 2] img2img conversion: Changing face to {animal}")
    print(f" - [Step 3] Applying scribble/doodle style & removing background...")
    
    # MVP용 더미 파일 생성 (추후 Replicate 등 API 연동 예정)
    output_path = os.path.join(output_dir, "doodle.png")
    with open(output_path, "w") as f:
        f.write("dummy image data")
        
    print(f"Saved generated character to {output_path}")

def main():
    if not os.path.exists(PLAN_PATH):
        print("asset_plan.json not found. Run Stage 4 first.")
        return
        
    with open(PLAN_PATH, "r", encoding="utf-8") as f:
        plan = json.load(f)
        
    characters = plan.get("characters", [])
    for char in characters:
        generate_doodle_character(char)
        time.sleep(1)
        
    print("Character generation pipeline complete.")

if __name__ == "__main__":
    main()
