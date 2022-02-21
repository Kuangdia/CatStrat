import React from "react";

export default function History(props) {
  const {desc, amount, date, id, is_spending } = props;

  let classname = "history__table__";
  if (!id) {
    classname += "header__item";
  } else {
    classname += "body__item";
    if (is_spending) {
      classname += " even-tr";
    } else {
      classname += " odd-tr";
    }
  }

  return (
    <tr className={ classname }>
      <td className="desc">{ desc }</td>
      <td>{ !id? amount : is_spending? `-${amount}` : `+${amount}` }</td>
      <td>{ date }</td>
    </tr>
  );
}