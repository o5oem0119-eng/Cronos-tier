# Remotion Reference — 2D HP Bar

Create a flat survivability indicator bar.

Resolution: 1920x1080
FPS: 30

## Visual Style

flat rectangle bar

no gradients
no shadows
no glow

colors:

blue → yellow → red transition allowed

## Layout

top screen or character panel overlay

numeric value optional

example:

HP 100 → 0

## Animation

bar shrinks horizontally

color switches at threshold:

70%
40%
10%

optional shake effect under 10%

## Component Name

<HPBar />