import React, { useEffect, useState } from 'react';
import Axios from "axios";
import EmptyHistory from './EmptyHistory';
import HistoryList from "./HistoryList";
import "./Transaction.scss";

export default function Transaction() {
  const userID = localStorage.getItem("userID");
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    Axios.get("/history", {params: { userID }})
      .then(res => {
        console.log("history data", res.data);
        const returnedData = res.data;
        setHistoryData([...returnedData]);
      })
      .catch(err => console.log(err.message));
  }, []);

  return (
    <div className='history'>
      { historyData.length === 0? <EmptyHistory /> : <HistoryList historyData={ historyData } /> }
    </div>
  );
}