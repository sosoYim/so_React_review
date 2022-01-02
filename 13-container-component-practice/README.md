# 네트워크 공부

## client-server 컨테이너 컴퍼넌트

> SK 컴퍼넌트들을 만들어보자.
> [Container(stateful) 컴퍼넌트 yamoo9](https://yamoo9.notion.site/Container-stateful-ac8ecab5e7b447cd825009f07ec20a3c)

### 요구사항

**Client 서버**

- client 디렉토리에서 CRA 환경으로 작업
- Axios 로 통신

**API 개발 서버**

- server 디렉토리에서 API 서버를 구동한 후, React 앱에서 우회해 API 서버에 접속할 수 있도록 설정
  - 참고 링크
    - [AJAX 와 APIs](https://ko.reactjs.org/docs/faq-ajax.html)
    - [Proxying API Requests in Development](https://create-react-app.dev/docs/proxying-api-requests-in-development/)
    - [Axios](https://axios-http.com/docs/api_intro)

### 노트

- 리액트에서 AJAX 통신 위치 : componentDidMount (데이터를 받은 뒤 setState로 컴포넌트를 업데이트 하기 위해)
