import React from 'react'
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Transaction from "../components/Transaction";
import "../components/Transaction/Transaction.scss";

export default function DashboardLeaderBoard(props) {

  return(
    <>
      <main className="layout">
        <Sidebar />
        <div className="layout__right">
          <Navbar />
          <div className='content'>
            <Transaction />
          </div>
        </div>
      </main>
    </>
  );
}