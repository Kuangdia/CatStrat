import "./Navbar.scss";
import { IoLogoOctocat } from 'react-icons/io';
import FaceIcon from '@mui/icons-material/Face';

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Badge } from '@mui/material';


export default function Navbar(props) {
  return (
    <section className="navbar">
      <div className="navbar__button">

        <div className="navbar__notice">
          <button>
          <Badge badgeContent={229} color="success">
            {/* <NotificationsNoneIcon className="navbar__icon"/> */}
            <NotificationsIcon className="navbar__icon"/>
          </Badge>
          </button>
        </div>

        <div className="navbar__coin">
          <img 
            src="catecoin.png"
            alt="catecoin-icon"
            className="navbar__icon"
          />
          <p>X<span>100</span></p>
        </div>
      </div>

      <div className="navbar__user">
        {/* <FaceIcon className="navbar__avatar navbar__icon" /> */}
        <IoLogoOctocat className="navbar__avatar navbar__icon" />
        <p className="navbar__user__name">John Doe</p>
      </div>
    </section>
  );

}