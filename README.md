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

### 2. ESLint

[공홈 설정 가이드](https://eslint.org/docs/user-guide/configuring/)
[prateeksurana 블로그](https://prateeksurana.me/blog/difference-between-eslint-extends-and-plugins/)

> eslint는 자바스크립트 린팅 유틸리티로, 문법적인 오류는 아니지만 작성하는데 준수해야할 가이드라인에 어긋난 경우를 분석한다. `.eslintrc.{js,yml,json}` 파일에 구체적인 설정을 해줄 수 있다.

- Plugins
  - 기본적인 가이드라인 외에 다른 특정한 규칙들을 npm module로 배포해 놓은 것이다.
  - (eslint-plugin-플러그인이름)
- Shareable configs

  - 플러그인, rules 등에 대한 설정을 통으로 만들어 npm에 배포된 것이다.
  - (eslint-config-이름)
  - 배열 형태로 지정되는데 config 사이에 겹쳐지는 rules가 있다면 뒤에 호출된 것이 덮어쓴다.

- 설정 파일
  - "plugins" : 배열 형태로 등록한 플러그인들을 지정한다.
  - "extends" : 적용시킬 config 패키지들을 배열 형태로 지정한다. 설치한 플러그인이 권장하는 rules를 적용시키도 싶다면 (예를 들어 react) `plugin:react/recommended` 형식으로 지정해주면 된다.
  - "rules" : off, warn, error 세 단계로 지정할 수 있다. 세부적인 규칙을 통제할 때 사용한다.
  - "overrides" 키에 rules 키를 덮을 파일,규칙 설정
