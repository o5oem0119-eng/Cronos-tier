# Chronos Stats Binding Rules

Defines how characters automatically load stat data.

---

# Binding Logic

Scene component:

{
"type": "StatCard",
"props": {
"character": "danjong"
}
}

↓

Auto-load:

data/stats/{episode_id}_stats.json

↓

Find:

characters[].id == danjong

↓

Inject stats automatically

---

# Example

Input:

character: "danjong"

Loaded file:

data/stats/danjong_stats.json

Output:

stats:

{
"legitimacy": 100,
"political_power": 20,
"military_power": 5
}

---

# Priority Order

component props override stats file

stats file override defaults

defaults override schema fallback

---

# Tier Binding Rule

If tier missing:

auto-calculate from:

tier_assignment_rules.md

---

# Passive Binding Rule

Auto-load:

characters[].passive

---

# Debuff Binding Rule

Auto-load:

characters[].status