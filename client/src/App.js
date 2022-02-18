import './App.scss';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Landing from './pages/Landing';
import DashboardCalendar from './pages/DashboardCalendar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Axios from 'axios'
import React from 'react';
import { useEffect } from 'react';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/calendar" element={<DashboardCalendar/>} />
      </Routes>
    </Router>
  );
}

export default App;
