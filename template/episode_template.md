# 🎬 Episode Template — Chronos Engine (V4)

## Episode Metadata

episode_id:

category:

historical_period:

main_character:

opposing_characters:

core_conflict:

expected_tier:

target_runtime:

---

# Stage 0 — Source Intake

## Required Sources

최소 3개 이상 입력

- source_01:
- source_02:
- source_03:

---

# Stage 1 — Historical Analysis

Agent: History_Strategist

Generate:
- `data/stats/{episode_id}_stats.json`
- `data/generated/{episode_id}/optimized_analysis.md`

Checklist:
- [ ] 게임 스탯/상성 분석 완료 (UI 재료용)

---

# Stage 2 — Script Writing (V4)

Agent: TierZoo_Writer

Generate:
- `data/generated/{episode_id}/script.md`

Script Requirements:
- [ ] V4 서사 구조 적용
- [ ] AV 포맷 아님 (단일 마크다운)
- [ ] 내레이션에 스탯 수치 직접 언급 금지
- [ ] 씬 단위로 `[VISUAL]` 태그 삽입
- [ ] 리텐션 장치 (Open loop 등) 포함

---

# Stage 3 — Script Review

Tool: `stage3_reviewer.py`

Checklist:
- [ ] `[VISUAL]` 태그 정상 파싱 확인
- [ ] 내레이션 내 구체적 스탯 수치 없음 확인

Output:
- `review_report.json`

---

# Stage 4 — Visual Planning

Tool: `visual_planner.py` (LLM 연동)

Generate:
- `scenario.json` (단일 JSON 파일)
- `asset_plan.json` (사료/캐릭터 수집 계획)

Checklist:
- [ ] V4 컴포넌트(`SubtitleBar`, `StatCard`, `WobblySpeechBubble` 등) 기반으로 스키마 작성
- [ ] `asset_plan.json`에 사료 키워드 및 동물 캐릭터 매핑 완료

---

# Stage 5 — Asset Generation

Tool: `source_crawler.py`, `character_generator.py`

Generate:
- `assets/sources/{episode_id}/*`
- `assets/characters/{nation}/doodle.png`

Checklist:
- [ ] 사료 이미지 다운로드 완료
- [ ] 3단계 낙서체 캐릭터 누끼(PNG) 생성 완료

---

# Stage 6 — Remotion Assembly

Tool: Remotion (`npx remotion render`)

Generate:
- `preview.mp4`
- `final.mp4`

Checklist:
- [ ] `SceneRenderer.tsx`에서 모든 컴포넌트 정상 렌더링
- [ ] 배경 (bg/1~3) 적용 확인
- [ ] 캐릭터 스티커 테두리 효과 확인

---

# Episode Status

current_stage:

next_action:

blocking_issue:

notes: