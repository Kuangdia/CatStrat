import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TodayIcon from '@mui/icons-material/Today';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';

import "./ListTabs.scss";
import "./Sidebar.scss";

import Axios from "axios";
import { useNavigate } from 'react-router-dom';


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

  const comparisonRoute = (userID) => {
    navigate(`/comparison/${userID}`)
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

  const leaderBoardRoute = (userID) => {
    if (userID) {
      navigate(`/leaderBoard`)
    }
  };

  const transactionRoute = (userID) => {
    if (userID) {
      navigate(`/transaction`)
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

      <div onClick={() => { comparisonRoute(userID) }} className="nav-item" >
        <CompareArrowsIcon style={{ width: '1.5em', height: '1.5em'}} className="icon" /> 
        <div className="label">Comparison </div>
      </div>

      <div onClick={() => { leaderBoardRoute(userID) }} className="nav-item"  >
        <div >
          <LeaderboardIcon className='icon' style={{ width: '1.5em', height: '1.5em'}}/> 
        </div>
        <div className="label">Leaderboard </div>
      </div>

      <div onClick={() => { transactionRoute(userID) }} className="nav-item"  >
        <div >
          <HistoryToggleOffIcon className='icon' style={{ width: '1.5em', height: '1.5em'}}/> 
        </div>
        <div className="label">Transaction </div>
      </div>


    </div>
  );
}