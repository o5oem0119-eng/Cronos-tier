# Remotion Reference — 2D Cinematic Intro Card

Create a Remotion video component for a flat 2D cinematic character introduction card.

Do not use 3D.
Do not use glassmorphism.
Do not use glow.
Do not use gradients.
Do not use realistic lighting.
Do not use depth effects.
Do not use Matrix-style data streams.

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

Create a reusable Chronos character intro card.

Use it for:

- main character reveal
- boss character reveal
- guardian character reveal
- faction introduction
- important historical object introduction
- chapter transition

## Layout

Use a clean full-screen 2D composition.

Recommended structure:

- large character name text
- character portrait or symbolic icon area
- class label
- role description
- tier badge
- passive ability label
- debuff or warning label
- small server/faction tag

## Animation

Use only 2D motion.

Allowed animations:

- scale pop-in
- slide-in from left or right
- opacity fade
- flat wipe transition
- 2D shake
- brief glitch by horizontal offset only
- UI panel snap-in
- stat badge pop

Do not use:

- hue-rotate
- 3D rotation
- perspective camera
- glass blur
- glowing scanner
- particle depth effects

## Motion Timing

Frame 0–15:
Background panel appears with flat wipe.

Frame 15–30:
Character name pops in.

Frame 30–45:
Character portrait slides in.

Frame 45–70:
Role, class, tier badge, passive/debuff labels appear.

Frame 70–90:
Final hold for readability.

## Example JSON

```json
{
  "type": "IntroCard",
  "character": "단종",
  "class": "Ultimate Heir",
  "role": "정통성 SSS급 왕위 계승 빌드",
  "server": "Joseon Server",
  "tier": "F",
  "stats": {
    "legitimacy": "SSS",
    "political_power": "F",
    "military_power": "F",
    "survivability": "F"
  },
  "passive": "Royal Bloodline",
  "debuff": "Guardian System Disabled",
  "style": "tragic_flat_2d",
  "animation": "flat_pop_slide"
}

```

## Component Name

Use:

<IntroCard />

Do not use:

<CinematicCEOIntro />
<GlassHUD />
<TechRings />
<MatrixRain />
<ThreeScene />