# System Architecture & Tech Stack

## 1. 기술 스택 (Tech Stack)
* **HTML5**: 시맨틱(Semantic) 태그를 활용한 구조적이고 SEO 친화적인 마크업.
* **CSS3**: 
  * CSS Variables(Custom Properties)를 사용한 테마 관리.
  * Flexbox / CSS Grid를 통한 완벽한 반응형(Responsive) 레이아웃.
  * 별도의 프레임워크(Tailwind, Bootstrap) 없이 Vanilla CSS로 가볍고 직관적으로 작성.
* **Vanilla JavaScript (ES6+)**:
  * 스크롤 이벤트(Intersection Observer 활용한 등장 애니메이션).
  * 반응형 모바일 햄버거 메뉴 토글.
  * 복잡한 라이브러리(React, Vue 등) 없이 브라우저 네이티브 API만 사용.

## 2. 모바일/반응형 웹 설계 방안
* **Mobile-First Approach**: 모바일 해상도(320px~480px)를 기본으로 작성하고, `@media` 쿼리를 통해 태블릿(768px~), 데스크톱(1024px~)으로 스타일을 점진적으로 확장.
* **유동적 단위**: `rem`, `vw`, `vh`, `%` 등의 상대 단위를 적극 활용하여 기기 화면에 맞게 텍스트와 박스가 자연스럽게 스케일링되도록 방안 마련.

## 3. 디렉토리 구조 (Directory Structure)
누구나 쉽게 파일을 열고 텍스트/이미지를 수정할 수 있도록 가장 단순한 방식을 취합니다.

```text
/
├── index.html          # 메인 페이지 (모든 구조와 텍스트가 명시적임, 싱글 페이지 구성)
├── css/
│   ├── variables.css   # 색상, 폰트, 간격 등 전역 변수 (테마 수정 시 이곳만 변경)
│   ├── reset.css       # 브라우저 기본 스타일 초기화
│   ├── layout.css      # 그리드, 네비게이션, 푸터 등 글로벌 레이아웃
│   └── style.css       # 각 섹션별 세부 스타일 정의
├── js/
│   └── main.js         # 스크롤 애니메이션, 메뉴 토글 등 핵심 로직
└── assets/
    ├── images/         # 포트폴리오 썸네일, 프로필, 배경 이미지
    └── icons/          # SVG 아이콘 등
```

## 4. 콘텐츠 수정 가이드 (For Future Users)
* **텍스트 변경**: `index.html` 파일을 열고 해당 섹션의 텍스트를 찾아 직접 수정합니다.
* **테마 색상 변경**: `css/variables.css` 파일에서 `--color-primary` 등의 Hex 코드를 변경하면 사이트 전체에 반영됩니다.
* **새로운 포트폴리오 추가**: `index.html`의 `<section id="portfolio">` 내부에 기존 카드 HTML 구조를 복사하여 내용만 교체합니다.
