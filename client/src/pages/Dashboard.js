import React from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import "./Dashboard.scss";
import { useNavigate } from 'react-router-dom';

export default function Dashboard(props) {
  let navigate = useNavigate();

  const [loginUserID, setLoginUserID] = useState(localStorage.getItem('userID'));

  const [data, setData] = useState({strategies: [],
                                    records: []
                                  });

  useEffect(() => {
    if (loginUserID) {
      Axios.post('/strategies', {loginUserID})
      .then((response) => {
        console.log(response)
        setData(response)
      })
      .catch((err) => {
        console.log(err);
      });
    } else {
      navigate("/login");
    }
  }, [loginUserID]);

  return(
    <>
      <main className="layout">
        <Sidebar />
        <div className="layout__right">
          <Navbar 
            loginUserID={loginUserID} 
            setLoginUserID = {setLoginUserID} />
          <Content />
        </div>
      </main>
      {/* <button onClick={log}></button> */}
    </>
  );
}