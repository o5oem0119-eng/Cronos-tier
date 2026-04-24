# 🎬 Episode Template — Chronos Engine

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

Optional

- academic_reference:
- documentary_reference:
- primary_source:

Output file

data/source/{episode_id}_source.md

---

# Stage 1 — Historical Game Analysis

Agent

History_Strategist

Generate

data/stats/{episode_id}_stats.json

data/generated/{episode_id}/optimized_analysis.md

Checklist

[ ] legitimacy 평가 완료

[ ] political_power 평가 완료

[ ] military_power 평가 완료

[ ] support 구조 분석 완료

[ ] survivability 분석 완료

[ ] matchup 구조 분석 완료

[ ] meta_shift 분석 완료

---

# Stage 2 — Longform Script Writing

Agent

TierZoo_Writer

Generate

data/generated/{episode_id}/script_v1.md

Script Requirements

[ ] Hook 포함

[ ] Server meta 설명 포함

[ ] Base stats 분석 포함

[ ] Special abilities 포함

[ ] Matchups 분석 포함

[ ] Meta shift 분석 포함

[ ] Tier verdict 포함

---

# Stage 3 — Script Review

Agent

TierZoo_Writer

Checklist

[ ] open loop 포함

[ ] pattern interrupt 포함

[ ] emotion flip 포함

[ ] retention pacing 유지

Output

script_v2.md

---

# Stage 4 — Visual Planning

Agent

Visual_Director

Generate

scene_plan.md

image_prompts.md

scene_01.json

scene_02.json

scene_03.json

Checklist

[ ] StatCard 포함

[ ] SystemLog 포함

[ ] TierCard 포함

[ ] MapMove 포함 (필요 시)

[ ] HPBar 포함 (필요 시)

---

# Stage 5 — Asset Generation

Tool

TubeFlow / Google Labs Flow

Generate

assets/generated/{episode_id}/images/*

Checklist

[ ] character assets

[ ] faction assets

[ ] map assets

[ ] symbolic assets

---

# Stage 6 — Remotion Assembly

Tool

Remotion

Generate

preview.mp4

final.mp4

Checklist

[ ] StatCard animation 정상

[ ] HPBar animation 정상

[ ] SystemLog animation 정상

[ ] TierCard animation 정상

[ ] audio cue 정상

---

# Stage 7 — Knowledge Feedback Loop

Generate

wiki/script-patterns/{episode_id}.md

wiki/visual-patterns/{episode_id}.md

wiki/production-lessons/{episode_id}.md

Checklist

[ ] reusable hook 저장

[ ] reusable metaphor 저장

[ ] reusable matchup logic 저장

[ ] reusable pacing logic 저장

---

# Episode Status

current_stage:

next_action:

blocking_issue:

notes: