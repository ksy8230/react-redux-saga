### 과제 제출 문제 기반 `mobx`로 상태관리 해보기

#### 파일 실행법
- npm run dev : 클라이언트단 실행 (http://localhost:8080/)
- node server : 서버단 실행 (http://localhost:3000)

#### 파일구조
- stores
    - 초기 state들 존재합니다.
    - 메인문제배열 로드, 유사문제배열 로드, 문제 추가, 문제 삭제, 문제 교체 액션이 ProblemsStore 안에 있습니다.

- components/
    - styled-component가 존재합니다.
    - Problems(ProblemsTemplate 묶음) > ProblemsTemplate(메인문제, 유사문제 컴포넌트로 구성) > ProblemsList / RelatedProblemsList (해당하는 styled-component 공통 파일 연결, 클릭 이벤트가 이루어지는 뷰단)

- json/
    - 문제json, 유사유형json 파일이 있습니다.

- server.js
    - express를 사용하여 프론트단에서 문제 리스트들 요청할 수 있는 api를 생성하였습니다.

- App.js
    - Problems 문제 영역
    - GlobalStyles css 연결
    - DevTools 연결

- client.jsx
    - 리액트 핫 모듈이 연결되어있습니다.
    - #root div에 앱이 들어갑니다.

- index.html
    - root div

#### 