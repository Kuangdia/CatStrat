import React from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useNavigate } from 'react-router-dom';
import "../components/Calendar/Calendar.scss";
import StrategyInfo from '../components/StrategyInfo';

export default function DashboardStrategyInfo(props) {
  const userID = localStorage.getItem('userID')

  let navigate = useNavigate();

  const [loginUserID, setLoginUserID] = useState(localStorage.getItem('userID'));

  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get(`/strategy/${userID}`)
    if (userID) {
      console.log('userID', userID)
      Axios.get(`http://localhost:8080/strategy/${userID}`)
        .then((res) => {
          console.log('response', res.data)
          setData(res.data)
        })
    } else {
      navigate("/");
    }
  }, [loginUserID]);

  return(
    <>
      <main className="layout">
        <Sidebar />
        <div className="layout__right">
          <Navbar 
            loginUserID={loginUserID} 
            setLoginUserID = {setLoginUserID} />
          <div className="content">
            <StrategyInfo data={data}/>
          </div>
        </div>
      </main>
    </>
  );
}