# Node.js 환경에서 Jest를 이용해 DOM test 및 util 함수 테스트 연습

## utils 함수에 대한 테스트 기준

- addClass.js

  > node.js 환경에서 DOM 테스트가 가능한지 테스트

  - addClass(document.body, 'some') 함수 사용 시 document.body는 'some' 클래스 이름을 소유한다.
  - 문서의 #app 노드에 'anything' 클래스 이름 설정이 가능하다.

- getRandom.js

  > 난수를 구하는 함수 테스트

  - getRandom(10) 실행 결과는 10보다 작다.
  - getRandomCount(5, 7) 실행 결과는 5 이상 7 이하이다.

- transformText.js
  > 텍스트 트랜스폼 유틸리티 테스트
  - snakeCase('simple is best') → 'simple_is_best'
  - kebabCase('simple is best') → 'simple-is-best'
  - camelCase('simple is best') → 'simpleIsBest'
  - titleCase('simple is best') → 'SimpleIsBest'

## DOM 테스트 기준

test('문서의 제목이 "React 앱 개발환경 구성" 인가?', () => {
expect(document.title).toBe('React 앱 개발환경 구성');
});
test('문서에 #app 요소가 존재하는가?', () => {
expect(appNode).toBeInTheDocoument();
});
test('#app 요소 안에 제목 요소가 포함되어 있나?', () => {
const hasHeadlineElement = !!appNode.querySelector('h1,h2,h3,h4,h5,h6');
expect(hasHeadlineElement).toBeTruthy();
});
test('제목의 내용은 "React 앱 개발"', () => {
expect(headlineNode.textContent).toBe('React 앱 개발');
});
test('제목 요소는 headline 클래스를 포함하는가?', () => {
expect(headlineNode).toHaveClass('headline');
});
