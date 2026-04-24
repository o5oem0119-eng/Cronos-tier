# **조선 서버의 정통성 밸런스 붕괴 캐릭터: 단종의 혈통과 몰락에 관한 시스템 분석 보고서**

## **서론: 조선 서버의 '적통성' 메타와 시스템적 가치**

조선이라는 이름의 대규모 국가 시뮬레이션 서버가 개천된 이래, 운영진과 플레이어들 사이에서 가장 강력한 '엔드 게임' 콘텐츠이자 동시에 가장 위험한 '디버프'로 작용했던 스탯은 단연 '적통성(Legitimacy)'이다. 서버 초기 기획자였던 태조 이성계는 압도적인 무력 스탯과 피지컬을 바탕으로 구 서버인 고려를 종료시켰으나, 이는 필연적으로 '찬탈자'라는 운영상의 치명적인 태그를 남기게 되었다.1 이후 서버 안정화를 위해 도입된 '유교 종법' 패치는 서버 관리자(국왕)의 권한 계승에 있어 '적장자(嫡長자)'라는 고유 타이틀을 가진 플레이어에게만 100%의 권한을 부여하는 시스템적 제약을 설정했다.1

이러한 메타 속에서 조선 서버의 제6대 국왕 단종(이홍위)은 서버 역사상 전무후무한 '적장자 중의 적장자'라는 마스터피스 빌드를 타고난 캐릭터로 정의된다.3 그는 세종이라는 대천재 개발자의 적장손이자, 문종이라는 완벽한 후계자의 적장자로 태어나 원손, 세손, 세자라는 정석적인 엘리트 코스를 모두 밟으며 서버 최강의 정통성 버프를 중첩시킨 유일한 유저였다.3 그러나 역설적으로 이 완벽한 스탯 배분은 주변의 강력한 경쟁자들에게 어그로를 끄는 '글래스 캐논(Glass Cannon)' 빌드의 서막이기도 했다. 본 보고서는 단종이라는 캐릭터가 가진 스탯의 우월성과 그가 직면했던 blueprint

단종_비극_게임분석.md
 이 템플릿의 지침과 룰을 완벽하게 숙지하고, 단종 에피소드의 영상 대본 구조를 설계해 줘.시스템적 결함, 그리고 숙부 세조라는 '메타 브레이커'에 의한 권한 찬탈 과정을 전문적인 시스템 분석 관점에서 해부하고자 한다.

## **캐릭터 프로필: 이홍위(단종)의 혈통 스탯과 유전적 버프**

단종의 캐릭터 설계는 겉보기엔 완벽한 SSS 등급의 가차(Gacha) 결과물과 같았다. 그는 조선 서버의 핵심 운영진인 태조-태종-세종-문종으로 이어지는 정실 소생의 적통이 일직선으로 연결된 유일한 결과물이었다.3 이는 서버 내 모든 플레이어(백성 및 신료)들에게 거부할 수 없는 '복종 패시브'를 부여하는 강력한 기제였다.4

### **조선 서버 초기 관리자 혈통 및 정통성 지수 분석**

| 관리자 | 정통성 등급 | 혈통 특성 | 시스템적 지위 |
| :---- | :---- | :---- | :---- |
| **태조 (이성계)** | **C** | 구 서버(고려) 종료자, 신규 서버 개척자 | 창업주 (Originator) |
| **태종 (이방원)** | **B** | 적자(5남), 무력 기반 강제 권한 획득 1 | 정화자 (Purger) |
| **세종 (이도)** | **A** | 적자(3남), 지능 스탯 기반 관리자 추대 1 | 최적화권자 (Optimizer) |
| **문종 (이향)** | **S** | **최초의 적장자** 관리자 승계 2 | 계승자 (Successor) |
| **단종 (이홍위)** | **SSS** | **최초의 적장손** 출신 적장자 승계 3 | 완성자 (Completer) |

단종은 조선 500년 역사상 원손(元孫), 세손(世孫), 세자(世子)라는 모든 후계자 타이틀을 순차적으로 획득하며 왕위에 오른 전무후무한 캐릭터였다.2 이는 서버 내 다른 대군(Prince) 플레이어들이 감히 넘볼 수 없는 압도적인 '권한 우선순위'를 의미했다. 특히 그의 조부인 세종은 단종이 태어났을 때 직접 이름을 지어주고, 집현전 학사들에게 단종을 잘 보필해달라는 '고명(Final Command)'을 미리 세팅할 정도로 그를 서버의 최종 마스터피스로 육성하고자 했다.3

## **문종의 유전자: 'Charisma'와 'Intelligence'의 하이엔드 상속**

단종의 외모와 지적 능력은 부친인 문종으로부터 물려받은 하이엔드 상속 템이었다. 문종은 조선 서버에서 가장 완성도가 높은 '엄친아' 캐릭터로, 기록에 따르면 풍채가 크고 수염이 관우처럼 길게 내려온 미남자였다.8 명나라 사신들은 문종을 보고 "산수가 빼어난 나라에서 저런 아름다운 인물이 났다"며 감탄을 아끼지 않았으며, 그가 어릴 적에는 너무 귀여워 사신들이 직접 데리고 놀거나 차를 마시는 등 외교적 '소프트 파워' 버프를 극대화했다.9

단종 역시 이러한 부친의 미모 유전자를 그대로 이어받았다. 기록은 그를 '옥처럼 고운 얼굴'을 가진 미소년으로 묘사하며, 이는 서버 내 신료들에게 '보호 본능'이라는 특수한 상태 이상을 유도하는 효과를 가졌다.10 그러나 문종의 유전자는 단순히 외모에만 머물지 않았다. 문종은 29년간의 세자 수업을 거치며 세종의 과학 기술(화차 설계 등)과 군사 전략을 모두 마스터한 '준비된 왕'이었다.8 단종은 이러한 지적 자산이 집약된 환경에서 성장하며, 차세대 서버 관리자로서의 지능 스탯을 조기에 확보했다.14

## **시스템 치명적 오류: 'Regency' 보호막의 부재와 가디언 실종**

단종의 비극은 그가 보유한 강력한 버프들이 정작 그를 보호해줄 실제적인 '물리적 방패'로 치환되지 못했다는 시스템적 결함에서 시작되었다. 조선 서버의 운영 지침에 따르면, 12세의 어린 플레이어가 관리자 권한을 승계할 경우 '수렴청정(Regency)'이라는 자동 방어 시스템이 가동되어야 한다.7 이는 보통 왕실의 최고 어른인 대왕대비나 대비가 임시로 관리자 권한을 대행하며 어린 왕의 성장을 기다려주는 일종의 '보호 모드'다.

그러나 단종에게는 이 보호 모드를 실행할 '가디언 NPC'가 단 한 명도 남아있지 않았다.7 단종의 생모인 현덕왕후 권씨는 단종을 출산한 지 단 하루 만에 서버에서 삭제(사망)되었고, 조모인 소헌왕후 역시 이미 사망한 상태였다.7 결정적으로 그의 유일한 물리적 보호막이었던 부친 문종마저 재위 2년 만에 갑작스럽게 서버를 종료하게 된다.9

### **단종 즉위 시점의 가디언 공백 및 시스템 위기 분석**

| 시스템 보호 장치 | 상태 | 영향력 및 결과 |
| :---- | :---- | :---- |
| **생모 (현덕왕후)** | **삭제 (Off-line)** | 수렴청정 권한 원천 상실 7 |
| **조모 (소헌왕후)** | **삭제 (Off-line)** | 왕실 최고 어른의 중재력 부재 16 |
| **부친 (문종)** | **삭제 (Off-line)** | 절대적 보호막 소멸 및 권력 공백 발생 9 |
| **고명대신 (김종서 등)** | **활성 (Active)** | 신권 강화로 인한 왕실 종친들의 반발 유발 17 |

이러한 가디언의 부재는 단종에게 '고립(Isolated)'이라는 치명적인 디버프를 안겨주었다. 수렴청정 시스템이 작동하지 않자 정권은 김종서, 황보인 등 고명대신들에게 넘어갔고, 이는 서버 내 다른 강력한 플레이어들인 '대군(Grand Prince)'들에게 찬탈의 명분을 제공하는 '시스템 취약점(Exploit)'으로 작용했다.18

## **메타 브레이커의 등장: 수양대군의 'Power Creep' 빌드**

단종의 가장 강력한 카운터 픽은 그의 숙부인 수양대군(훗날 세조)이었다. 수양대군은 세종의 차남으로서 문종과 함께 서버 엘리트 교육을 받았으나, 계승 서열에서 밀려난 것에 대해 강한 불만을 품은 '파워 인플레(Power Creep)'형 캐릭터였다.18 수양대군은 무력, 정치력, 그리고 무엇보다 '야심' 스탯을 극한으로 올린 브루저(Bruiser) 타입의 빌드를 구축했다.

그는 단종이 가진 '적통성'이라는 소프트웨어적 버프를 정면으로 돌파하기보다는, 서버 내 물리적 힘을 가진 무사(Warrior) 클래스들을 포섭하고 한명회, 권람과 같은 전략가(Tactician)들을 영입하여 자신만의 '길드(Faction)'를 결성했다.17 수양대군은 단종을 지지하는 대신들이 왕권을 찬탈하고 있다는 '어그로(Aggro)'를 끌며, 자신이 서버의 질서를 바로잡을 유일한 인물임을 강조하는 프레임을 가동했다.18

## **계유정난: 서버 관리자 권한 강제 탈취 이벤트**

1453년 발생한 '계유정난(癸酉靖難)'은 조선 서버 역사상 가장 잔혹하고 효율적인 시스템 해킹 사건이었다.17 수양대군은 정해진 규칙과 절차를 무시하고, 물리적인 타격을 통해 반대파를 일거에 숙청하는 '다이렉트 킬(Direct Kill)' 전술을 사용했다.

이 이벤트의 핵심은 '살생부(Kill List)'라는 타겟팅 스크립트였다.17 한명회가 작성한 이 리스트에 따라 조정의 주요 신료들은 성문 입구에서 즉시 처형되거나 유배되었으며, 수양대군은 단종의 가장 강력한 가디언이자 '메인 탱커'였던 김종서를 철퇴로 직접 사살하며 적의 방어선을 완전히 붕괴시켰다.17

### **계유정난 주요 전술 및 시스템 변동 사항**

1. **메인 탱커 무력화:** 김종서와 그의 아들들을 선제 타격하여 신권의 중심축을 붕괴시킴.15  
2. **궁궐 게이트웨이 점령:** 내금위 무사들을 포섭하여 단종이 외부와 소통하지 못하도록 통제권을 확보함.19  
3. **관리자 권한 강제 승인:** 공포 분위기를 조성하여 단종으로부터 자신을 정난공신 1순위로 임명하는 '인증 키'를 뺏어냄.17  
4. **인사권(황표정사) 삭제:** 신하들이 미리 점을 찍어 관리자를 결정하던 시스템을 폐지하고 수양대군이 모든 권한을 독점함.18

이 정변 이후 단종은 이름만 관리자일 뿐, 모든 실질적인 관리자 권한(Admin Privileges)을 수양대군에게 빼앗긴 '로그인 제한' 상태에 놓이게 되었다.7

## **비극의 심화: 상왕 추대와 영월 맵 격리**

1455년, 단종은 결국 수양대군에게 왕위를 넘겨주고 '상왕(King Emeritus)'이라는 명예직으로 밀려나게 된다.16 이는 사실상의 계정 삭제 예고나 다름없었다. 수양대군은 세조로 즉위하며 자신을 '제2의 창업주'로 설정하고, 단종이 가졌던 기존의 정통성 시스템을 자신의 카리스마와 무력으로 덮어쓰려 했다.18

하지만 단종이 살아있는 한, 서버 내에는 그를 다시 복구(Restore)시키려는 '복위 플랜'이 끊임없이 기획되었다. 특히 성삼문, 박팽년 등 집현전 출신 고인물 유저들의 '사육신 이벤트'는 세조에게 큰 위협이 되었다.7 이에 세조는 단종을 국왕 타이틀에서 완전히 박탈하여 '노산군(Nosangun)'으로 강등시키고, 강원도 영월의 '청령포(Cheongryeongpo)'라는 격리된 맵으로 유배를 보냈다.7

청령포는 지형적으로 삼면이 강으로 둘러싸여 있고 뒤쪽은 절벽으로 막혀 있는 천연의 감옥 바이옴(Biome)이었다.22 단종은 이곳에서 문종으로부터 물려받은 수려한 외모가 무색할 정도로 초췌해진 채, 자신이 가졌던 찬란한 정통성의 무게에 짓눌려 비극적인 나날을 보냈다. 그는 "내 조부 세종께서 살아계셨다면 나를 얼마나 사랑해주셨을까"라고 탄식하며 서버 관리자 시절을 그리워했다는 기록이 전해진다.7

## **최종 삭제: 17세의 'Game Over'**

1457년, 단종은 결국 서버에서 최종 삭제 처리된다. 세조는 자신의 정통성에 위협이 되는 마지막 불씨를 끄기 위해, 조카에게 사약을 보내거나 혹은 처참한 방식(질식사 등 여러 설이 존재)으로 그를 죽음에 이르게 했다.7 단종의 사망은 조선 서버 역사상 가장 부당한 '밴(Ban)' 처리 중 하나로 기억되며, 그의 시신은 강물에 버려지는 등 국왕으로서의 최소한의 예우조차 받지 못한 채 방치되었다.7

단종의 생존 확률을 시스템적으로 계산해본다면 다음과 같은 비관적인 결과가 도출된다.

![][image1]  
단종의 경우 분자인 지원 NPC와 정치적 방어력이 0에 수렴했기에, 분모인 라이벌의 야심과 무력이 무한대에 가까운 상황에서 생존 확률은 사실상 0%였다. 17세라는 꽃다운 나이에 계정 삭제를 당한 그의 서사는 조선 서버 역사에 지워지지 않는 비극의 낙인으로 남았다.7

## **사후 복구 패치: 숙종의 'Legacy Restoration'**

단종이 서버에서 삭제된 지 약 200여 년이 흐른 뒤, 서버 운영진(숙종)은 중대한 결단을 내린다. 단종의 억울한 죽음을 공식적으로 인정하고, 그의 국왕 타이틀과 묘호를 복원하는 '대규모 업데이트'를 단행한 것이다.7 이로 인해 '노산군'은 다시 '단종'이라는 정식 관리자 명칭을 되찾았고, 그의 유해는 영월의 '장릉'에 안장되어 국가 공인 성역으로 선포되었다.

이 사후 복구 패치는 단종이 가졌던 '정통성'이 시간이 흘러도 변하지 않는 절대적 가치였음을 방증한다. 비록 생전에는 최악의 불운(Luck F)을 겪으며 몰락했으나, 사후에는 조선에서 가장 많은 민중의 동정과 추앙을 받는 '전설적(Legendary)' 존재로 남게 된 것이다.7 오늘날 영월에서 열리는 단종제와 그가 태백산 산신령이 되었다는 무속적 신앙은, 시스템이 지워버린 완벽한 캐릭터를 유저(민중)들이 자신들의 마음속에 다시 설치(Install)한 결과물이라 할 수 있다.7

## **결론: 시스템이 보호하지 못한 완벽한 캐릭터**

단종의 서사는 조선이라는 국가 시스템이 설계한 가장 완벽한 혈통적 마스터피스가 어떻게 시스템적 결함과 경쟁자의 악의적인 익스플로잇(Exploit)에 의해 무너질 수 있는지를 보여주는 정밀한 보고서와 같다.

| 분석 항목 | 결과 및 통찰 | 관련 근거 |
| :---- | :---- | :---- |
| **태생적 등급** | **SSS (Ultimate Heir)** | 적장자+적장손의 유일무이한 조합 3 |
| **핵심 스탯** | **Charisma & Intelligence** | 문종의 수려한 외모와 지적 잠재력 상속 8 |
| **패배 요인** | **Guardian Glitch** | 보호막 역할을 할 왕실 어른들의 조기 삭제 7 |
| **시스템 영향** | **Meta Shift** | 유교적 명분보다 무력과 실리가 중시되는 메타로 전환 17 |
| **역사적 복구** | **Successful Restoration** | 241년 만에 국왕 타이틀 복원 및 신격화 3 |

단종은 조선 서버가 지향했던 유교 종법 질서의 '정답'과 같은 캐릭터였으나, 그 정답을 지탱해줄 물리적 기반이 부족했을 때 얼마나 허망하게 무너질 수 있는지를 증명했다. 그의 비극은 단순한 왕위 찬탈극을 넘어, 시스템의 무결성이 실질적인 힘에 의해 압도당했을 때 발생하는 서버의 대혼란을 상징한다. 본 분석 보고서는 단종이라는 '역대급 혈통' 캐릭터의 몰락을 통해, 권력의 정당성과 실질적 통제권 사이의 괴리가 낳은 역사의 잔혹한 밸런스를 다시금 확인한다. 단종의 슬픈 눈망울은 여전히 조선의 역사라는 서버 속에 삭제되지 않는 데이터로 남아, 우리에게 시스템의 안정성과 정당성에 대한 끊임없는 질문을 던지고 있다.

#### **참고 자료**

1. 단종(조선) (r1072 판) \- 나무위키:대문, 4월 7, 2026에 액세스, [https://namu.wiki/w/%EB%8B%A8%EC%A2%85(%EC%A1%B0%EC%84%A0)?uuid=330572f8-882f-459d-af78-2928e6f5cbec](https://namu.wiki/w/%EB%8B%A8%EC%A2%85\(%EC%A1%B0%EC%84%A0\)?uuid=330572f8-882f-459d-af78-2928e6f5cbec)  
2. 단종(조선) (r1060 판) \- 나무위키:대문, 4월 7, 2026에 액세스, [https://namu.wiki/w/%EB%8B%A8%EC%A2%85(%EC%A1%B0%EC%84%A0)?uuid=a541e544-5a74-41a8-a90c-0c52bdd4e15b](https://namu.wiki/w/%EB%8B%A8%EC%A2%85\(%EC%A1%B0%EC%84%A0\)?uuid=a541e544-5a74-41a8-a90c-0c52bdd4e15b)  
3. 단종(조선) \- 나무위키, 4월 7, 2026에 액세스, [https://namu.wiki/w/%EB%8B%A8%EC%A2%85(%EC%A1%B0%EC%84%A0)](https://namu.wiki/w/%EB%8B%A8%EC%A2%85\(%EC%A1%B0%EC%84%A0\))  
4. 단종(조선) (r832 판) \- 나무위키:대문, 4월 7, 2026에 액세스, [https://namu.wiki/w/%EB%8B%A8%EC%A2%85(%EC%A1%B0%EC%84%A0)?uuid=4c38af71-7337-4c22-9216-b41d1e4683b6](https://namu.wiki/w/%EB%8B%A8%EC%A2%85\(%EC%A1%B0%EC%84%A0\)?uuid=4c38af71-7337-4c22-9216-b41d1e4683b6)  
5. 단종(조선) (r1122 판) \- 나무위키:대문, 4월 7, 2026에 액세스, [https://namu.wiki/w/%EB%8B%A8%EC%A2%85(%EC%A1%B0%EC%84%A0)?uuid=8e710826-13ce-4502-9c26-bddd3ad94b3b](https://namu.wiki/w/%EB%8B%A8%EC%A2%85\(%EC%A1%B0%EC%84%A0\)?uuid=8e710826-13ce-4502-9c26-bddd3ad94b3b)  
6. 적장자에서 적장자로 정통성 있는 유일한 왕, 단종\! \- YouTube, 4월 7, 2026에 액세스, [https://www.youtube.com/shorts/0Ngr\_OXYxx4](https://www.youtube.com/shorts/0Ngr_OXYxx4)  
7. Danjong, the Most Tragic King of the Joseon Dynasty :  
8. \[정원찬의 소설 따라 역사 따라\] 제9화. 준비된 왕, 문종 \- 경남미디어, 4월 7, 2026에 액세스, [https://www.mediagn.co.kr/news/articleView.html?idxno=3303](https://www.mediagn.co.kr/news/articleView.html?idxno=3303)  
9. 문종(조선) \- 나무위키, 4월 7, 2026에 액세스, [https://namu.wiki/w/%EB%AC%B8%EC%A2%85(%EC%A1%B0%EC%84%A0)](https://namu.wiki/w/%EB%AC%B8%EC%A2%85\(%EC%A1%B0%EC%84%A0\))  
10. \[Annals of the Joseon Dynasty\] Who is the most underrated of the 27 kings of Joseon? The life of ... \- YouTube, 4월 7, 2026에 액세스, [https://www.youtube.com/watch?v=Bp9Vbv7mdcM](https://www.youtube.com/watch?v=Bp9Vbv7mdcM)  
11. 실록에 기록될 만큼 잘생긴 문종\! \[설록 네 가지 시선 11회\] \- YouTube, 4월 7, 2026에 액세스, [https://www.youtube.com/shorts/4e-2u-6BPHg](https://www.youtube.com/shorts/4e-2u-6BPHg)  
12. 17세 단종의 진짜 얼굴, 수염이 있다? 없다? \- YouTube, 4월 7, 2026에 액세스, [https://www.youtube.com/shorts/g1bNud5rF2s](https://www.youtube.com/shorts/g1bNud5rF2s)  
13. Munjong of Joseon \- Wikipedia, 4월 7, 2026에 액세스, [https://en.wikipedia.org/wiki/Munjong\_of\_Joseon](https://en.wikipedia.org/wiki/Munjong_of_Joseon)  
14. 비운의 왕 단종, 총명한 눈동자의 지혜자량(智慧資糧) 관상 \- 세종대왕신문, 4월 7, 2026에 액세스, [http://www.sejongking.co.kr/news/articleView.html?idxno=219](http://www.sejongking.co.kr/news/articleView.html?idxno=219)  
15. 조선 역사 뒤바꾼 계유정난, 세조는 승리했나 / KBS 2011.10.6. 방송 \- YouTube, 4월 7, 2026에 액세스, [https://www.youtube.com/watch?v=ue\_lxcEWioU](https://www.youtube.com/watch?v=ue_lxcEWioU)  
16. Danjong of Joseon \- Wikipedia, 4월 7, 2026에 액세스, [https://en.wikipedia.org/wiki/Danjong\_of\_Joseon](https://en.wikipedia.org/wiki/Danjong_of_Joseon)  
17. 계유정난 \- 위키백과, 우리 모두의 백과사전, 4월 7, 2026에 액세스, [https://ko.wikipedia.org/wiki/%EA%B3%84%EC%9C%A0%EC%A0%95%EB%82%9C](https://ko.wikipedia.org/wiki/%EA%B3%84%EC%9C%A0%EC%A0%95%EB%82%9C)  
18. 계유정난 \- 한국민족문화대백과사전, 4월 7, 2026에 액세스, [https://encykorea.aks.ac.kr/Article/E0003220](https://encykorea.aks.ac.kr/Article/E0003220)  
19. 계유정난 \- 나무위키:대문, 4월 7, 2026에 액세스, [https://namu.wiki/w/%EA%B3%84%EC%9C%A0%EC%A0%95%EB%82%9C](https://namu.wiki/w/%EA%B3%84%EC%9C%A0%EC%A0%95%EB%82%9C)  
20. \[직장인 레시피\] 직장에는 우리가 모르는 '시야 계급'이 있다 \- 매일경제, 4월 7, 2026에 액세스, [https://www.mk.co.kr/news/culture/9412384](https://www.mk.co.kr/news/culture/9412384)  
21. Box office boom of 'The King's Warden' is latest take on historical tragedy that resonates today \- Korea JoongAng Daily, 4월 7, 2026에 액세스, [https://koreajoongangdaily.joins.com/news/2026-03-05/entertainment/movies/Box-office-boom-of-The-Kings-Warden-is-latest-take-on-historical-tragedy-that-resonates-today/2534886](https://koreajoongangdaily.joins.com/news/2026-03-05/entertainment/movies/Box-office-boom-of-The-Kings-Warden-is-latest-take-on-historical-tragedy-that-resonates-today/2534886)  
22. The Tragedy of King Danjong | Lateral Movements, 4월 7, 2026에 액세스, [https://lateralmovements.com/the-tragedy-of-king-danjong/](https://lateralmovements.com/the-tragedy-of-king-danjong/)

[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAmwAAAAvCAYAAABexpbOAAAQ0UlEQVR4Xu2dDcy25RjHD/MxIR/5HvKi1Vg+QlmRHg1l+Rq2mMw7RCzKR6TCQzMRKYpG9GEhRFu+RtODFosRixpZz2tkGG1WRs3H9XNc/13Hfb7XfT/P+/a8z4f+v+3cfV3ndd3X+XU/z/m/j+M4zzvCGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxpgNxt26NNele/Tn9x0u3WaY69Iju3T7Lt118tK6gDGibqvB/dqMHcTtuvTMWJ/9bYwxxqwrPh7DhHnvLl0RKQ7WCibxc9rMKTyhS3/o0udK3s5dOrCc07ZLuvTw/pzn/zOy3Xfs0s1dOra/Bvt36XflfEdwS5ee0h8/vkt/itl9fq8u/Siy7uI/5RiB9bJyDn/r0p2bvOVAWee3mVM4K7It4sFduqFL+5S8WdDPW7r0w/aCMcYYYyZpxckxzflqs3eXXtpmTuGUSNFWxYuEkHh6l/7d5CHySLyviiBxXJsxBcTg/Zs8njfLEoYV70tdukN/LjHW1rtCf1Rh1EJ9JUhvLZQ1qy6Vv0S2pXJun78cftNmGGOMMWYcREsVGLv1r1ifnhqDoJEQ4fWx/fXdu/Sc/vrdu/Ss/hg3F0Kq8sTI+/U87sWiV5/xwEjBOBezRY9AHNwnUnRKOL1muPw/3haTgg44v7hLv27yBSJPUI8XxdbtAVzHX2jyNkf2zTSe26U3lfN9Iy1+ckfDpsi+13M+0qVf9MfUh7rwSsK69u0uPaxL9+zveUjkeFToH/q51g3x2LojKYs+XQ70Y9vfjMnfyznj/fyYHE/G/RFdujSy/u1Y13rymeB+mIv8bFX0fPqrQntrHxpjjDEbmvdFTrykn0W6tQBLC8fz/fl7IyfBMyPFAa4vYML8WpeOjxQAuMkASxnC581d+nPJ431M8gg2ymRCxtKCSCBJmCwHiQVEzze7tFOkYKgsRpb/iT79MbLMhZgUZtPAgoSYwm03zcVI2fTD5lhaICxEuhypC3U9O4Y+R9TiHuVZuHa/3x9jsVJbT4gUYxf054BbV3w6UuBcX/KuiqwX7eBZD+3SryKfzThL0DJ+y7WO4cJlrFpxtxhpvYQbu3Rof0x9qzhEdLaWVMbp7f0xnyk+bwdH1o/+At4ngQ+XR1orcYtTF75M8BzahqDmOcYYY8yGBauGrGkC1yEWKdAkyCSPu02TMHCu+5gkERaAqHtQf4zAeEFMxmtV9yQTaTuZ8p7lCgZciVUsMKmfHluLAPKpRwXBtqV/bTmiOZeYRQhNA3GASNivvTBCa+2r0Df0IUi8jgmj+UjRDIjIth8RsC/uj+WCrVRXJq8L/XG15C0FlsLWukY/0Ab6G0GOYPttl95db+rBjSuhCggthCf3fyAGS6zaJ7E8H5Pu339F9ilWRiB2j+cgsBF3eo4xxhizIWHS+2iTd1MMggfhtdgfI7SqFYfJWCKMVyZ6Bfcj9EgIASbMKjYQI7j/ADdmGyuG5Yl4ruXQTsYslsB6h0ARTPKIk5oHihtrBRuWqVaYISQQd7OE1pFd2rVLX2kvjNDG01W4Jqsf/YrYpa415k1CTm1H9EjkCcZDLmKsUdUFC9WViXWT+4E+acXdNHhPG+u2V6QlDGsez6+WsIo+H3WhBe3Wl4BKbZ8sneoL4EsHFkSNT/3SYYwxxmx4mAQRaIKJ74XlHKGCtQJwny106dTISZZjLDy8B4sI4gGLiybNEyMnUbg6UjwwiZOHOw6w2LWB8ogrBOPRTf4Yn2/OqQ8isII7TWKkhXp8r5zjTn1jDEKI9v+1P392ly7r8ytce11MukFnibY9Y2trWIXyqDPQP7JUIYwoB3BJI6wkwhBG9COrXmkT7/9Hl54UWT/i2Tb398KXI/uZ8UIA8RlA/CKYENOUJevcLBDHEk60nziyOiaMh8Q/9Tgjso9hzPVKXarwxLqLgK4LKhBijDFt5jNFDCLPfFyXruzvQdDpOXvH5ApiY4wx24n+0fMPvU566wUmhWlxSxsdxBYQNzUX09upPblkDWGixw3F/TVYfCFSjChAvEIwfDu+Y+XxOdD7ESqKO6tJgfUrAeXx+WuD4iutFW5HQ79UyxMwBrX/xq5XuLe2h/M2uJ9ncM41WUB1H5wUW/c9aVvgefwNtW5JRNiY61WLKNp6Vuif+ryx8dFzjDHGrAAHdum6yG/hF8ZkEPVK8YA+bQ9YC6qLahbfjSHWCSvJYozH7fw/gPVisc2MtAitpCuKiZrJuE3ThJVZWRA8bd+PiaNthXhH3KHEGxpjjFnn4P4g7kfguvhBOV8pcBG13+6XC9/ka7DzUiDWsAqJc5vzMbBsTHPZrUc2xWBpqZP3K0u+MbPgb6rdmsMYY8w6hWDk73Rpl/6cV7noiKepwcyIO0AgIIAQYLxf+0xhcdEeTFxTjBTuGOKQBLE8crfxrCrkcNu04grL2nKsa0CAfhV3+0bGA1V3Dq7H6taiDsfE1nuOcR8uOmOMMcaYNYWAZLkQa6Axgob4FgWD7xG5bxaweu9DXfpYl06OdK1wP3kEGgMCjZWKiLzzY9J198nIfcYQbdwjMcfqxosjA62Jq9FeUdSrDYqfBsJO7UAI/jIyuFscELkfGVZEgrXvFLn/FltB8CohiYB7Q2RdntHnGWOMMcasKVi2WDko69RrI61T2in9rMgVcaxGwyKFmENE8buJWKIOj1xxVndWZ6uKd0Ter3zuRcSxYoxnsVWCtj0ggF5oVSQQk7VcqL/EHavzWE0pC95CDIKS9ijYGjdwrTcCbT5ShB4Ug6XQGGOMMWZNqDueI5wWYnAfzsewPQNiDQsUzIopq9s5sOQfEGYSSoAQ1HYF7O3Ec0hVmN1Ujm8ux0uxGEObaAd7W0kQ1s1Qa3uoZ93aADHHLvcsviAmbCWRNdPJySmTMcaYJSDeq25kSuwa+02JLTGsNsQChSXqsNh681aBJU3342pFqAGLGijn1f05iwAkCj/Yv/JehBJgdcON+uEYftKGrQ3qDvPTqBMA9VyIoSysdnK/qj3sd4aljbJxh3IvZdeYt7uUY3FI5O9ajqXap8YYY4wxtwritFjW/9bIeK12lSSxXljMiAHD+sXiBNyLWJ7GNiXlGnFu/J5jDdbnOReVczbX/Ebkc2rw/88j33tUl34cw8rSa7u0T7lvDH4OBxGJYDsjcvEA70d0UhdEFOLwssg4OTaZ/Xrk88+LLA83MFCnn0bWr1oGNyK0RRbGbYHPA+O0rdCfK7k/20ZgPe4zxupPWcC1WGgtoS7b8zk0xhgTuZCACRZBM+2na7A0MenzD1cB+eSNuUNB7s2WarECJrl2Ylc5UDd9rcft5qEkhOc05mJSPFImba7t4byWAdS3rfOOAGueXEO4YRG8CM4Ku/7v3uQtByyDPHfWTzBNg5W11dq6XBDNcjtXGIO6GrjlyTEp3leL/SK/jNBPYxZc4ipJLI4RquujIr9MKBYScMdvz1itFJR/dqQrn4U98zHertWEfqJ/CU8wxhhjNixMZvU3JnEr1/O52H4xgzuZtC0cEVmnMeG1FNR9bEXvXDlGQFSRAwintQJhflrkNjYCcUk/tGKX/FpXLLeK1QTaVscKtzxptaBfZcmirnwhgDZOc0fThkxQ9kpu5myMMcasKogFJllZQYj9ww3NYgxARNS94dijjn3sgD3yqjhgotY1wcS5LYKBSR7LGos+cJcrj9g/uVexxnKMNQfXW124shhpYapWTeqkvfqwcGIRJZ5QrkSsm+3O/SpHz6YP6AvqsimmxwkS88hKZMH9m2O24OUnvohnrCJ5PjLGs7UK0f+1roQRaOyoo/YtlEseVz1jWqljCGqb+pM6U1/2NNTYk7fUL0vwWcIaeGjJe0xkX14TaXnjHtWTV8qreyTK4q6yNO6gcW8hX1ZFxpR2XxqTFvTFyHGrnwtjjDFmw4DwQBhpgQautyv6YyZHtkVhfztAiBwbGX8HWMGY/AE3KrF553bpWzEIHdx9YxavaSAcKHdL5IINYEI+uUufivxhc1b4fjay3vyc2dX9fYBF6sRI6xTCj0SdcM+x5x2iiD3vSO+PbBPxkGoT8BNm5FHOdX3e6yP31KOdPB9XJOJiDOIgFfO4OXJ7mVnMR45DtSgichFsEq1AXd8TQ11ZHKOtbuizU/tzQJDRBvoDt73qSv1pl8YJ1DbKOry/jmXsLTGsUp6LXF29FHKv86yd+rwz+zzKQ5xSHu1gPCmP2FE4IPLLAwtnTomss8b9nZH1ujCG5wLX+QzQRtrOQiHaTUwoi4x4BiKR8WJcjg/va2iMMWYDgoVGVplNkaJLEyKLIOoWKMSysX+dFkKwATEWEESR7uFcLjqEWhUhS4FlhokZmHwRbcAkS+B6XWiyWI6JdwOEy0LJ5/2vimHfPcEKXSZ54NmIHbWJZ1zfHwPC5qAuvSTS8ijhg5u3WvZasFCeHuMWoQp9RD8iKhb6V7nueNXYAHWt/U8bbumPGSv6vu7nd1xMblUzNk6IQPqItgGWKqyRWPG4l/En3pL2jsWGjkGbEVD6/V36jPFEYALl0T98NigPYYVljHYxVrtFrp5GdGrc1Y91mxyE15H9Mf1Ie4HX+iUBkfi0/pj8ask0xhhjNgTE9si6xoTaWsSweFRLEgJBIuJd/SvCSJM525PIRceEvFzrGmUcVs4RSrhFBWJD5WKNkqhh8kYYAdY5LVTgHok0RGmNq6riARAue/bHWPNqTBj9of6p4qcKoxbKQEjsGkuvLp6PwWXMWMxFCmYEDSJKZYsbYqgr7agWOPpdfQG8X4IZATZtnECCTWDdW+yPsaLi6pwFY3NCk6fPCu5eCWSBqKKNgj4fW3hUx71+edg58hdONI60k+ep3yoLMfQjbtk69sYYY8yGAFeVQOQwqdcYKWLQ9ogUFlCvy0UmSxhIDOGawipDHNFJ5fo09opJVxeCrdatii4sJprED+4T7k2EgQL3EUz7R74HlylCBSsOIgWxArjdKBNXGdcfHSlOqnCQBYvrl/THTP5Yg14R6cZroWy5QbEOzRJtiEqJWkSgBBgirl1wQF1l6aKuCDyEDpY3oB9433x/jsiiPfSDBBvIlcor1jRZ0Cr0owQzYqiK1TEQ0IyRQLQuRFoMqSMWPXhejFvsEGZ10QXWS55Rx30+Mh4Py5osktyjY55H+yUucb1CrTtijn7k82mMMcase87p0o2RoghRwcSN+4lJGmuIrD5McEfHYGW7PPJ3UIkhE+yXdl6k8EEMXRQZ+E3s21djtmAh4F9xT7JsUbbyrox8lqwmTOQIJ1lMEFfs04fLjDoSu4RAk6sMiwvxa5/pz5msuQdhpMme2CrqLCjri5GiRu1GnM71x5TFM3AntrCFROsG3aVPLVjLaKNWNFIP+gMhqfbTp6Kt608ig+sZN0DIck11viZybBkf0DgdFcM4QW2boA3ECxI/Rj1k0ZwG9cLVeE6XXh6Tq3AR1xfEIEYpj7a3XBsp1Olb9WG1ls3H5B6LtPv3kc+WuMXFSrv53Ika43hV5G8Rq8+MMcYYU8DShpWnTRIXZn2BoELUIRIV14iIasePVC1lqwWi7dj+GGun3N/GGGOMMbcZsL4eEmntq7Fm6wUWH2A5RUSy4fOYtdMYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhj1pL/AvT5xDkvgjtwAAAAAElFTkSuQmCC>