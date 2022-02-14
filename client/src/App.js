<<<<<<< HEAD
import { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from './components/Nav/nav';
import './App.css';
=======
import './App.scss';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
>>>>>>> efce02b66e926cb16fbf575cdebf714d2c9d28b5


function App() {
  

  useEffect(() => {
    axios.get(`http://localhost:8080/dashboard`)
      .then((res) => {
        console.log('data!');
        console.log(res.data);
      })
      .catch(err => {
        console.log('error', err)
      })
  }, [])

  

  return (
<<<<<<< HEAD
    <div>
      Hello React
      <Nav></Nav>
    </div>
=======
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />}/> */}
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
    </Router>
>>>>>>> efce02b66e926cb16fbf575cdebf714d2c9d28b5
  );
}

export default App;
