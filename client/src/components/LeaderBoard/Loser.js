import React from "react";

export default function Loser(props) {
  const { order, strategyName, upvotes, userName } = props;
  return (
    <li className="ld__loser__list__item">
      <p>{ order }</p>
      <p>{ strategyName }</p>
      <p>{ upvotes }</p>
      <p>{ userName }</p>
    </li>
  );
}