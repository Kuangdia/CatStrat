import React from 'react'
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../components/Calendar/Calendar.scss";
import StrategyInfo from '../components/StrategyInfo';

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