---
description: 역사 데이터를 기반으로 TierZoo 스타일의 대본과 V4 비주얼 계획을 생성하는 자동화 워크플로우.
---

# 🚀 Generation Workflow: /generate-video

이 워크플로우는 역사 원본 텍스트를 게임형 분석 데이터로 변환하고, 이를 바탕으로 단일 대본(V4 공식 적용)과 시각 연출 계획을 생성하는 전 과정을 자동화합니다.

## 실행 프로세스 (Execution Steps)

### 1단계: 역사 분석 (Stage 1)
- **입력**: `data/source/{episode_id}_source.md`
- **에이전트**: `History_Strategist`
- **작업**: 원본 역사 텍스트를 게임 스탯 구조로 파싱 (대본에 수치를 직접 넣는 것이 아니라, UI 연출용 재료로만 사용)
- **출력**: `data/stats/{episode_id}_stats.json`

### 2단계: 대본 초안 작성 (Stage 2)
- **에이전트**: `TierZoo_Writer`
- **참고**: `directives/Chronos_Engine_Narrative_Formula_v4.md`
- **작업**: V4 공식과 서사 구조가 적용된 단일 대본 작성. 씬 단위로 `[VISUAL]` 태그 삽입.
- **출력**: `script.md`

### 3단계: 코드 기반 대본 검수 (Stage 3)
- **도구**: `stage3_reviewer.py`
- **작업**: 마디 리듬, 필수 훅, `[VISUAL]` 태그 유효성 등을 기계적 검수
- **출력**: `review_report.json`

### 4단계: 비주얼 계획 및 프롬프트 추출 (Stage 4)
- **에이전트**: `Visual_Director`
- **작업**: 대본의 `[VISUAL]` 태그를 해석하여 사료 검색 키워드 및 낙서체 캐릭터 생성을 위한 에셋 계획 추출. 렌더링용 JSON 스키마 변환.
- **출력**: `scenario.json`, `asset_plan.json`

### 5단계: 에셋 자동 생성 (Stage 5)
- **도구**: `source_crawler.py`, `character_generator.py`
- **작업**: 사료 크롤링 및 3단계 파이프라인을 거친 낙서체(Doodle) 캐릭터 생성.
- **출력**: `assets/sources/` (사료), `assets/characters/` (누끼 PNG)

### 6단계: 영상 조립 (Stage 6)
- **도구**: Remotion (`SceneRenderer.tsx`)
- **작업**: 생성된 JSON과 에셋들을 조합하여 최종 mp4 출력.
- **출력**: `final.mp4`

---

## 💡 사용 팁
- 스탯(능력치) 숫자는 대본 나레이션 본문에 직접 언급하지 마세요. 모든 수치와 티어 평가는 `[VISUAL]` 태그를 통한 화면 연출로만 보여줍니다.
- 캐릭터 디자인을 변경하고 싶다면 Stage 4를 다시 실행하거나 `asset_plan.json`을 직접 수정하세요.
