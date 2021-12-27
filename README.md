# so_React_review

리액트 관련 학습 내용 복습용 레포

## 주로 사용되는 노드 패키지

### 1. 바벨

> 바벨은 자바스크립트 트랜스파일러다. 대표적으로 ECMAScript 2015+ 코드를 구 버전 브라우저에서 범용적으로 사용할 수 있게 해준다. 공홈에 나온 대표적인 기능들은 다음과 같다. [설치 가이드](https://babeljs.io/docs/en/usage#basic-usage-with-cli)

- Transform syntax (JSX, type annontation ...)
- Polyfill features that are missing in your target environment -(through a third-party polyfill such as core-js)
- Source code transformations (codemods)

- 기본 세팅
  - @babel/cli : 바벨을 노드 환경에서 사용하기 위한 패키지
  - @babel/core : ECMAScript 폴리필
- 코어 외에 필요한 트랜스폼 => plugin
  - @babel/plugin-transform-react-jsx : 바벨이 jsx를 해석할 수 있게 하는 패키지
- 어떤 플러그인이 필요할지 미리 설정해주는 것 => preset
  - @babel/preset-env: 다른 설정 없이 modern JavaScript (ES2015, ES2016, etc.)를 해석할 수 있는 모든 플러그인을 설치한다.
- babel.config.json 파일

  - preset에 대한 더 구체적인 설정을 원한다면 babel.config.json 파일을 생성하여 설정해준다.

- (+추가 노트) 만약 CDN을 사용한다면 : 기존에 많이 사용하던 @babel/polyfill은 deprecated 되었다. 이젠 바벨 폴리필이 하던 두 역할이 나눠진 것을 따로 불러와야 한다. core-js/stable (to polyfill ECMAScript features) and regenerator-runtime/runtime (needed to use transpiled generator functions)
