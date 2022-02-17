import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Landing from './pages/Landing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import DashboardProfile from './pages/DashboardProfile';
import {useState, useEffect} from 'react'
import axios from 'axios';

function App() {
  // const [user, setUser] = useState({})

  // const loggedUser = () => {
  //   const token = localStorage.getItem("token")
  //   axios.get("/api", {params: {token}})
  //     .then((res) => {
  //       console.log("client res", res.data)
  //       setUser(res.data)
  //     })
  //     .catch(err => console.log(err));
  // }

  // useEffect(() => {
  //   loggedUser();
  // })

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/profile/:id" element={<DashboardProfile />}/>
      </Routes>
    </Router>
  );
}

export default App;
