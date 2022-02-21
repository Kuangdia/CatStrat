import React from "react";
import History from "./History";

export default function HistoryList(props) {
  const { historyData } = props;

  const historyComponents = historyData.map(historyObj => {
    return (
      <History
        key={ historyObj.id }
        id={ historyObj.id }
        is_spending={ historyObj.is_spending }
        desc={ historyObj.description }
        amount={ historyObj.amount }
        date={ historyObj.created_at.replace("T", " ").split(".")[0] }
      />
    )
  })
  return (
    <>
      <h2 className="history__title">CateCoins Transaction</h2>
      <table className="history__table">
        <thead className="history__table__header">
          <History id="" is_spending="" desc="DESCRIPTION" amount="AMOUNT" date="DATE" />
        </thead>
        <tbody className="history__table__body">
          { historyComponents }
        </tbody>
      </table>
    </>
  );
}
