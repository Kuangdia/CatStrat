import React from 'react'
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Comparison from "../components/Comparison";

export default function DashboardProfile({coins, setCoins}) {

  return(
    <>
      <main className="layout">
        <Sidebar />
        <div className="layout__right">
          <Navbar coins={coins} setCoins={ setCoins }/>
          <div className='content'>
            <Comparison coins={coins} setCoins={ setCoins }/>
          </div>
        </div>
      </main>
    </>
  );
}