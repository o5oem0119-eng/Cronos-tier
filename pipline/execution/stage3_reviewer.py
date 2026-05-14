import os
import re
import json

EPISODE_ID = "mongol_empire"
BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SCRIPT_PATH = os.path.join(BASE_DIR, "data", "generated", EPISODE_ID, "script.md")
OUTPUT_PATH = os.path.join(BASE_DIR, "data", "generated", EPISODE_ID, "review_report.json")

def review_script(content):
    report = {
        "passed": True,
        "issues": [],
        "warnings": []
    }
    
    # 1. [VISUAL] 태그 사용 검사
    if "[VISUAL]" not in content:
        report["passed"] = False
        report["issues"].append("Missing [VISUAL] tags. V4 scripts must use [VISUAL] for scene composition.")
    
    # 2. 내레이션 내 구체적 스탯 수치 포함 검사 (간단한 휴리스틱)
    if re.search(r"(방어력|공격력|생존력|기동력)이 \d+", content):
        report["passed"] = False
        report["issues"].append("Found specific stat numbers in narration. Stats must be strictly separated and shown via UI only.")
    
    # 3. 씬 수량 카운트 (참고용 — 최소 기준 없음)
    # 실제 씬 duration은 오디오 파일 길이로 결정됨. 수량 자체는 강제하지 않음.
    scene_count = content.count("[VISUAL]")
    report["scene_count"] = scene_count
    
    return report

def main():
    if not os.path.exists(SCRIPT_PATH):
        print(f"Script not found at {SCRIPT_PATH}")
        return
        
    with open(SCRIPT_PATH, "r", encoding="utf-8") as f:
        content = f.read()
        
    report = review_script(content)
    
    out_dir = os.path.dirname(OUTPUT_PATH)
    if not os.path.exists(out_dir):
        os.makedirs(out_dir)

    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        json.dump(report, f, indent=4, ensure_ascii=False)
        
    print(f"Review report saved to {OUTPUT_PATH}")
    if report["passed"]:
        print("Script passed V4 review!")
    else:
        print("Script failed V4 review with issues:", report["issues"])

if __name__ == "__main__":
    main()
