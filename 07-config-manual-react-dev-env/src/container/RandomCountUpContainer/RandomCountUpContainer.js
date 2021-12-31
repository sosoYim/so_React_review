import React, { useState, useEffect } from 'react';
import { getRandomMinMax } from '../../utils/getRandom';
import { settings } from '../../utils';
import { RandomCountUpApp } from '../../components';

// let count = 0;

export function RandomCountUpContainer({ MIN, MAX }) {
  const [count, setCount] = useState(0);
  const [isComplete, setIsComplete] = useState(count === TARGET);
  const [TARGET, setTARGET] = useState(() => getRandomMinMax(MIN, MAX));
  // const [TARGET, setTARGET] = useState(null);

  // // Hooks를 일반 함수 안에 넣으면 안됨 !
  const animate = () => {
    if (!isComplete) {
      // TODO: yamoo9 count가 Target 보다 1이 큰 상태에서 멈춤
      setIsComplete(count === TARGET);
      setCount((cnt) => cnt + 1);
      console.log('nope');
      // TODO: yamoo9 requestAnimationFrame 재귀를 useEffect내에서 어떻게 사용할까요?
      // window.requestAnimationFrame(animate);
    } else {
      console.log('completed');
      return;
    }
    console.log({ count, TARGET, isComp: count === TARGET });
  };

  useEffect(() => {
    animate();
  });

  // componentDidMount
  useEffect(() => {
    settings.clickDocumentReloadBrowser();
    console.log('target', TARGET);
    settings.setDocumentTitle(`${TARGET} 랜덤카운트 시작`);
  }, []);

  return <RandomCountUpApp count={count} isComplete={isComplete} />;
}

RandomCountUpContainer.defaultProps = {
  MIN: 0,
  MAX: 30,
  // get TARGET() {
  //   return getRandomMinMax(this.MIN, this.MAX);
  // },
};
