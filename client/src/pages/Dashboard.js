import React from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import "./Dashboard.scss";

export default function Dashboard(props) {
  const userID = localStorage.getItem('userID')
  const [data, setData] = useState("")

  useEffect(() => {
    
    // Axios.defaults.withCredentials = true;

    if (userID) {
      Axios.post('/strategies', {userID})
      .then((response) => {
        console.log(response)
        setData(response)
      })
      .catch((err) => {
        console.log(err);
      });
    }

    

  }, [])

  // const log = () => {
  //   console.log(data)
  // }

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
      <main className="layout">
        <Sidebar />
        <div className="layout__right">
          <Navbar />
          <Content />
        </div>
      </main>
      {/* <button onClick={log}></button> */}
    </>
  );
}