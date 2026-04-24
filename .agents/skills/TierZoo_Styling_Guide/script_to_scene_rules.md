# Chronos Script → Scene Conversion Rules

This document defines how AV script visual tags convert into scene.json components.

---

# Conversion Pipeline

AV Script

↓

VIDEO column tags

↓

visual_tag_map.md lookup

↓

scene_schema.json structure

↓

scene.json generation

---

# Scene Generation Rule

Each VIDEO tag produces one component block.

Example:

VIDEO:

[STAT CARD] Danjong Base Stats

↓

scene.json:

{
"type": "StatCard",
"props": {
"character": "danjong"
}
}

---

# Supported Tag Mapping

[INTRO CARD]
→ IntroCard

[STAT CARD]
→ StatCard

[STAT COMPARE]
→ StatCompare

[SYSTEM LOG]
→ SystemLog

[HP BAR]
→ HPBar

[PATCH NOTE]
→ PatchNote

[RANKING BOARD]
→ RankingBoard

[SERVER RULES]
→ ServerRulePanel

[MATCHUP]
→ MatchupBoard

[PASSIVE]
→ PassivePanel

[DEBUFF]
→ DebuffPanel

---

# Scene Boundary Rule

New scene starts when:

Stage changes

OR

PATTERN INTERRUPT appears

OR

FLASH appears

OR

MAP MOVE appears

---

# Timing Rule

Scene duration derived from narration_text length.

Default:

1 sentence = 3 seconds

Override allowed:

time_range field