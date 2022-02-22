import React from 'react'
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Calendar from '../components/Calendar';

export default function DashboardCalendar({coins, setCoins}) {

  return(
    <>
      <main className="layout">
        <Sidebar />
        <div className="layout__right">
          <Navbar coins={coins} setCoins={setCoins} />
          <div className="content">
            <Calendar coins={coins} setCoins={setCoins}/>
          </div>
        </div>
      </main>
    </>
  );
}