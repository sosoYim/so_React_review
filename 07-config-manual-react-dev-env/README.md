# Random Count Up 제작 및 React 앱 개발 환경 메뉴얼 구성

> '랜덤 카운트 업' 앱을 생성하고 웹팩으로 리액트 개발 환경을 설정해보자.

- Initialization Git & NPM
- Webpack, Webpack Dever Server
- React, ReactDOM
  - Configuration Babel Loader
  - Configuration Style, CSS Loader
  - Configuration Sass Loader
  - Configuration PostCSS Loader

## Random Count Up 앱

> 웹 브라우저 화면을 클릭하면 앱이 새로고침되며 랜덤 카운트 업이 작동된다.

### 강사님 조건

1. #root 를 포함한 html 파일
2. RendomCountUpApp 컴퍼넌트가 #root에 마운트됩니다.

```html
<div class="randomCountUp">
  <output>0</output>
</div>
```

3. 카운트 업 애니메이션이 UI에 처리되다가 count 값이 목표 값에 도달하면 애니메이션이 멈춰야 합니다. 즉, 조건 처리가 필요하며 애니메이션을 멈추기 위해 인라인 스타일을 적용해야 합니다.

```html
<div class="randomCountUp">
  <output style="animation-name: none;">75</output>
</div>
```

4. 앱 스타일링

- normalize.css, initializer.css 를 임포트한다.
- App.css, main.css 가 각각 존재한다.
- dist/index.html 파일에서 다음으로 css 스타일을 연결한다. => 웹팩에 static 디렉토리 추가

```html
<link rel="stylesheet" href="/styles/main.css" />
```

5. src/utils

## 환경

### 구조

- dist : 배포 위치
- src : assets, components, styles, utils
- webpack : build, dev, server 환경에 따른 웹팩 설정

### Node 패키지

```
"devDependencies": {
  "@babel/core": "^7.16.0",
  "@babel/preset-env": "^7.16.4",
  "@babel/preset-react": "^7.16.0",
  "babel-loader": "^8.2.3",
  "eslint": "^8.4.0",
  "eslint-config-prettier": "^8.3.0",
  "eslint-plugin-jsx-a11y": "^6.5.1",
  "eslint-plugin-prettier": "^4.0.0",
  "eslint-plugin-react": "^7.27.1",
  "prettier": "^2.5.1",
  "webpack": "^5.64.4",
  "webpack-cli": "^4.9.1",
  "webpack-dev-server": "^4.6.0"
},
"dependencies": {
  "react": "^17.0.2",
  "react-dom": "^17.0.2"
}
```

#### react

> 리액트를 사용하기 위한 패키지들. 배포시에도 필요하다.

- react : 리액트 라이브러리의 엔트리 포인트 (top level API)
- react-dom : 돔과 관련된 메서드

#### 웹팩

> 웹팩은 Javascript 어플리케이션을 위한 모듈 번들러다. 웹팩을 실행시키면 한 개 이상의 entry point 부터 의존성 그래프를 그린 후 사용자의 설정에 따라 하나 이상의 번들들로 압축한다.

1. 기본 개념

   - Entry
     - 번들링의 진입점. 기본값 : `./src/index.js`
   - Output
     - 번들을 뱉어낼 위치 및 파일명 .기본값 : `./dist/main.js`
     - { path, filename }
   - Loaders
   - Plugins
   - Mode
   - Browser Compatibility

2. 설치
   - 기본 세팅
     - webpack
     - webpack-cli
     - webpack-dev-server
   - Loader
     - babel-loader : 바벨과 웹팩을 이용해 JavaScript를 트랜스파일링 해주는 패키지. 웹팩 설정을 참고하여 로더로 지정해주어야 한다. 옵션으로 바벨 presets, plugins 들을 배열 형태로 지정할 수 있다.
3. 설정
   - 설정 파일
     - dev
     - server
     - build

#### eslint

[공홈 설정 가이드](https://eslint.org/docs/user-guide/configuring/)
[prateeksurana 블로그](https://prateeksurana.me/blog/difference-between-eslint-extends-and-plugins/)

> eslint는 자바스크립트 린팅 유틸리티로, 문법적인 오류는 아니지만 작성하는데 준수해야할 가이드라인에 어긋난 경우를 분석한다. `.eslintrc.{js,yml,json}` 파일에 구체적인 설정을 해줄 수 있다.

1. 구성요소에 대한 개념

   - Plugins
     - 기본적인 가이드라인 외에 다른 특정한 규칙들을 npm module로 배포해 놓은 것이다.
     - (eslint-plugin-플러그인이름)
   - Shareable configs

     - 플러그인, rules 등에 대한 설정을 통으로 만들어 npm에 배포된 것이다.
     - (eslint-config-이름)
     - 배열 형태로 지정되는데 config 사이에 겹쳐지는 rules가 있다면 뒤에 호출된 것이 덮어쓴다.

2. 설정
   - "plugins" : 배열 형태로 등록한 플러그인들을 지정한다.
   - "extends" : 적용시킬 config 패키지들을 배열 형태로 지정한다. 설치한 플러그인이 권장하는 rules를 적용시키도 싶다면 (예를 들어 react) `plugin:react/recommended` 형식으로 지정해주면 된다.
   - "rules" : off, warn, error 세 단계로 지정할 수 있다. 세부적인 규칙을 통제할 때 사용한다.
   - "overrides" 키에 rules 키를 덮을 파일,규칙 설정

#### prettier

> Prettier is an opinionated code formatter with support for: Javascript, JSX, TypeScript, CSS, ...

1. prettier VS lint
   - Prettier for **formatting** (max-len, no-mixed-spaces-and-tabs, keyword-spacing, comma-style…) and **linters** (no-unused-vars, no-extra-bind, no-implicit-globals, prefer-promise-reject-errors…) for catching bugs!
2. 설정
   - npm install --save-dev --save-exact prettier
   - .prettierrc.json, .prettierignore
   - eslint-config-prettier : ESLint와 함께 동작할 수 있도록
   - "Run Prettier from your editor for the best experienc."

#### 바벨

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
