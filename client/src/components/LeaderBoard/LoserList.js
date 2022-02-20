import React from "react";
import Loser from "./Loser";

export default function LoserList(props) {
  const { loserStratData } = props;

  const loserComponents = loserStratData.map(loserObj => {
    return (
      <Loser
        key={ loserObj.order }
        order={ loserObj.order }
        strategyName={ loserObj.strategyName }
        upvotes={ loserObj.upvotes }
        userName={ loserObj.userName}
      />
    )
  })

  return (
    <ul className="ld__loser__list">
      { loserComponents }
    </ul>
  );
}