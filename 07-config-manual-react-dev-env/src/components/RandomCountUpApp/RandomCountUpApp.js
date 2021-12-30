import React from 'react';

export const RandomCountUpApp = ({ count, isComplete }) => {
  const completeStyle = isComplete ? { animationName: 'none' } : null;
  return (
    <div className="randomCountUp">
      <output sylte={completeStyle}>{count}</output>
    </div>
  );
};
