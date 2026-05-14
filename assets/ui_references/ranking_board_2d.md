# Remotion Reference — 2D Ranking Board

Create a Remotion video component for a flat 2D ranking board UI.

Do not use React Three Fiber.
Do not use 3D objects.
Do not use camera movement.
Do not use depth, shadows, gradients, glow, bokeh, or 3D render effects.

Resolution: 1920x1080  
FPS: 30

## Visual Style

strictly lineless vector art  
flat 2D animation style  
Korean historical drama illustration  
pure flat cel-shading with ZERO outlines  
zero strokes anywhere  
completely borderless  
bold flat colors  
rich color contrast  
clean bright color blocking  
solid color fills with sharp edges  
colors separated by value and hue only  
NO line art  
NO black strokes  
NO ink lines  
NO sketch lines  
NO visible brush strokes  
NO texture  
NO gradients  
NO soft blending  
NO light flares  
NO 3D render  
NO bokeh  
NO glow

## Component Goal

Create a 2D ranking board for Chronos Engine.

The board should visualize historical characters, factions, or events as ranked entries.

Use it for:

- power ranking
- tier reveal
- faction influence comparison
- matchup result summary
- final verdict screen

## Layout

Use a full-screen flat 2D UI panel.

Recommended structure:

- top title bar
- left-side rank number
- center character or faction name
- right-side tier badge
- horizontal stat bars
- small role/class label
- optional warning/debuff badges

Example title:

JOSEON SERVER POWER RANKING

## Animation

Animate entries one by one.

Each row should slide in from the left.

Rank badge should pop in.

Stat bars should fill horizontally.

Final top-ranked entry should receive a brief scale pulse.

Use only 2D transforms:

- translateX
- translateY
- scale
- opacity

Do not use 3D rotation.

## Data Source

Ranking data is loaded from:

data/stats/{episode_id}_stats.json

Expected data fields:

- id
- name
- role
- tier
- rank
- stats
- special_abilities
- weaknesses

## Example JSON

```json
{
  "type": "RankingBoard",
  "title": "JOSEON SERVER POWER RANKING",
  "entries": [
    {
      "rank": 1,
      "name": "수양대군",
      "role": "Meta Breaker",
      "tier": "A",
      "highlight_stat": "military_power",
      "stats": {
        "political_power": "A",
        "military_power": "A",
        "intelligence": "A",
        "survivability": "A"
      }
    },
    {
      "rank": 2,
      "name": "김종서",
      "role": "Guardian NPC",
      "tier": "B",
      "highlight_stat": "defense",
      "stats": {
        "political_power": "A",
        "military_power": "B",
        "defense": "A",
        "survivability": "C"
      }
    },
    {
      "rank": 3,
      "name": "단종",
      "role": "Ultimate Heir",
      "tier": "F",
      "highlight_stat": "legitimacy",
      "stats": {
        "legitimacy": "SSS",
        "political_power": "F",
        "military_power": "F",
        "survivability": "F"
      }
    }
  ]
}