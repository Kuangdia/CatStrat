import { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from './components/Nav/nav';
import './App.css';


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
    <div>
      Hello React
      <Nav></Nav>
    </div>
  );
}

export default App;
