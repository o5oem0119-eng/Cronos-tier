# 🎨 Universal Color System Rules

본 문서는 크로노스 엔진(Chronos Engine)에서 생성하는 모든 썸네일, 영상 UI, 캐릭터 에셋에 적용되는 **절대적인 색상 지정 규칙**입니다.
이 규칙은 조선(Joseon), 로마(Rome) 등 시대와 국가에 상관없이 '게임 클래스(Class)' 및 '상태(Status)'를 기준으로 보편적으로 적용됩니다.

---

## 1. 기본 클래스 스킨 (Base Class Colors)

신분이나 역할에 따라 인물의 기본 의상(Robe, Armor), 아우라, 혹은 UI 테두리 색상을 고정합니다.

| 게임 클래스 (Universal) | 한국사 예시 (Joseon) | 색상 (Color) | 의미 및 시각적 느낌 |
| :--- | :--- | :--- | :--- |
| **Ruler** | 왕 (단종), 황제 | **Red (빨강)** | 최고 권력자, 정통성, 메인 타겟 |
| **Heir** | 세자, 후계자 | **Blue (파랑)** | 차기 권력, 희망, 아직 덜 자란 상태 |
| **Challenger** | 반정세력, 왕위 도전 중 왕족 (수양대군) | **Black (검정)** | 위협, 다크 포스, 어둠에서 움직이는 자 |
| **Sub-line Royalty** | 왕족 방계 (금성대군) | **Purple (보라)** | 고귀함, 메인라인이 아닌 서브라인 |
| **Military Power** | 군권 핵심, 무신 실세 (김종서) | **Dark Green (진녹)** | 무력, 단단한 방어력, 압도적 물리력 |
| **General / Soldier** | 일반 무신, 병사 | **Green (초록)** | 보병, 전투원, 행동대장 |
| **Tactician** | 책략가, 권력 설계자 (한명회) | **Navy (남색)** | 지능(INT) 특화, 배후 조종, 냉철함 |
| **Bureaucrat** | 문신, 정치 실무 관료 | **Orange (주황)** | 행정, 정치적 협상가 |
| **Loyalist** | 일반 충신 | **Green (초록)** | 묵묵한 서포터, 희생 |

---

## 2. 상태 변화 스킨 (Status Change Colors)

게임 진행 중 캐릭터의 '상태(Status)'나 '티어(Tier)'가 변동될 경우, 기본 클래스 색상에서 **상태 색상**으로 강제 변경됩니다.

| 상태 (Status) | 색상 변동 규격 | 적용 예시 (History) |
| :--- | :--- | :--- |
| **Deposed (폐위/몰락)** | 기본 색상 → **White (흰색)** | 단종 (Red → White) |
| **Ascended (즉위/실권 장악)** | 기존 색상 → **Red (빨강)** | 수양대군 (Black → Red) |
| **Corrupted (타락/배신)** | 기존 색상 → **Black/Dark (어두운 톤)** | 충신에서 배신자로 전향 |
| **Executed (사망/게임 오버)** | 기존 색상 → **Grey/Monochrome (흑백)** | 사약 씬, 참수 씬의 아우라 및 배경 |

---

## 3. 프롬프트 및 스탯 적용 지침 (Implementation)

1. **Stage 1 (스탯 JSON 연동)**
   - `stats.json` 생성 시, 캐릭터 객체 안에 `"class_color"`와 `"status_color"` 프로퍼티를 반드시 포함해야 합니다.
2. **Stage 4 (프롬프트 주입)**
   - Visual_Director(LLM)는 이미지 프롬프트 작성 시, 인물의 옷차림 묘사에 해당 색상을 강제로 주입해야 합니다.
   - *올바른 예시: "A Ruler wearing a **bold Red** robe", "A Tactician in a **Navy** traditional outfit"*
   - 상태 변화 시: "A deposed Ruler wearing a **humble White** robe"
