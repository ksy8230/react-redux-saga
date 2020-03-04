### 과제 제출용 파일

스택 : react, react-saga, react-redux, express

#### 파일 실행법
- npm run dev : 클라이언트단 실행 (http://localhost:8080/)
- node server : 서버단 실행 (http://localhost:3000)

#### 파일구조
- store.js
    - 초기 state들 존재합니다.
    - store에 리듀서, 초기 state, enhance 미들웨어 연결합니다.
    - 스토어의 enhance 미들웨어에 sagaMiddleware 미들웨어를 추가해 상태값을 비동기로 처리할 수 있게 만듭니다. (rootSaga 연결)
    - 리덕스 데브툴즈 미들웨어를 스토어의 enhance 미들웨어에 추가하였습니다.

- reducers/ 
    - combineReducers를 사용하여 각각의 리듀서들을 하나로 합쳐서 exports 시킬 수 있는 파일구조입니다.
    - 메인 문제, 유사문제 상태값의 액션과 리듀서가 담겨있습니다.

- sagas/ 
    - 리덕스 사가를 통해 메인 문제, 유사문제 상태값이 액션으로 디스패치 되기 전 비동기를 실행합니다. (요청, 성공 or 실패 단계)

- components/
    - styled-component와 메인 문제 영역, 유사 문제 영역이 컴포넌트 단위로 들어있습니다.

- json/
    - 문제json, 유사유형json 파일이 있습니다.

- server.js
    - express를 사용하여 프론트단에서 문제 리스트들 요청할 수 있는 api를 생성하였습니다.

- App.js
    - useSelector, useDispatch를 이용해 각각의 기능 함수에 따라 state들이 액션에 맞게 변경됩니다. (화면단)

- client.jsx
    - 리액트 핫 모듈이 연결되어있습니다.
    - store 가 리액트 리덕스에서 제공하는 provider에 연결되어 리액트 앱의 상위에 존재해 리액트 앱이 store에 접근할 수 있습니다.
        - react-redux에서 제공하는 Provider를 App으로 감싸 리액트에 리액트-리덕스 연결
        - Provider에 store를 props로 받아 리액트-리덕스에 리덕스를 연결
    - #root div에 앱이 들어갑니다.

- index.html
    - root div

#### 기능 설명
1. 문제들 첫 로드
- 서버에서 (http://localhost:3000/problems/) 문제json을 불러오는 액션을 componentDidMount 사이클 때 실행합니다.

2. 유사문항 로드
- 서버에서 (http://localhost:3000/problems/similar/) 유사유형json을 불러오는 액션을 유사문항 클릭시 실행합니다.
- 유사문항마다 존재하는 unitName 값이 유사문항 컨텐츠 상단에 기재됩니다.
- 선택한 문제의 유사문항 버튼이 활성화됩니다.

3. 유사문항 삭제
- 삭제 버튼 클릭시 문제 삭제 액션 함수가 리덕스 사가에서 성공, 실패를 분기점으로 디스패치됩니다.
- 성공시 해당 문제가 삭제되고 넘버링이 바뀝니다.

4. 추가 기능
- 선택한 유사문항 아래로 추가 버튼을 누른 문제가 아래로 삽입됩니다.
- 선택된 유사문항은 삭제됩니다.
- 선택한 메인 문제의 index 값과 추가할 문제의 index 값을 가져와 리듀서에서 splice 함수를 이용해 구현하였습니다.

5. 교체 기능 
- 선택한 유사문항과 교체 버튼을 누른 문제가 바뀝니다.
- 추가 기능과 마찬가지로 선택한 메인 문제의 index 값과 추가할 문제의 index 값을 가져와 리듀서에서 splice 함수를 이용해 구현하였습니다.

#### 발견한 에러

1) 유사문항 클릭 -> 우측 교체 버튼 클릭 -> 새로 활성화된 유사문항 상태에서 다시 다른 문제를 교체 버튼 클릭시 에러