import React from 'react'
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import FAQ from '../components/FAQ';

export default function DashboardFAQ({coins, setCoins}) {

  return(
    <>
      <main className="layout">
        <Sidebar />
        <div className="layout__right">
          <Navbar coins={coins} setCoins={setCoins} />
          <div className='content'>
            <FAQ />
          </div>
        </div>
      </main>
    </>
  );
}