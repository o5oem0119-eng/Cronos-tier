"""
script.md에서 [VISUAL] 태그 간격이 너무 먼 구간을 찾아
자동으로 추가 씬 태그를 삽입하는 스크립트.

기준: 연속된 빈 줄(---)이나 ## 헤더 뒤에 [VISUAL]이 없으면 삽입.
"""
import re
import os

SCRIPT_PATH = os.path.join(
    os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))),
    "data", "generated", "mongol_empire", "script.md"
)

# 씬 타입 순환 (단조롭지 않게 배경/컴포넌트 번갈아 사용)
SCENE_CYCLE = [
    """[VISUAL]
  배경: 1번 (다크 페이퍼)
  조합: 캐릭터 단독
  캐릭터: 몽골 낙서체 캐릭터
[/VISUAL]""",
    """[VISUAL]
  배경: 2번 (라이트 페이퍼 A)
  조합: 형광펜 텍스트
[/VISUAL]""",
    """[VISUAL]
  배경: 3번 (라이트 페이퍼 B)
  조합: 픽토그램 단독
  픽토그램: 말(horse) 아이콘
[/VISUAL]""",
    """[VISUAL]
  배경: 1번 (다크 페이퍼)
  조합: 캐릭터 + 말풍선
  캐릭터: 몽골 낙서체 캐릭터
  말풍선: "..."
[/VISUAL]""",
    """[VISUAL]
  배경: 2번 (라이트 페이퍼 A)
  조합: 사료 이미지 단독
  사료: "몽골 제국 역사 기록"
  출처: 위키미디어 커먼즈
[/VISUAL]""",
]

def count_visuals(content):
    return content.count("[VISUAL]")

def insert_visuals(content):
    lines = content.split("\n")
    result = []
    cycle_idx = 0
    lines_since_visual = 0
    in_visual_block = False

    for i, line in enumerate(lines):
        stripped = line.strip()

        # [VISUAL] 블록 진입/탈출 추적
        if stripped == "[VISUAL]":
            in_visual_block = True
            lines_since_visual = 0
        elif stripped == "[/VISUAL]":
            in_visual_block = False
            result.append(line)
            continue

        if in_visual_block:
            result.append(line)
            continue

        # 씬 삽입 조건:
        # 1. 섹션 구분선 또는 헤더에서 3줄 이상 쌓였을 때
        # 2. 빈 줄(단락 전환)에서 5줄 이상 쌓였을 때
        should_insert = False
        if (stripped == "---" or stripped.startswith("## ")) and lines_since_visual >= 3:
            should_insert = True
        elif stripped == "" and lines_since_visual >= 5:
            should_insert = True

        if should_insert:
            result.append(line)
            result.append("")
            result.append(SCENE_CYCLE[cycle_idx % len(SCENE_CYCLE)])
            result.append("")
            cycle_idx += 1
            lines_since_visual = 0
        else:
            result.append(line)
            if stripped:
                lines_since_visual += 1

    return "\n".join(result)

def main():
    with open(SCRIPT_PATH, "r", encoding="utf-8") as f:
        content = f.read()

    before = count_visuals(content)
    print(f"Before: {before} scenes")

    updated = insert_visuals(content)
    after = count_visuals(updated)
    print(f"After:  {after} scenes")

    with open(SCRIPT_PATH, "w", encoding="utf-8") as f:
        f.write(updated)

    print(f"Done. Added {after - before} scenes.")

if __name__ == "__main__":
    main()
