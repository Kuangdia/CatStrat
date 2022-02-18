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

import Axios from "axios";

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';



export default function ListTabs(props) {
  let navigate = useNavigate();

  const [change, setChange] = useState(false)
  
  const userID = localStorage.getItem("userID");

  const sendGetReq = (target, userID) => {
    Axios.get(`/${target}`, {params: { userID }})
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
  
  return (
    <React.Fragment>
      <ListItemButton onClick={() => {dashboardRoute(userID)}}>
        <ListItemIcon>
          <DashboardIcon className="hello" />
        </ListItemIcon>
        <ListItemText primary="Dashboard" className="hello" />
      </ListItemButton>

      <ListItemButton onClick={() => {profileRoute(userID)}}>
          <ListItemIcon>
            <AccountCircleIcon className="hello" />
          </ListItemIcon>
          <ListItemText primary="Profile" className="hello"/>
      </ListItemButton>

      <ListItemButton onClick={() => {sendGetReq("calendar", userID)}} >
        <ListItemIcon>
          <TodayIcon className="hello" />
        </ListItemIcon>
        <ListItemText 
          primary="Calendar" 
          className="hello" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon className="hello" />
        </ListItemIcon>
        <ListItemText primary="Strategy Info" className="hello" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <CompareArrowsIcon className="hello" />
        </ListItemIcon>
        <ListItemText primary="Comparison" className="hello" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <LeaderboardIcon className="hello" />
        </ListItemIcon>
        <ListItemText primary="Leaderboard" className="hello" />
      </ListItemButton>

    </React.Fragment>
  );
}