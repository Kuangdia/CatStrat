import React from 'react';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile/Profile";

export default function DashboardProfile({coins, setCoins}) {

  return(
    <>
      <main className="layout">
        <Sidebar />
        <div className="layout__right">
          <Navbar coins={coins} setCoins={setCoins}/>
          <div className='content'>
            <Profile setCoins={setCoins} coins={coins}/>
          </div>
        </div>
      </main>
    </>
  );
}