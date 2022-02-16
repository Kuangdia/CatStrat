import React from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Content from '../components/Content';
import "../styles/dashboard.scss";

export default function Dashboard(props) {
  const userID = localStorage.getItem('userID')
  
  // Store all data in state and manipulate it as need be
  const [data, setData] = useState([])

  useEffect(() => {
    
    Axios.defaults.withCredentials = true;

    if (userID) {
      console.log('userID', userID)
      Axios.get(`http://localhost:8080/dashboard`, {params: {user_id: userID}})
      .then((res) => {
        console.log('response', res.data)
        setData(res.data)
        
      })
      .catch((err) => {
        console.log(err);
      });
    }

  }, [])

  return(
    <>
      <main className="layout">
        <Sidebar/>
        <div className="layout__right">
          <Navbar />
          <Content data={data} />
        </div>
      </main>
    </>
  );
}