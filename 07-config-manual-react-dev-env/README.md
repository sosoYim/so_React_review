# Random Count Up 제작 및 React 앱 개발 환경 메뉴얼 구성

> '랜덤 카운트 업' 앱을 생성하고 웹팩으로 리액트 개발 환경을 설정해보자.
> 수업 중 클래스 컴퍼넌트 + 상태가 없었던 것을 함수형 컴퍼넌트 + Hooks를 이용한 상태관리 버전으로 리팩토링 해보자.

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
