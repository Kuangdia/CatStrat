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

export default function ListTabs(props) {


  return (
    <React.Fragment>
      <ListItemButton onClick={() => {console.log(props.wow)}} >
        <ListItemIcon>
          <DashboardIcon className="hello" />
        </ListItemIcon>
        <ListItemText primary="Dashboard" className="hello" primaryTypographyProps={{fontSize: '1em'}} />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <AccountCircleIcon className="hello" />
        </ListItemIcon>
        <ListItemText primary="Profile" className="hello" primaryTypographyProps={{fontSize: '1em'}} />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <TodayIcon className="hello" />
        </ListItemIcon>
        <ListItemText primary="Calendar" className="hello" primaryTypographyProps={{fontSize: '1em'}} />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon className="hello" />
        </ListItemIcon>
        <ListItemText primary="Strategy Info" className="hello" primaryTypographyProps={{fontSize: '1em'}} />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <CompareArrowsIcon className="hello" />
        </ListItemIcon>
        <ListItemText primary="Comparison" className="hello" primaryTypographyProps={{fontSize: '1em'}} />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <LeaderboardIcon className="hello" />
        </ListItemIcon>
        <ListItemText primary="Leaderboard" className="hello" primaryTypographyProps={{fontSize: '1em'}} />
      </ListItemButton>
    </React.Fragment>
  );
}