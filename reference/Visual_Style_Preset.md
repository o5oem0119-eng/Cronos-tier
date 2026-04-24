# 🎨 Chronos Engine: Visual Style Preset

본 문서는 'Chronos Engine' 프로젝트의 시각적 일관성을 유지하기 위한 공식 화풍 가이드라인입니다. 모든 이미지 생성 에이전트는 본 지침을 최우선으로 준수해야 합니다.

---

## 1. Core Visual Concept
* **Style Name:** Cinematic 2D Vector Art (High-Contrast)
* **Key Vibes:** 고급스러운 영상미, 게임 컷신 스타일, 강렬한 빛과 그림자, 세련된 단순함.
* **Target Reference:** `image_cd0aa2.jpg`의 조명과 밀도 + `image_cde136.png`의 UI 레이아웃.

---

## 2. Master Style Prompt (Copy & Paste)
이미지 생성 시 장면 묘사(Scene Description) 뒤에 반드시 아래 프롬프트를 접미사(Suffix)로 추가한다.

> **Prompt:** > strictly lineless vector art, flat 2D animation style, Korean historical drama illustration, pure flat cel-shading with ZERO outlines, zero strokes anywhere, completely borderless, bold flat colors, rich color contrast, clean bright color blocking, solid color fills with sharp edges, colors separated by value and hue only, NO line art, NO black strokes, NO ink lines, NO sketch lines, NO visible brush strokes, NO texture, NO gradients, NO soft blending, NO light flares, NO 3D render, NO bokeh, NO glow.

---

## 3. Technical Constraints & Rules

### ✅ DO (권장 사항)
* **Lineless:** 모든 형태는 선(Line)이 아닌 색의 대비(Value & Hue)로만 구분한다.
* **Lighting:** 촛불(Candlelight)이나 횃불(Torch) 같은 단일 광원을 사용하여 드라마틱한 명암을 만든다.
* **Saturation:** 홍룡포(Red), 흑단령(Black) 등 핵심 요소는 고채도의 원색을 사용하여 화면에서 돋보이게 한다.
* **UI Margin:** 리모션 UI 배치를 위해 화면 하단 30%는 복잡한 디테일을 배제하고 단순한 바닥이나 어두운 공간으로 비워둔다.

### ❌ DON'T (금지 사항)
* **No Outlines:** 검은색 테두리나 스케치 선을 절대 허용하지 않는다 (유치해 보임).
* **No Textures:** 종이 질감, 유화 붓 터치, 그라데이션을 금지한다.
* **No Bokeh:** 배경 흐림(Out of focus) 효과를 쓰지 않는다. 배경도 깔끔한 벡터 면으로 처리한다.
* **No Muddy Colors:** 탁한 회색이나 흐릿한 톤의 사용을 지양한다.

---

## 4. UI Layout Guide for Remotion
이미지 생성 시 다음의 UI 배치 구도를 염두에 둔다.

* **Top-Left:** 플레이어(왕)의 HP 바 및 정통성(Legitimacy) 수치 영역.
* **Bottom-Right:** 적대 세력(수양 등)의 스탯 및 위협 수치 영역.
* **Bottom-Center:** 포켓몬 스타일 시스템 메시지 박스 ("효과는 굉장했다!") 영역.

---

**Last Updated:** 2026-04-08
**Project:** Chronos Engine (History Automation Program)