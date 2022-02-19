import React from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useNavigate } from 'react-router-dom';
import "../components/Calendar/Calendar.scss";
import StrategyInfo from '../components/StrategyInfo';

export default function DashboardStrategyInfo() {
  
  
  const [loginUserID, setLoginUserID] = useState(localStorage.getItem('userID'));
  

  return(
    <>
      <main className="layout">
        <Sidebar />
        <div className="layout__right">
          <Navbar 
            loginUserID={loginUserID} 
            setLoginUserID = {setLoginUserID} />
          <div className="content">
            <StrategyInfo loginUserID={loginUserID}/>
          </div>
        </div>
      </main>
    </>
  );
}