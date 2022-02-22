import React from 'react'
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Transaction from "../components/Transaction";
import "../components/Transaction/Transaction.scss";

export default function DashboardTransaction(props) {

  return(
    <>
      <main className="layout">
        <Sidebar />
        <div className="layout__right other_layout">
          <Navbar />
          <div className='content'>
            <Transaction />
          </div>
        </div>
      </main>
    </>
  );
}