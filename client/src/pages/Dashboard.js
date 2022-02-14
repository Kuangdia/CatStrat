import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar";
import React from "react";

export default function Dashboard(props) {
  return(
    <React.Fragment>
      <Navbar />
      <Sidebar />
    </React.Fragment>
    );
}