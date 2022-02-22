import React from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useNavigate } from 'react-router-dom';
import "../components/Calendar/Calendar.scss";
import StrategyInfo from '../components/StrategyInfo';
import {useParams} from 'react-router-dom'

export default function DashboardStrategyInfo({coins, setCoins}) {

  return(
    <>
      <main className="layout">
        <Sidebar />
        <div className="layout__right">
          <Navbar coins={coins} setCoins={ setCoins } />
          <div className="content">
            <StrategyInfo coins={coins} setCoins={ setCoins }/>
          </div>
        </div>
      </main>
    </>
  );
}