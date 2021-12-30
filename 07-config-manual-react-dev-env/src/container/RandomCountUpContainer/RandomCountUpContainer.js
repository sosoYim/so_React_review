import React, { useState, useEffect } from 'react';
import { getRandomMinMax } from '../../utils/getRandom';
import { settings } from '../../utils';
import { RandomCountUpApp } from '../../components';

// let count = 0;

export function RandomCountUpContainer() {
  const [count, setCount] = useState(0);
  const [isComplete, setIsComplete] = useState(count === TARGET);

  const MIN = 0;
  const MAX = 30;
  const TARGET = getRandomMinMax(MIN, MAX);

  const animate = () => {
    if (!isComplete) {
      setCount((cnt) => cnt + 1);
      console.log('nope');
      window.requestAnimationFrame(animate);
    } else {
      console.log('completed');
      return;
    }
    console.log({ count, TARGET, isComp: count === TARGET });
  };

  settings.setDocumentTitle(`${TARGET} 랜덤 카운트 업 앱!`);
  settings.clickDocumentReloadBrowser();
  useEffect(() => {
    setIsComplete(count === TARGET);
    // FIX: 무한 반복 중
    // animate();
  }, [count, isComplete]);
  return <RandomCountUpApp count={count} isComplete={isComplete} />;
}
// RandomCountUpContainer.defaultProps = {
//   MIN: 0,
//   MAX: 30,
//   TARGET: getRandomMinMax(MIN, MAX),
// };
