import React from 'react'
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import LeaderBoard from "../components/LeaderBoard";
import "../components/LeaderBoard/LeaderBoard.scss";

export default function DashboardLeaderBoard(props) {

  return(
    <>
      <main className="layout">
        <Sidebar />
        <div className="layout__right">
          <Navbar />
          <div className='content'>
            <LeaderBoard />
          </div>
        </div>
      </main>
    </>
  );
}