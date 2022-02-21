import React from 'react'
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import LeaderBoard from "../components/LeaderBoard";
import "../components/LeaderBoard/LeaderBoard.scss";
import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react';
import Axios from 'axios';

export default function DashboardLeaderBoard(props) {
  const [coins, setCoins] = useState(0);

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const userID = localStorage.getItem("userID")
    console.log("is userid console", userID)

    Axios.get("/username", {params: {userID}})
      .then(res => {
        console.log("dashboardprofile", res.data)
        
        res.data.map((item) => {
          if (userID == item.id) {
            // console.log("itemid", item.id)
            setCoins(item.coins);
            // console.log("coin set", item.coins)
            return;
          }
        })
      })

  }, [id])

  return(
    <>
      <main className="layout">
        <Sidebar />
        <div className="layout__right">
          <Navbar coins={coins}/>
          <div className='content'>
            <LeaderBoard />
          </div>
        </div>
      </main>
    </>
  );
}