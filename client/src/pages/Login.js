import React from 'react'
import { useState, useEffect } from 'react';
import "../styles/login.scss";
import Axios from 'axios';
import cat from '../images/catbg2.png'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  let navigate = useNavigate();
  const [loginUser, setLoginUser] = useState("")
  const [loginPassword, setLoginPassword] = useState("")

  const [loginStatus, setLoginStatus] = useState(false)

  Axios.defaults.withCredentials = true;

  const login = () => {
    console.log("clicked")
    Axios.post('http://localhost:8080/login', {
      username: loginUser, 
      password: loginPassword
    }).then((response) => {
      console.log("react login", response)
      if (response.data.message) {
        setLoginStatus(false)
      } else {
        setLoginStatus(true)
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('userID', response.data.userID)
        localStorage.setItem('username', response.data.username)
      }
    })
  }

  // const getUserID = () => {
  //   const userID = localStorage.getItem('userID')
  //   return userID;
  // }
  const getUser = () => {
    const user = localStorage.getItem('username')
    return user;
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    
    if (token) {
      setLoginStatus(true)
    } 

    if (loginStatus) {
      return navigate("/dashboard")
    }

  }, [loginStatus])

  return (
    <div className="container-cat">
      <div className="catbox">
        <img id="cat" src={cat} alt="cat"/>
      </div>
      <div className="login-form">
        <h4 className="login-text">Log in to CatStrat</h4>
        <div className="center-form">
        <span id="span-text">Email</span>
        <input 
          type="text"
          name="username"
          placeholder="Username" 
          value={loginUser}
          onChange={(e) => {
          setLoginUser(e.target.value)
        }}
        />
        <span id="span-text">Password</span>
        <input 
          type="password" 
          name="password"
          placeholder="Password" 
          value={loginPassword}
          onChange={(e) => {
          setLoginPassword(e.target.value)
        }}
        />
        <button onClick={login}>Log in</button>
        </div>
      </div>
    </div>
  )
}

export default Login;