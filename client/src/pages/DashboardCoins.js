import React from 'react'
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import CateCoins from '../components/CateCoins';

export default function DashboardCoins({coins, setCoins}) {

  return(
    <>
      <main className="layout">
        <Sidebar />
        <div className="layout__right">
          <Navbar coins={coins} setCoins={ setCoins }/>
          <div className="content">
            <CateCoins coins= { coins } setCoins={ setCoins } />
          </div>
        </div>
      </main>
    </>
  );
}