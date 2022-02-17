import React from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Content from '../components/Content';
// import "../styles/dashboard.scss";
import { useNavigate } from 'react-router-dom';
// import "./Dashboard.scss";

export default function Dashboard(props) {
  const userID = localStorage.getItem('userID')

  // Store all data in state and manipulate it as need be
  const [data, setData] = useState([])

  let navigate = useNavigate();

  const [loginUserID, setLoginUserID] = useState(localStorage.getItem('userID'));

  // const [data, setData] = useState({
  //   strategies: [],
  //   records: []
  // });


  useEffect(() => {

    if (userID) {
      console.log('userID', userID)
      Axios.get(`http://localhost:8080/dashboard`, { params: { user_id: userID } })
        .then((res) => {
          console.log('response', res.data)
          setData(res.data)
      })
    } else {
      navigate("/");
   }
  }, [loginUserID]);


  return (
    <>
      <main className="layout">
        <Sidebar />
        <div className="layout__right">
          <Navbar
            loginUserID={loginUserID}
            setLoginUserID={setLoginUserID} />
          <Content data={data} />
        </div>
      </main>
    </>
  );
}