# 네트워크 공부

## Open API 활용하기

> Dog API를 이용해 놀아보자.
> [Container(stateful) 컴퍼넌트 yamoo9](https://yamoo9.notion.site/Container-stateful-ac8ecab5e7b447cd825009f07ec20a3c)

- 랜덤 개 사진 받기 utl : https://dog.ceo/api/breeds/image/random
- Response 형태 :

```
{
    "message": "https://images.dog.ceo/breeds/clumber/n02101556_3122.jpg",
    "status": "success"
}
```

### 요구사항

- [x] CRA client 환경에서 Axios로 오픈 API 통신
- [ ] 서버와의 통신에 적합한 구조 짜기

**Client 서버**

- client 디렉토리에서 CRA 환경으로 작업
- Axios 로 오픈 API와 통신
- 참고 링크
  - [AJAX 와 APIs](https://ko.reactjs.org/docs/faq-ajax.html)
  - [Proxying API Requests in Development](https://create-react-app.dev/docs/proxying-api-requests-in-development/)
  - [Axios](https://axios-http.com/docs/api_intro)

### 노트

- 리액트에서 AJAX 통신 위치 : componentDidMount (데이터를 받은 뒤 setState로 컴포넌트를 업데이트 하기 위해)

- 프로미스를 이용한 네트워크 통신
  - axios : Promise based HTTP client for the browser ans node.js => 서버사이드에선 node.js 모듈을, 브라우저에선 XMLHttpRequest 객체를 사용하기 때문에 같은 코드로 두 환경 모두 동작한다.
  - Fetch API : Web API 네트워크 통신을 포함한 리소스 취득을 위한 인터페이스가 정의되어 있다. Request, Response 객체를 사용하며 Promise를 반환한다.
