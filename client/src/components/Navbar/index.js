import "./Navbar.scss";
import { IoLogoOctocat } from 'react-icons/io';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Badge } from '@mui/material';
import cate from "../../images/imgC.png"
import SearchBar from "./SearchBar/SearchBar";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Navbar({coins, setCoins}) {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const userID = localStorage.getItem("userID")
  const username = localStorage.getItem("username")

  useEffect(() => {
    axios.get("/username")
      .then(res => {
        console.log("nav data", res.data)
        setData(res.data)
      })
      .catch(err => console.log(err))

  }, [coins])

  const logout = () => {
    console.log("logout")
    localStorage.clear();
    navigate("/")
  }

  const navigateCoins = () => {
    navigate(`/catecoins/${userID}`)
  }

  return (
    <section className="navbar">
      <div className="searchbar-placement">
          <SearchBar placeholder="Search" data={data}/>
      </div>
      <div className="navbar__button">

        <div className="navbar__notice">
          <button>
          <Badge badgeContent={88} color="success">
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
              onClick={navigateCoins}
            />
            <p>X<span>{ coins }</span></p>

          </div>
        </div>

      <div className="navbar__user">
        <IoLogoOctocat className="navbar__avatar navbar__icon" />
        <p className="navbar__user__name">{username}</p>
      </div>
    </section>
  );

}