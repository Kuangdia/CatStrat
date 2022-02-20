import React from 'react';

export default function Top3Button(props) {
  const { strategyName, upvotes, order, userName } = props;

  return (
    <div 
      className={`ld__top-winner__list__item winner-${order}`}
    >
      <p>{ strategyName }</p>
      <p>{ upvotes }</p>
      <p>{ userName }</p>
    </div>
  );
}