# 🚀 Project: 크로노스 티어 (Chronos Tier)

> **Supreme Authority:** 이 파일의 모든 지침은 작업의 최우선 순위임.
> 최신 비전 마스터 문서: `reports/Chronos_V4_Vision.md`
> 모든 디자인·스타일 결정은 이 파일과 비전 문서를 최종 기준으로 삼는다.

---

## 🎯 채널 정체성

- **포맷:** TierZoo 스타일의 역사 분석 유튜브 채널
- **톤:** 진지한 역사 분석 + 의도적으로 하찮은 낙서체 캐릭터의 긴장 구조
- **차별화:** 네온/게임 UI 일체 금지. 클린 인포테인먼트 + 낙서 비주얼 언어.

---

## 🛠 Tech Stack

- **Video Rendering:** Remotion (React + TypeScript)
- **Components:** `remotion/components/*.tsx`
- **AI Analysis:** OpenAI API
- **Asset Pipeline:** Python scripts in `pipline/execution/`

---

## 🎨 확정 비주얼 시스템

### 공통 금지 원칙
- ❌ 네온 색상
- ❌ Glow 효과
- ❌ 화려한 그라데이션
- ❌ 다크 배경 + 밝은 바 형태의 게임 UI (격투게임 스탯판 등)
- ❌ `INT`, `STR` 같은 게임 약어

### 배경 시스템
| 번호 | 이름 | 용도 |
|------|------|------|
| 1번 | 다크 스톤 | 기본 내레이션 |
| 2번 | 구겨진 종이 | 사료·문서 등장 |
| 3번 | 전장 지도 | 전투·지리 씬 |

### UI 레퍼런스 이미지
| 컴포넌트 | 레퍼런스 경로 |
|----------|--------------|
| 자막바 (`SubtitleBar`) | `assets/ui_references/subtitle_reference.png` |
| 스탯 카드 (`StatCard`) | `assets/ui_references/statcard_reference.png` |
| 캐릭터 템플릿 | `assets/characters/_template/character_reference.png` |

### 자막바 색상 스펙
| 항목 | 값 |
|------|-----|
| 텍스트 배경 | `#F5F6F3` |
| 텍스트 색상 | 굵은 검은색 |
| 테두리 색상 | `#1E3A5F` |
| 따옴표 그래픽 색상 | `#6E6F73` (대시 없음, 따옴표만) |
| 모션 | **없음** |

### 캐릭터 생성 파이프라인 (3단계)
```
[0단계] 레퍼런스: assets/characters/_template/character_reference.png
        기존 2인 이미지 크롭(반 자르기) → 동물별 단독 이미지 분리

[1단계] img2img + 프롬프트로 변형
        - 동물 얼굴 종류 변경
        - ※ 얼굴 변경 시 반드시 해당 동물의 자연 체색도 함께 변경 명시
        - 시대 의상 변경 (몽골, 로마, 페르시아 등)
        - 국기·문양 뱃지 변경
        - "1명만 나오도록" 프롬프트 명시

[2단계] 낙서 변환 프롬프트 적용
        "첨부한 이미지를 개발새발 세상에서 제일 하찮은 선으로 그려줘.
        배경은 흰색, 그림판에서 마우스로 그린 것 같은 픽셀 단위 그림.
        야 됐고 그냥 니맘대로 그려."

[완성] assets/characters/{nation}/doodle.png → 누끼(PNG 투명 배경)
```

---

## ⚙️ Chronos Execution Pipeline (V4)

### 전체 흐름 요약
```
source.md
  → [Stage 1] 역사 분석 → stats.json + optimized_analysis.md
  → [Stage 2] 대본 작성 → script.md (v4 공식 + [VISUAL] 태그)
  → [Stage 3] 대본 검수 → review_report.json
  → [Stage 4] 사료 수집 계획 → visual_plan.json
  → [Stage 5] 에셋 생성 → 사료 이미지 + 캐릭터 doodle.png
  → [Stage 6] Remotion 조립 → final.mp4
```

---

### Stage 0 — Source Intake

**입력:** `data/source/*.md`
**담당:** Code (LLM 없음)
**작업:** 파일 병합 및 파싱
**출력:** `data/source/{episode_id}_source.md`

---

### Stage 1 — Historical Analysis

**입력:** `{episode_id}_source.md`
**담당:** LLM (`gpt` 계열)
**작업:**
- 역사 자료 → 게임 스탯/상성/티어 분석
- **출력 용도:** `[VISUAL]` 스탯 카드 데이터 전용 (대본에 스탯 수치 직접 삽입 금지)

**출력:**
- `data/stats/{episode_id}_stats.json`
- `data/generated/{episode_id}/optimized_analysis.md`

---

### Stage 2 — Script Writing (V4 공식 적용)

**입력:**
- `optimized_analysis.md`
- `stats.json`
- `directives/Chronos_Engine_Narrative_Formula_v4.md` (필독)

**담당:** LLM

**작업:**
- **V4 대본 공식 기반** 순수 서사 대본 작성
- 씬 단위로 `[VISUAL]` 태그 삽입
- 스탯 수치는 대본 본문에 넣지 말고 `[VISUAL]` StatCard로만 표현

**[VISUAL] 태그 형식:**
```markdown
[VISUAL]
  배경: 1번 (다크 스톤)
  조합: 사료 이미지 + 출처 + 말풍선
  사료: {검색 키워드}
  출처: {출처명}
  말풍선: "{대사}"
[/VISUAL]
```

**가능한 조합:**
- 사료 이미지 + 출처 + 말풍선
- 사료 이미지 + 출처 + 형광펜
- 캐릭터 + 말풍선 + 텍스트
- 픽토그램 + 텍스트
- 배틀씬 단독
- 스탯 카드 단독

**출력:** `data/generated/{episode_id}/script.md`

---

### Stage 3 — Script Review

**입력:** `script.md`
**담당:** Code (LLM 없음)
**작업:** 정규식 기반 자동 검수 (V4 체크리스트: 마디 리듬, 훅 존재 여부, VISUAL 태그 형식 등)
**출력:** `data/generated/{episode_id}/review_report.json`

---

### Stage 4 — Visual Planning

**입력:**
- `script.md`
- `stats.json`

**담당:** LLM

**작업:**
- `[VISUAL]` 태그 → Remotion용 JSON 스키마로 변환
- 사료 이미지 검색 키워드 추출
- 캐릭터 등장 씬에서 동물 종류·의상·뱃지 정보 추출

**출력:**
- `data/generated/{episode_id}/scenario.json`
- `data/generated/{episode_id}/asset_plan.json` (사료 검색 키워드 + 캐릭터 스펙)

---

### Stage 5 — Asset Generation

**입력:** `asset_plan.json`
**담당:** Code (LLM 없음)

**작업:**
1. **사료 이미지:** 키워드 기반 크롤링 → `assets/sources/{episode_id}/`
2. **캐릭터 이미지:** 3단계 파이프라인 실행
   - 레퍼런스 로드 → img2img 변형 → 낙서 변환 → 누끼
   - 저장: `assets/characters/{nation}/doodle.png`

**출력:**
- `assets/sources/{episode_id}/*.jpg`
- `assets/characters/{nation}/doodle.png`

---

### Stage 6 — Remotion Assembly

**입력:**
- `scenario.json`
- `assets/` (사료 이미지 + 캐릭터 누끼)
- `remotion/components/*.tsx`

**담당:** Code (LLM 없음)

**컴포넌트 목록 (개발 우선순위 순):**
| 순위 | 컴포넌트 | 설명 |
|------|----------|------|
| 1 | `<SubtitleBar />` | 사선 컷팅, `#6E6F73` 따옴표, 모션 없음 |
| 2 | `<StatCard />` | 낙서 스타일 A/B/C형, 레퍼런스: `statcard_reference.png` |
| 3 | `<WobblySpeechBubble />` | 캐릭터용 + 사료 오버레이용 |
| 4 | `<HighlightText />` | 형광펜 긋기 애니메이션 |
| 5 | `<Pictographic />` | SVG 픽토그램, spring() 애니메이션 |
| 6 | `<BattleScene />` | 세력 충돌 배틀 씬 |
| 7 | `<SourceBadge />` | 사료 출처 뱃지, 모션 없음 |

**작업:** `npx remotion render` 실행
**출력:** `output/{episode_id}/final.mp4`

---

### Stage 7 — Knowledge Feedback

**입력:** `final.mp4`, `script.md`
**담당:** Code (LLM 없음)
**작업:** 결과물 및 로그를 knowledge_base에 아카이브
**출력:** `knowledge_base/script-patterns/{episode_id}.md`

---

## 📋 현재 진행 상황 (Progress Log)

- [2026-04-07] 프로젝트 환경 설정 및 Global Rules 정의 완료.
- [2026-04-07] 5가지 전문 요원 워크플로우(blueprint, reflector, fix, ui-polish, doc) 등록 완료.
- [2026-04-24] 리모션 2D 플랫 UI 컴포넌트 7종 및 동적 `SceneRenderer` 개발 완료.
- [2026-05-10] **대본 스타일 공식 V4.0 확정.** `directives/Chronos_Engine_Narrative_Formula_v4.md`
- [2026-05-12] **비주얼 전략 V4 전면 개편.** 낙서체 캐릭터, 클린 인포테인먼트 UI 확정.
- [2026-05-14] **디자인 사양 최종 확정.**
  - 자막바: 사선 컷팅 + `#6E6F73` 따옴표(대시 없음) + `#F5F6F3` 배경
  - 캐릭터: 낙서(Doodle)체 + 3단계 생성 파이프라인
  - 스탯카드: 낙서 스타일 (레퍼런스: `assets/ui_references/statcard_reference.png`)
  - UI 레퍼런스 이미지 `assets/ui_references/` 폴더에 보존 완료.

---

## 🔜 Next Steps (Todo)

1. [ ] **리모션 컴포넌트 개발** — `<SubtitleBar />` 부터 시작 (레퍼런스: `subtitle_reference.png`)
2. [ ] **캐릭터 파일럿 제작** — 몽골(늑대) 낙서체 1종, 누끼 PNG
3. [ ] **Stage 4, 5 스크립트 개편** — 사료 크롤링 + 3단계 캐릭터 생성 자동화
4. [ ] **`scenario.json` 스키마 재정의** — `[VISUAL]` 태그 → JSON 변환 규칙 확정

---

## ⚠️ Project Rules

- **Supreme Authority:** 이 파일(`orchestration.md`)의 지침은 모든 작업의 최우선 순위.
- **디자인 최종 권위:** `reports/Chronos_V4_Vision.md`
- **Persona:** 모든 에이전트는 한국어로 답변.
- **Output Format:** [결론/해결책] → [코드] → [상세 설명] 순서의 두괄식 답변 준수.