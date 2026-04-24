import google.generativeai as genai
import os

# 1. API 키 설정 (구글 AI 스튜디오에서 발급받은 키를 넣으세요)
# 키가 없으시면 https://aistudio.google.com/app/apikey 여기서 바로 발급 가능합니다.
genai.configure(api_key="AIzaSyD21F5UbJG1cwFZUSzhUJWjGuJjgcdPcrk")

# 2. 모델 설정
model = genai.GenerativeModel('gemini-flash-lite-latest') # 속도가 빠른 Flash 모델 추천

# 3. 검증 시스템 프롬프트 (우리가 짠 로직)
system_instruction = """
너는 'Chronos Engine'의 수석 역사 고증관이다.
사용자가 주는 자료를 검증하고 'reference/History_Fact_Sheet.md'를 작성하라.

[작성 필수 규칙]
1. 모든 시각 묘사 섹션 상단에 "reference/Visual_Style_Preset.md의 가이드를 준수하라"는 경고 문구를 포함할 것.
2. 이미지 묘사는 Visual_Style_Preset.md에 정의된 '2D Vector Art' 스타일에 최적화된 단어들(Clean lines, Flat color, No gradients)을 사용할 것.
3. 역사적 오류 수정 시 반드시 'Corrected' 태그와 실록 기반의 근거를 제시할 것.
4. 결과물은 반드시 제공된 마크다운 구조를 유지할 것.
"""

def start_verification(data):
    full_prompt = f"{system_instruction}\n\n[검증할 자료]:\n{data}"
    
    print("⏳ AI가 팩트 체크 및 데이터 보완 중...")
    response = model.generate_content(full_prompt)
    
    # 결과 폴더가 없으면 생성
    if not os.path.exists('reference'):
        os.makedirs('reference')
        
    # 파일 저장
    with open("reference/History_Fact_Sheet.md", "w", encoding="utf-8") as f:
        f.write(response.text)
    
    print("✅ 완료! 'reference/History_Fact_Sheet.md' 파일이 생성되었습니다.")

# 4. 실행 (여기에 분석하고 싶은 자료를 넣으세요)
raw_input = """
여기에 단종이나 계유정난 관련 자료(또는 타 채널 대본)를 붙여넣으세요.
예: 수양대군이 김종서를 철퇴로 때려 죽였다. 단종은 그걸 보고 울었다.
"""

start_verification(raw_input)