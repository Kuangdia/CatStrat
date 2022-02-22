import React from 'react'
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/dashboard.scss";
import CateCoins from '../components/CateCoins';
import {useState, useEffect} from 'react';
import Axios from 'axios';
import {useParams} from 'react-router-dom'

export default function DashboardProfile({coins, setCoins}) {

  return(
    <>
      <main className="layout">
        <Sidebar />
        <div className="layout__right">
          <Navbar coins={coins} setCoins={ setCoins }/>
          <CateCoins coins= { coins } setCoins={ setCoins } />
        </div>
      </main>
    </>
  );
}