# 📜 Chronos Engine Script v1 - 단종 비극 편 (Tragic Opening Version)

## 📋 Metadata
- **에피소드:** 단종 (조선 서버 최악의 밸런스 붕괴 사건)
- **오프닝 구조:** Game Over Structure (Tragic Episode 전용)
- **예상 런타임:** 약 10분
- **작성 기준:** `TierZoo_Writer.md` 및 `Longform_Strategy.md` 적용

---

## 🎬 AV Script

### 🕒 0:00–0:15 — Cold Open: Game Over

| VIDEO (시각 요소) | AUDIO (청각 요소) |
| :--- | :--- |
| `[Visual: 어두운 강가, 흐릿한 궁궐 실루엣]` 처음에는 컬러 상태. 시간이 지나며 점점 채도 감소. | `[SFX: 둔탁하고 무거운 심장 박동 소리, 점차 느려짐]` |
| `[Visual: 최종적으로 흑백 전환, 비 내리는 듯한 노이즈 효과]` | **NARRATOR:** "17살의 왕은 사약을 받았습니다." |
| `[SystemLog]` Player: Danjong <br> Status: Poisoned | **NARRATOR:** "시신은 강물에 버려졌고," |
| `[SystemLog]` Authority: Revoked <br> Body Recovery: Forbidden | **NARRATOR:** "그 시신을 거두는 자는 삼대가 멸한다는 명령이 내려졌습니다." |
| `[Visual: 핏빛으로 번지는 텍스트 'GAME OVER']` | **NARRATOR:** "이건 전쟁도 아니고, 암살 미션도 아니고, 보스전도 아니었습니다. 조선 서버가 자기 최고 정통성 캐릭터를 삭제한 사건이었습니다." |

### 🕒 0:15–0:30 — Question Hook

| VIDEO (시각 요소) | AUDIO (청각 요소) |
| :--- | :--- |
| `[Visual: 단종의 화려했던 세자 시절 모습, 빛나는 금빛 오라]` | **NARRATOR:** "그런데 이상합니다. 단종은 조선 서버에서 가장 강한 패시브를 가지고 있었습니다." |
| `[StatCard: 단종]` Legitimacy: SSS | **NARRATOR:** "정통성 SSS. 왕위 계승권 완벽. 명분 완벽." |
| `[StatCard: 단종]` Survivability: F | **NARRATOR:** "그런데 생존력은 F였습니다. 왜 이런 빌드가 존재했을까요?" |
| `[OPEN LOOP]` 화면 멈춤, 노이즈 이펙트 발생 | `[SFX: 시스템 에러 경고음]` |

### 🕒 0:30–0:55 — Server Rule Explanation

| VIDEO (시각 요소) | AUDIO (청각 요소) |
| :--- | :--- |
| `[Visual: 조선 서버의 맵과 왕좌 실루엣]` | **NARRATOR:** "당시 조선 서버의 핵심 룰은 단순했습니다. 왕은 정통성으로 세워지지만, 실제 생존은 군권과 후견 세력이 결정한다." |
| `[Visual: 단종이 홀로 거대한 왕좌에 앉아있는 모습]` | **NARRATOR:** "단종은 왕좌를 가지고 있었지만, 군권은 없었습니다. 명분은 있었지만, 실행력이 없었습니다." |
| `[Visual: 텅 빈 가디언 슬롯 (생모, 조모, 부친 모두 X 표시)]` | **NARRATOR:** "그리고 무엇보다, 그를 지켜줄 가디언 시스템이 꺼져 있었습니다." |
| `[SystemLog]` JOSEON SERVER RULES <br> Unprotected heir = high-risk build | **NARRATOR:** "보호 시스템이 꺼졌다. 이건 그냥 서비스 사고입니다." |

### 🕒 0:55–1:25 — Character Intro Cards

| VIDEO (시각 요소) | AUDIO (청각 요소) |
| :--- | :--- |
| `[Visual: 캐릭터 선택 화면처럼 단종 카드 등장]` | **NARRATOR:** "복잡한 권력 관계를 빠르게 볼까요." |
| `[IntroCard: 단종]` Class: Ultimate Heir <br> Legitimacy: SSS <br> Military Power: F | **NARRATOR:** "플레이어 1, 단종. 적장자의 적장자라는 SSS급 혈통. 하지만 무력과 생존력은 F. 물리적 보호막이 전부 오프라인입니다." |
| `[IntroCard: 김종서]` Class: Guardian NPC <br> Status: Targeted | **NARRATOR:** "플레이어 2, 김종서. 단종을 대리하는 가디언 NPC이자 메인 탱커. 하지만 어그로가 너무 끌려서 타겟팅 상태죠." |
| `[IntroCard: 수양대군]` Class: Meta Breaker <br> Legitimacy: C <br> Execution Speed: S | **NARRATOR:** "마지막으로, 플레이어 3, 수양대군. 정통성은 C급이지만 무력과 야심이 S급. 시스템 자체를 하이재킹할 준비가 된 메타 브레이커입니다." |

### 🕒 1:25–2:00 — Chapter 1: The Glitch (Stage 4)

| VIDEO (시각 요소) | AUDIO (청각 요소) |
| :--- | :--- |
| `[Title: CHAPTER 1 - Joseon Server Rules]` | **NARRATOR:** "먼저 조선 서버의 기본 룰부터 봐야 합니다." |
| `[Visual: 문종의 죽음을 묘사하는 컷, 접속 종료 연출]` | **NARRATOR:** "단종의 비극은 그를 보호해야 할 메인 가디언, 부친 문종이 재위 2년 만에 서버를 종료하면서 시작됩니다." |
| `[PATTERN INTERRUPT]` 화면 전체에 붉은색 경고창 점멸 | `[SFX: 삐- 삐- 경보음]` |
| `[SystemLog]` Error: Regency System Offline | **NARRATOR:** "원래 12살 유저가 관리자가 되면 '수렴청정'이라는 자동 방어 시스템이 켜져야 합니다. 그런데 할머니도, 어머니도 이미 삭제된 상태였죠." |

### 🕒 2:00–3:30 — Matchup & Boss Fight (Stage 5)

| VIDEO (시각 요소) | AUDIO (청각 요소) |
| :--- | :--- |
| `[Visual: PvP 대진표, 김종서 vs 수양대군]` | **NARRATOR:** "이제 서버는 방패가 없는 단종 대신, 대리 관리자인 김종서와 야심가 수양대군의 PvP 구역으로 변합니다." |
| `[Visual: 수양대군이 사병과 한명회를 모으는 일러스트]` | **NARRATOR:** "수양대군은 단종의 정통성(소프트웨어)을 정면으로 공격하지 않았습니다. 대신 무사 클래스를 모아 길드를 파고, 물리적 타격(하드웨어)을 준비했죠." |
| `[Visual: 계유정난 묘사. 핏빛 철퇴 연출]` | `[SFX: 무거운 타격음, 화면 진동]` |
| `[SystemLog]` Skill Executed: 다이렉트 킬 (Direct Kill) | **NARRATOR:** "1453년 계유정난. 수양대군은 룰을 무시하고 메인 탱커인 김종서에게 다이렉트 킬을 시전합니다." |
| `[Visual: 무너지는 방어선, 고립되는 단종]` | **NARRATOR:** "정상적인 정치 메타가 폭력에 무너지는 순간이었습니다. 탱커가 뚫린 글래스 캐논 빌드는? 그냥 사냥감이죠." |
| `[EMOTION FLIP]` 승리의 환호에서 갑작스런 정적 | `[SFX: 심장 멎는 소리]` |

### 🕒 3:30–4:30 — Endgame (Stage 6)

| VIDEO (시각 요소) | AUDIO (청각 요소) |
| :--- | :--- |
| `[Visual: 수양대군이 왕좌를 차지하고 단종이 밀려나는 모습]` | **NARRATOR:** "단종은 이름만 관리자일 뿐, 모든 권한을 수양대군에게 뺏긴 '로그인 제한' 상태가 됩니다." |
| `[Visual: 강원도 영월 맵으로 강제 이동되는 연출]` | **NARRATOR:** "결국 상왕으로 밀려났다가, 노산군으로 강등. 사방이 막힌 영월 맵으로 영구 유배를 당하죠." |
| `[Visual: 오프닝의 흑백 강가 장면 오버랩]` | **NARRATOR:** "서버 메타가 이 빌드를 허용하지 않았습니다. 정통성은 강했지만 생존 구조가 없었거든요. 결국 17세에 강제 계정 삭제." |

### 🕒 4:30–5:30 — Tier Assignment (Stage 7)

| VIDEO (시각 요소) | AUDIO (청각 요소) |
| :--- | :--- |
| `[Visual: 단종의 최종 티어 카드 점수 부여 중]` | **NARRATOR:** "단종 빌드의 최종 평가를 내려보죠." |
| `[StatCard]` Meta Fit: 0/10 | **NARRATOR:** "메타 적합도. 0점입니다. 힘이 모든 걸 결정하는 변칙 메타에서 명분 원툴 빌드는 버틸 수 없습니다." |
| `[StatCard]` Survivability: 0/10 | **NARRATOR:** "생존력. 역시 0점. 물리적 보호막이 없는 유저는 아무리 전설급 스탯을 가졌어도 살아남지 못합니다." |
| `[SystemLog]` Final Tier: F | **NARRATOR:** "최종 티어, F입니다." |
| `[Visual: 수백 년 후 장릉의 화려한 모습 (복원 패치)]` | **NARRATOR:** "다만, 200년 후 숙종 패치로 국왕 타이틀이 복구되면서, 유저들의 기억 속에서는 레전더리(Legendary)로 남게 되죠." |
| `[Visual: 페이드 아웃 되며 검은 화면]` | **NARRATOR:** "완벽한 스탯을 줘놓고 보호막은 끄고 시작하게 만든 조선 서버... 이 서버 운영진은 대체 뭘 한 겁니까. 이 서버에서 행운을 빕니다." |
