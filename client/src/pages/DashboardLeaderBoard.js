import React from 'react'
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import LeaderBoard from "../components/LeaderBoard";

export default function DashboardLeaderBoard({coins, setCoins}) {

  return(
    <>
      <main className="layout">
        <Sidebar />
        <div className="layout__right">
          <Navbar coins={coins} setCoins={ setCoins }/>
          <div className='content'>
            <LeaderBoard coins={coins} setCoins={ setCoins }/>
          </div>
        </div>
      </main>
    </>
  );
}