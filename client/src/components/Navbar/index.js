import "./Navbar.scss";
import { IoLogoOctocat } from 'react-icons/io';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Badge } from '@mui/material';
import cate from "../../images/imgC.png"
import SearchBar from "./SearchBar/SearchBar";
import Data from "./Data.json"
import { Navigate, useNavigate } from "react-router-dom";



export default function Navbar(props) {
  const navigate = useNavigate();

  const logout = () => {
    console.log("logout")
    localStorage.clear();
    navigate("/")
  }

  return (
    <section className="navbar">
      <div className="searchbar-placement">
          <SearchBar placeholder="Search" data={Data}/>
      </div>
      <div className="navbar__button">

        <div className="navbar__notice">
          <button>
          <Badge badgeContent={229} color="success">
            {/* <NotificationsNoneIcon className="navbar__icon"/> */}
            <NotificationsIcon className="navbar__icon"/>
          </Badge>
          </button>
        </div>
        <div onClick= { logout }>
          <button className="logout"> Logout</button>
        </div>

      

          <div className="navbar__coin">
            <img 
              src={cate}
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