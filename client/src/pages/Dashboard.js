import React from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Summary from "../components/Summary";
import "../components/Summary/Summary.scss";

export default function Dashboard(props) {
  const userID = localStorage.getItem('userID')
  const [data, setData] = useState("")

  // store all data in state and manipulate it as need be
  const [newData, setNewData] = useState('')

  // store selection state
  const [selection, setSelection] = useState('All time')

  // create helper functions to filter data
  const getWeeklyData = (data, week) => { 
    return data.filter(() => {})
  }

  useEffect(() => {
    
    Axios.defaults.withCredentials = true;

    if (userID) {
      console.log('userID', userID)
      Axios.post(`http://localhost:8080/`, {userID})
      .then((res) => {
        console.log('response', res.data)
        setData(res.data)
        
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
        <Navbar />
      </main>
        <Summary />
      {/* <button onClick={log}></button> */}
    </>
  );
}