import "./Navbar.scss";

import FaceIcon from '@mui/icons-material/Face';

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';


export default function Navbar(props) {
  return (
    <section className="navbar">
      <div className="navbar__button">

        <div className="navbar__notice">
          <button>
            <NotificationsNoneIcon className="navbar__icon" />
          </button>
          <p>+<span>666</span></p>
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
        <FaceIcon className="navbar__avatar navbar__icon" />
        <p className="navbar__user__name">Allen</p>
      </div>
    </section>
  );

}