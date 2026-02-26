# Product Requirements Document (PRD)

## 1. 개요 (Overview)
'Product Builder 및 Marketer'로서의 전문성, 기획력, 데이터 분석력, 그리고 트렌디한 감각을 돋보이게 하는 개인 프로필 웹사이트입니다. 심플하고 직관적인 웹 표준 기술(HTML5, CSS3, Vanilla JS)만을 사용하여 유지보수가 용이하며 누구나 쉽게 텍스트와 이미지를 수정할 수 있도록 설계됩니다.

## 2. 방문자 스토리보드 (User Journey)
방문자(잠재 클라이언트 또는 채용 담당자)가 웹사이트에 접속하여 연락을 취하기까지의 여정입니다.

1. **[Landing / Hero] 첫인상 형성**: 
   - 웹사이트 접속 시, 확신에 찬 헤드라인과 직관적인 타이포그래피를 통해 'Product Builder & Marketer'라는 정체성과 핵심 가치를 즉각적으로 인지합니다.
2. **[About / Specialty] 가치 확인**: 
   - 스크롤을 내리며, 단순한 마케터가 아닌 '제품(Product)'을 이해하고 비즈니스를 빌딩하는 전문가로서의 차별점을 확인합니다.
3. **[Skills] 역량 검증**: 
   - 시각적으로 잘 정돈된 스킬셋(기획 툴, 데이터 분석, 마케팅 도구 등)을 통해 실질적인 업무 능력을 빠르게 스캔합니다.
4. **[Portfolio] 신뢰 구축**: 
   - 과거 진행했던 프로젝트의 성과(비포/애프터, 데이터 지표 개선 등)를 확인하며 전문가로서의 신뢰감을 얻습니다.
5. **[Process & Prep] 협업 상상**: 
   - 서비스 제공 절차를 보며 어떻게 협업이 진행될지 머릿속으로 그리게 되며, 클라이언트 준비사항을 읽고 자신이 준비해야 할 것들을 인지하여 전문적인 허들(퀄리티 컨트롤)을 느낍니다.
6. **[Contact] 행동 유도(CTA)**: 
   - 최종적으로 하단에 위치한 이메일, 전화번호, 소셜 링크 또는 간편한 폼을 통해 협업 문의를 남깁니다.

## 3. UI/UX 디자인 컨셉
* **테마**: 프리미엄 & 모던 다크 모드 (Premium & Modern Dark)
  * 신뢰감과 무게감을 주면서도 콘텐츠를 돋보이게 하는 다크 모드 기반에, 형광빛이 도는 포인트 컬러를 사용하여 '트렌디함'을 강조.
* **컬러 팔레트**:
  * Background: Slate 900 (`#0F172A`)
  * Surface/Cards: Slate 800 (`#1E293B`) 
  * Primary Accent: Electric Indigo (`#6366F1`) or Neon Cyan (`#22D3EE`)
  * Text Primary: White (`#F8FAFC`)
  * Text Secondary: Slate 400 (`#94A3B8`)
* **타이포그래피**:
  * 현대적이고 가독성이 뛰어난 Google Fonts 사용 (`Inter` 또는 `Plus Jakarta Sans`).
  * 헤딩은 크고 두껍게(Bold), 본문은 여유로운 자간과 행간을 적용하여 정보 전달력 극대화.
* **레이아웃 & 인터랙션**:
  * 부드러운 스크롤 애니메이션(Fade-in, Slide-up).
  * Hover 시의 미세한 스케일 변화 및 Glow 효과(Micro-interactions).
  * Glassmorphism(반투명 블러 효과)을 활용한 네비게이션 및 카드 디자인.

## 4. 필수 섹션 구성 개요
1. **Hero (Introduction)**: 'Product Builder & Marketer' 타이틀, 핵심 가치 제안(Value Proposition), 스크롤 유도 인디케이터.
2. **내 전문분야 (Expertise)**: 기획력, 데이터 기반 논리, 트렌드 센스 등을 설명하는 콘텐츠/카드.
3. **내 정보 (Profile)**: 사진(또는 아바타), 이름, 한 줄 소개, 기타 연락/소셜 링크.
4. **스킬 (Skills)**: 카테고리별(Product, Marketing, Data, Tools) 역량 표현.
5. **포트폴리오 (Projects)**: 이미지, 요약, 핵심 성과 지표가 포함된 포트폴리오 리스트 뷰.
6. **서비스 절차 (Process)**: 1단계부터 완료까지의 협업 파이프라인.
7. **준비사항 (Requirements)**: 의뢰 전 클라이언트가 숙지해야 할 내용 목록.
8. **Contact (Footer)**: 연락망 및 협업 요청 CTA.
