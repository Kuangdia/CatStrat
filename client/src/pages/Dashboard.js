import React from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "./Dashboard.scss";

export default function Dashboard(props) {
  const userID = localStorage.getItem('userID')
  const [data, setData] = useState("")

  useEffect(() => {
    
    Axios.defaults.withCredentials = true;

    if (userID) {
      console.log("first")
      Axios.post('http://localhost:8080/strategies', {userID})
      .then(response => console.log(response))
      .catch((err) => {
        console.log(err);
      });
    }

  }, [])

  // const getStrat = () => {
  //   console.log("clicked")
  //   Axios.defaults.withCredentials = true;

  //   Axios.get('http://localhost:8080/strategies')
  //   .then((response) => {
  //     console.log("third")
  //     console.log("get strats", response)
  //     setData(response)
  //   })
  // }

  return(
    <>
      <div className="dash-container">
      <main className="layout">
        <Sidebar />
        <Navbar />
      </main>
        <div className="get">
          {/* <button onClick={getStrat}>Button</button> */}
        </div>
      </div>
    </>
  );
}