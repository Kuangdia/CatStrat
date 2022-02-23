import React from 'react'
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import FAQ from '../components/FAQ';

export default function DashboardFAQ({coins, setCoins, tab, setTab}) {

  return(
    <>
      <main className="layout">
        <Sidebar tab={tab} setTab={setTab}/>
        <div className="layout__right">
          <Navbar coins={coins} setCoins={setCoins} tab={tab} setTab={setTab} />
          <div className='content'>
            <FAQ coins={coins} setCoins={ setCoins }/>
          </div>
        </div>
      </main>
    </>
  );
}