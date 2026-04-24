# 🚀 Project: Chronos Engine (크로노스 엔진)

## 🎯 Goal
- 역사, 경제 등 다양한 카테고리의 사건을 'Tier Zoo' 스타일의 게임 메타(스탯, 콤보, 패치노트 등)로 치환하여 분석.
- 대본 생성부터 영상 편집까지 전 과정을 처리하는 유튜브 콘텐츠 제작 자동화 프로그램 개발.

## 🛠 Tech Stack
- **Frontend/Video:** React, Remotion (영상 렌더링용)
- **Backend:** Node.js
- **Style:** Tailwind CSS
- **Language:** TypeScript
- **AI/Analysis:** NotebookLM, Gemini API (대본 및 분석용)

## 📋 Current Progress (Logs)
- [2026-04-07] 프로젝트 환경 설정 및 Global Rules 정의 완료.
- [2026-04-07] 5가지 전문 요원 워크플로우(blueprint, reflector, fix, ui-polish, doc) 등록 완료.
- [2026-04-07] 'Tier Zoo' 스타일의 역사 분석 로직 및 단종 비극 서사 템플릿 확보.
- [2026-04-07] **유튜브 롱폼(10분+) 제작 전략 스킬(`Longform_Strategy`) 수립 및 `generate-video` 워크플로우 통합 완료.**
- [2026-04-09] 에피소드 1(계유정난의 서막) 대본 및 이미지 프롬프트 생성 완료.
- [2026-04-09] `wiki/` 내 28개 유튜브 제작 가이드라인 문서 학습 및 내부 메모리 저장 완료.
- [2026-04-13] **자동화 엔진 사양 확정 (FHD 1080p, 30fps, NVIDIA GPU 가속 적용).**
- [2026-04-13] **시나리오 생성(Scenario Generation) 단계 정의 및 `scene_01.json` 테스트 데이터 생성 완료.**
- [2026-04-13] **인트로 대본 후킹 강화 (임팩트 버전으로 교체 및 저장 완료).**
- [2026-04-13] **`Longform_Strategy.md` v2.0 전면 리라이트 완료.** TierZoo 벤치마킹 가이드, 실제 대본 20편+ 분석, wiki 28개 가이드라인을 통합. 5단계→7단계 정밀 구조, 60~90초 연속 리텐션 방어, 다층적 게임 비유 체계, 투 칼럼 AV 스크립트 포맷 도입.
- [2026-04-13] **`script_v4.md` 생성 완료.** v2.0 전략의 7단계 구조를 완벽 적용한 10분 풀 AV 대본. 품질 체크리스트 전항목 통과.
- [2026-04-13] **에이전트 동기화 완료: `TierZoo_Writer.md` v2.0, `Visual_Director.md` v2.0.** 롱폼 전략과 비주얼 태그 시스템 완전 연동.
- [2026-04-13] **Google Labs Flow 자동화 기술 검증 완료.** 나노바나나2 모델과 마스터 스타일 프롬프트 결합 테스트 성공.
- [2026-04-13] **이원화 연출 원칙 확정.** 이미지(순수 에셋)와 리모션(게임 UI)을 분리하여 생성하는 최적 프로세스 수립.
- [2026-04-13] **고속 배치 생성기(Fast-Batcher) 아키텍처 수립.** Playwright 기반 병렬 이미지 생성 및 자동 다운로드 파이프라인 설계.

## 🔜 Next Steps (Todo)
1. [ ] **전체 시나리오 JSON 데이터화.** (script_v4.md -> scenario.json). 씬별 프롬프트 및 UI 상태값 추출.
2. [ ] **`Chronos Fast-Batcher` (Playwright) 개발.** 구글 플로우 병렬 이미지 생성 및 자동 다운로드 스크립트 구현.
3. [ ] **리모션(Remotion) 프로젝트 초기화 및 UI 컴포넌트 개발.** HP 바, 시스템 메시지 박스 등 `Production_Logic.md` 사양 구현.
4. [ ] **풀 에피소드 통합 렌더링.** JSON 기반 비주얼/오디오/UI 자동 조립 및 mp4 출력 테스트.

## ⚠️ Project Rules & Hierarchy
- **Supreme Authority:** 이 파일(`orchestration.md`)의 지침은 모든 작업의 최우선 순위임.
- **Persona:** 모든 에이전트는 '안티그래비티'의 페르소나를 유지하며, 한국어로 답변함.
- **Output Format:** [결론/해결책] -> [코드/대본] -> [상세 설명] 순서의 두괄식 답변 준수.

---

# ⚙ Chronos Execution Pipeline

이 문서는 Chronos Engine의 실제 실행 순서를 정의한다. Code(스크립트/자동화)와 LLM(에이전트)의 역할을 명확히 분리하여 8단계로 작동한다.

---

## Stage 0 — Source Intake

**입력:**
- `data/source/*.md`

**Code 역할:**
- 파일 병합 및 정리
- `source_master.md` 생성

**LLM 역할 (Advanced):**
- 핵심 인물 추출
- 사건 timeline 정리
- 팩션 구조 추출
- 관계 그래프 텍스트 생성

**출력:**
- `data/source/{episode_id}_source.md`

---

## Stage 1 — Historical Game Analysis

**담당:** `.agents/History_Strategist.md`

**입력:**
- `{episode_id}_source.md`

**LLM 역할 (Advanced):**
- 역사 자료 → 게임 스탯 / 상성 / 티어 분석

**Code 역할:**
- `stat_schema.json` 검증
- 파일 저장

**출력:**
- `data/stats/{episode_id}_stats.json`
- `data/generated/{episode_id}/optimized_analysis.md`

---

## Stage 2 — Longform Script Writing

**담당:** `.agents/TierZoo_Writer.md`

**입력:**
- `optimized_analysis.md`
- `stats.json`
- `template/pening_game_over_structure.md` (조건부 비극 에피소드용)

**LLM 역할 (Advanced):**
- TierZoo 스타일 롱폼 대본 작성 (AV Script 포맷, VIDEO/AUDIO 분리, visual tags 포함)

**Code 역할:**
- 파일 저장 및 버전 관리

**출력:**
- `script_v1.md`

---

## Stage 3 — Script Review

**담당:** `.agents/TierZoo_Writer.md` + review checklist

**LLM 역할 (Advanced):**
- 검수: 리텐션 구조, open loop, pattern interrupt, tone violation, historical distortion risk, tragic respect level, visualization feasibility

**Code 역할:**
- `review_report.json` 저장 및 통과 여부 기록

**출력:**
- `script_v2.md`
- `review_report.json`

---

## Stage 4 — Visual Planning (FIRST API CONNECTION)

*여기가 핵심입니다. (실제 렌더링을 위한 데이터 변환)*

**입력:**
- `script_v2.md`
- `.agents/skills/TierZoo_Styling_Guide/visual_tag_map.md`
- `.agents/skills/TierZoo_Styling_Guide/scene_schema.json`
- `.agents/skills/TierZoo_Styling_Guide/ui_schema.json`
- `stats.json`

**LLM 역할 (Fast):**
- `[INTRO CARD]` → IntroCard component JSON 변환
- `[SYSTEM LOG]` → SystemLog JSON 변환 등

**Code 역할:**
- `scene_schema.json` 및 `ui_schema.json` validation
- 실패 시 auto-repair 요청

**출력:**
- `scene_00.json`, `scene_01.json`, `scene_02.json` ...
- `image_prompts.md`
- `scene_plan.md`

---

## Stage 5 — Asset Generation

**입력:**
- `image_prompts.md`

**Code 역할:**
- TubeFlow / Playwright batch / Google Flow 실행

**LLM 역할 (Fast):**
- 프롬프트 실패 수정, 누락 이미지 재생성 (에러 대응)

**출력:**
- `assets/generated/{episode_id}/images/*`

---

## Stage 6 — Remotion Assembly

**입력:**
- `scene_*.json`
- `assets/images/*`
- `remotion/components/*.tsx`
- `remotion/components/SceneRenderer.tsx`

**Code 역할:**
- `npx remotion render` 실행

**LLM 역할 (Fast):**
- 렌더 오류 로그 해석 (component missing, stat mismatch, invalid props, scene duration conflict 등) 및 수정 방향 제안

**출력:**
- `preview.mp4`
- `final.mp4`

---

## Stage 7 — Knowledge Feedback

**입력:**
- `final.mp4`
- `script_v2.md`
- `scene_plan.md`

**LLM 역할 (Fast):**
- 성공한 hook, 효과적인 UI 패턴, 좋은 visual timing, 강한 retention 구조 추출

**Code 역할:**
- 파일 저장, `log.md` 업데이트

**출력:**
- `wiki/script-patterns/{episode_id}.md`
- `wiki/visual-patterns/{episode_id}.md`

---

## 실제 엔진 구조 (최종 형태) & API 연결 위치

순서:
1️⃣ Stage 4 Visual Planning
2️⃣ Stage 3 Script Review
3️⃣ Stage 1 Historical Analysis
4️⃣ Stage 2 Script Writing
5️⃣ Stage 7 Feedback

**Chronos 실행 흐름:**
`source.md` → **History_Strategist (LLM)** → `stats.json` → **TierZoo_Writer (LLM)** → `script_v1.md` → **Script Review (LLM)** → `script_v2.md` → **Visual Director (LLM)** → `scene_*.json` → **Asset Generator (Code)** → `images` → **SceneRenderer (Code)** → `final.mp4` → **Feedback Extractor (LLM)** → wiki patterns 저장

---

## MVP 완성 기준 체크리스트

이게 되면 Chronos MVP 완성입니다:
- [ ] `source.md` 넣기
- [ ] `stats.json` 자동 생성
- [ ] `script.md` 자동 생성
- [ ] `scene.json` 자동 생성
- [ ] `remotion render` 실행
- [ ] `mp4` 출력