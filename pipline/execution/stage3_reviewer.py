import os
import re
import json

def review_script(script_path):
    with open(script_path, 'r', encoding='utf-8') as f:
        script_text = f.read()

    # 1. 금지 태그 스캔 (즉시 불합격)
    if '[✖ INCORRECT]' in script_text:
        raise ValueError("오류: 역사적 사실과 명백히 다름 (INCORRECT 감지됨). 대본을 다시 생성하세요.")

    # 2. 팩트 비율 계산 (정규식 스캔)
    verified_count = len(re.findall(r'\[✔ VERIFIED\]', script_text))
    myth_count = len(re.findall(r'\[❗ MYTH\]', script_text))

    # 3. 품질 기준 통과 여부 확인
    if myth_count > 3:
        raise ValueError(f"오류: 야사/루머 비중이 너무 높습니다 (현재 {myth_count}회 / 최대 3회 허용).")
    
    if verified_count < 5:
        raise ValueError(f"오류: 검증된 팩트가 부족합니다 (현재 {verified_count}회 / 최소 5회 필요). 스크립트 신뢰도 저하.")

    # 4. 검수 리포트 자동 생성 (orchestration.md의 Stage 3 출력물)
    report = {
        "status": "PASS",
        "verified_count": verified_count,
        "myth_count": myth_count,
        "message": "✅ 팩트 체크 통과! (Code-based Review 완료)"
    }
    
    # 보고서를 파일로 저장 (예: reports/review_report.json)
    os.makedirs('../../reports', exist_ok=True)
    with open('../../reports/review_report.json', 'w', encoding='utf-8') as f:
        json.dump(report, f, ensure_ascii=False, indent=4)

    print(report["message"])

if __name__ == "__main__":
    # 실제 대본이 저장되는 경로를 지정해 줍니다.
    target_script = "../../data/generated/danjong_tragedy_long/script.md"
    
    if os.path.exists(target_script):
        review_script(target_script)
    else:
        print(f"대본 파일을 찾을 수 없습니다: {target_script}")
