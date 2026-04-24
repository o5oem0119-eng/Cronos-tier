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

**LLM 역할:**
- ❌ **사용 안함** (순수 Code 처리)

**Code 역할:**
- 파일 병합 및 텍스트 파싱
- `source_master.md` 생성

**출력:**
- `data/source/{episode_id}_source.md`

---

## Stage 1 — Historical Game Analysis

**입력:**
- `{episode_id}_source.md`

**LLM 역할 (`gpt-5.3-mini`):**
- 역사 자료 → 게임 스탯 / 상성 / 티어 분석

**Code 역할:**
- `stat_schema.json` 검증
- 파일 저장

**출력:**
- `data/stats/{episode_id}_stats.json`
- `data/generated/{episode_id}/optimized_analysis.md`

---

## Stage 2 — Longform Script Writing

**입력:**
- `optimized_analysis.md`
- `stats.json`
- `template/pening_game_over_structure.md` (조건부 비극 에피소드용)

**LLM 역할 (`gpt-5.3`):**
- TierZoo 스타일 롱폼 대본 작성 (AV Script 포맷, VIDEO/AUDIO 분리, visual tags 포함)
- 단 1회 호출로 최종 완성본 도출

**Code 역할:**
- 파일 저장 및 버전 관리

**출력:**
- `script.md` (v1/v2 분리 없이 단일 파일)

---

## Stage 3 — Script Review

**입력:**
- `script.md`

**LLM 역할:**
- ❌ **사용 안함** (순수 Code 처리)

**Code 역할:**
- 정규식 및 패턴 매칭을 통한 기계적 검수 (마크다운 표 구조, 단어 수, 필수 훅 존재 여부 등)
- 통과 여부를 담은 채점표 자동 생성

**출력:**
- `review_report.json`

---

## Stage 4 — Visual Planning (FIRST API CONNECTION)

**입력:**
- `script.md`
- `.agents/skills/TierZoo_Styling_Guide/visual_tag_map.md`
- `.agents/skills/TierZoo_Styling_Guide/scene_schema.json`
- `.agents/skills/TierZoo_Styling_Guide/ui_schema.json`
- `stats.json`

**LLM 역할 (`gpt-5.3-mini`):**
- 대본을 Remotion용 JSON 스키마로 변환
- 이미지 생성 프롬프트 추출

**Code 역할:**
- 씬별 파일 파편화 방지 -> 단일 `scenario.json`으로 병합

**출력:**
- `scenario.json` (scene_00, 01 파편화 방지)
- `image_prompts.md`

---

## Stage 5 — Asset Generation

**입력:**
- `image_prompts.md`

**LLM 역할:**
- ❌ **사용 안함** (순수 Code 처리)

**Code 역할:**
- TubeFlow / Playwright batch / Google Flow 자동 실행 및 이미지 다운로드

**출력:**
- `assets/generated/{episode_id}/images/*`

---

## Stage 6 — Remotion Assembly

**입력:**
- `scenario.json`
- `assets/images/*`
- `remotion/components/*.tsx`
- `remotion/components/SceneRenderer.tsx`

**LLM 역할:**
- ❌ **사용 안함** (순수 Code 처리)

**Code 역할:**
- `npx remotion render` 자동 실행

**출력:**
- `preview.mp4`
- `final.mp4`

---

## Stage 7 — Knowledge Feedback

**입력:**
- `final.mp4`
- `script.md`

**LLM 역할:**
- ❌ **사용 안함** (순수 Code 처리)

**Code 역할:**
- 파일 및 데이터 로그를 Wiki에 이동 저장

**출력:**
- `knowledge_base/script-patterns/{episode_id}.md`

---

## 실제 엔진 구조 (최종 형태) & API 연결 위치

**크레딧 방어 최적화 흐름:**
`source.md` → **Code** → `stats.json` (gpt-5.3-mini) → **TierZoo_Writer (gpt-5.3)** → `script.md` → **Code Check** → `review_report.json` → **Visual Director (gpt-5.3-mini)** → `scenario.json` & `prompts.md` → **Code Batch** → `images` → **Code Render** → `final.mp4` → **Code Backup**

---

## MVP 완성 기준 체크리스트

이게 되면 Chronos MVP 완성입니다:
- [ ] `source.md` 넣기
- [ ] `stats.json` 자동 생성 (gpt-5.3-mini)
- [ ] `script.md` 단일 자동 생성 (gpt-5.3)
- [ ] `review_report.json` 코드 기반 자동 생성 (LLM ❌)
- [ ] `scenario.json` 단일 파일 생성 (gpt-5.3-mini)
- [ ] `remotion render` 실행 (LLM ❌)
- [ ] `mp4` 출력