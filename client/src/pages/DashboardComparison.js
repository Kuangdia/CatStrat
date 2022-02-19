import React from 'react'
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Comparison from "../components/Comparison";
import "../styles/dashboard.scss";

export default function DashboardProfile(props) {

  return(
    <>
      <main className="layout">
        <Sidebar />
        <div className="layout__right">
          <Navbar />
          <Comparison />
        </div>
      </main>
    </>
  );
}