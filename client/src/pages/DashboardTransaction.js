import React from 'react'
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Transaction from "../components/Transaction";

export default function DashboardTransaction({coins, setCoins}) {

  return(
    <>
      <main className="layout">
        <Sidebar />
        
        <div className="layout__right">
          <Navbar coins={coins} setCoins={ setCoins }/>
          <div className='content'>
            <Transaction coins={coins} setCoins={ setCoins }/>
          </div>
        </div>
      </main>
    </>
  );
}