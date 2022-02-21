import React from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useNavigate } from 'react-router-dom';
import "../components/Calendar/Calendar.scss";
import Calendar from '../components/Calendar';
import {useParams} from 'react-router-dom'

export default function DashboardCalendar(props) {
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
          <Navbar 
            coins={coins} />
          <div className="content">
            <Calendar />
          </div>
        </div>
      </main>
      {/* <button onClick={log}></button> */}
    </>
  );
}