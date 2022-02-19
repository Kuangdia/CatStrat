import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';

import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TodayIcon from '@mui/icons-material/Today';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';

import "./ListTabs.scss";
import "./Sidebar.scss";

import Axios from "axios";

import { useNavigate } from 'react-router-dom';
import Today from '@mui/icons-material/Today';


export default function ListTabs(props) {
  let navigate = useNavigate();

  const userID = localStorage.getItem("userID");

  const sendGetReq = (target, userID) => {
    Axios.get(`/${target}`, { params: { userID } })
      .then(res => {
        console.log("records data", res.data);
      })
      .catch(err => console.log(err));
  }

  const profileRoute = (userID) => {
    navigate(`/profile/${userID}`)
  }

  const dashboardRoute = (userID) => {
    if (userID) {
      navigate(`/`)
    }
  }
  const calendarRoute = (userID) => {
    if (userID) {
      navigate(`/calendar`);
    }
  }

  const strategyInfoRoute = (userID) => {
    if (userID) {
      navigate(`/strategyInfo`)
    }
  };

  return (
    <div className='sidebar'>
      <div onClick={() => { dashboardRoute(userID) }} className="nav-item" >
        <div > 
        <DashboardIcon style={{ width: '1.5em', height: '1.5em'}} className="icon" /> </div>
        <div className="label">Dashboard </div>
      </div>


      <div className="nav-item" onClick={() => { profileRoute(userID) }} >
        <div> 
        <AccountCircleIcon style={{ width: '1.5em', height: '1.5em'}} className="icon" /> </div>
        <div className="label">Profile </div>
      </div>


      <div onClick={() => { calendarRoute(userID) }} className="nav-item" >
        <div> 
        <TodayIcon style={{ width: '1.5em', height: '1.5em'}} className="icon" /> </div>
        <div className="label">Calendar </div>
      </div>
      
      <div onClick={() => { strategyInfoRoute(userID) }} className="nav-item" >
        <div> 
        <AssignmentIcon style={{ width: '1.5em', height: '1.5em'}} className="icon" /> </div>
        <div className="label">Strategy Info </div>
      </div>

      <div onClick={() => { dashboardRoute(userID) }} className="nav-item" >
        <CompareArrowsIcon style={{ width: '1.5em', height: '1.5em'}} className="icon" /> 
        <div className="label">Comparison </div>
      </div>

      <div onClick={() => { dashboardRoute(userID) }} className="nav-item"  >
        <div >
          <LeaderboardIcon className='icon' style={{ width: '1.5em', height: '1.5em'}}/> 
        </div>
        <div className="label">Leaderboard </div>
      </div>


    </div>
  );
}