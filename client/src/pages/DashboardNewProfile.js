import React from 'react';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import NewProfile from "../components/Profile/NewProfile";
import "../styles/dashboard.scss";


export default function DashboardProfile(props) {



  return(
    <>
      <main className="layout">
        <Sidebar />
        <div className="layout__right">
          <Navbar />
          <NewProfile />
        </div>
      </main>
    </>
  );
}