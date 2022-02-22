import React from 'react'
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import FAQ from '../components/FAQ';

export default function DashboardFAQ(props) {

  return(
    <>
      <main className="layout">
        <Sidebar />
        <div className="layout__right">
          <Navbar />
          <div className='content'>
            <FAQ />
          </div>
        </div>
      </main>
    </>
  );
}