import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Landing from './pages/Landing';
import DashboardCalendar from './pages/DashboardCalendar';
import DashboardComparison from './pages/DashboardComparison';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Axios from 'axios'
import React from 'react';
import DashboardProfile from './pages/DashboardProfile';
import DashboardStrategyInfo from './pages/DashboardStrategyInfo';
import {useState, useEffect} from 'react'

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
        <Route path="/calendar" element={<DashboardCalendar/>} />
        <Route path="/profile/:id" element={<DashboardProfile />}/>
        <Route path="/comparison/:id" element={<DashboardComparison />} />
        <Route path="/strategyInfo" element={<DashboardStrategyInfo/>}/>
      </Routes>
    </Router>
  );
}

export default App;
