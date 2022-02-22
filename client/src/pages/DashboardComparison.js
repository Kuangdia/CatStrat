import React from 'react'
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Comparison from "../components/Comparison";
import "../styles/dashboard.scss";
import {useState, useEffect} from 'react';
import Axios from 'axios';
import {useParams} from 'react-router-dom'

export default function DashboardProfile({coins, setCoins}) {

  return(
    <>
      <main className="layout">
        <Sidebar />
        <div className="layout__right other_layout">
          <Navbar coins={coins} setCoins={ setCoins }/>
          <Comparison coins={coins} setCoins={ setCoins }/>
        </div>
      </main>
    </>
  );
}