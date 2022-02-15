import "./Navbar.scss";
import { IoLogoOctocat } from 'react-icons/io';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';


export default function Navbar(props) {

  const { setLoginUserID } = props;

  const logout = () => {
    setLoginUserID("");
    localStorage.setItem("userID", "");
  }

  return (
    <section className="navbar">
      <div className="navbar__button">
        
        <div onClick= { logout }>
          <button> Logout</button>
        </div>

        <div className="navbar__notice">
          <button>
            <NotificationsNoneIcon className="navbar__icon"/>
          </button>
          <p>+666</p>
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
        <IoLogoOctocat className="navbar__avatar navbar__icon" />
        <p className="navbar__user__name">John Doe</p>
      </div>
    </section>
  );

}