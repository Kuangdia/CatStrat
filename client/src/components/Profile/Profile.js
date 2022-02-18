import React from 'react'
import "./profile.scss"
import coin from "../../images/imgC.png"
import Upvotes from '@mui/icons-material/ThumbUp';
import Downvotes from '@mui/icons-material/ThumbDown';
import Trophy from '@mui/icons-material/EmojiEvents';
import {useState, useEffect} from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import Button from '@mui/material/Button';
import VerifiedIcon from '@mui/icons-material/Verified';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { TextField } from '@mui/material';
import {useParams} from 'react-router-dom'
import Axios from "axios";
// import { DataGrid } from '@mui/x-data-grid';
import strategy from "./Data.json"

import 'devextreme/dist/css/dx.material.blue.dark.css';
import { ProgressBar } from 'devextreme-react/progress-bar';



const Profile = () => {
  // const [loginID, setLoginID] = useState("")
  const [getData, setGetData] = useState("");
  // const [goal, setGoal] = useState(0)
  // const [profit, setProfit] = useState(0)
  // const [upvoteCount, setUpvoteCount] = useState(0)
  // const [downvoteCount, setDownvoteCount] = useState(0)
  const [editProfile, setEditProfile] = useState(true)
  const [follow, setFollow] = useState(false)
  const [removeFollow, setRemoveFollow] = useState(false)
  const [unfollow, setUnfollow] = useState(true)
  const [showFollow, setShowFollow] = useState(false);
  const params = useParams()
  const id = params.id

  useEffect(() => {
    const userID = localStorage.getItem("userID")

    Axios.get(`/profile/${id}}`, {params: {id}})
      .then(res => {
        console.log("resdata", res.data[0])
        setGetData(res.data[0])
        if (parseInt(userID) !== parseInt(id)) {
          setShowFollow(true)
        }
        if (parseInt(userID) !== parseInt(id) && removeFollow === false) {
          setFollow(true)
          setUnfollow(false)
        } else {
          setFollow(false)
          setUnfollow(true)
        }
        if (parseInt(userID) !== parseInt(id)) {
          setEditProfile(false)
        }
      })
      .catch(err => console.log(err));

  }, [removeFollow, id])

  const followUser = () => {
    console.log("clicked")
    const userID = localStorage.getItem("userID")

    Axios.post("/following", {userID, id})
      .then(res => {
        console.log("followed success!", res.data)
        if (res.data.added === true) {
          setRemoveFollow(true)
        }
      })
      .catch(err => console.log(err));
  }

  const unfollowUser = () => {
    console.log("clicked")
    const userID = localStorage.getItem("userID")

    Axios.post("/unfollow", {userID, id})
      .then(res => {
        console.log("unfollowed success!")
        if (res.data.added === false) {
          setRemoveFollow(false)
        }
      })
      .catch(err => console.log(err));
  }


  return (
    <div className="profile-container">
      <div className="profile-container-side">
        <img src={getData.avatar_url} className="avatar" alt="avatar"/>
        <div className="profile-social">
          <p className="icons-s"><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarOutlineIcon/></p>
          <p className="icons-i"><FaFacebook className="fb1"/>facebook/Catstreetbets</p>
          <p className="icons-i"><FaInstagram className="fb1"/>instagram/Catstreetbets</p>
          <p className="icons-i"><FaTwitter className="fb1"/>Twitter/Catstreetbets</p>
          {/* <p className="icons-i"><FaLinkedin />LinkedIn/Catstreetbets</p> */}
          <p className="icons-i"><img className="catecoin" src={coin} alt="catecoin"/>X100</p>
          <p className="icons-t"><Trophy className="icons-t-inside"/>X1</p>
        </div>
      </div>
      <div className="profile-container-main">
        <div className="profile-about">
          <div className="user-profile">
            <div className="profile-separator">
              <div className="follow-btn">
                <div className="profile-username">{getData.username}<VerifiedIcon/></div>
                {!showFollow ? <></> : <>{follow === true ? <Button size="small" variant="contained" onClick={followUser}>Follow</Button> : <Button size="small" variant="contained" onClick={unfollowUser} >Unfollow</Button>}</>}
              </div>
              <div>
                <div className="last-online">Last Online: 2 hours ago</div>
              </div>
            </div>
            <div className="follow-separator">
              <div className="f-number">
                <div className="follow-number">{getData.followers}</div>
                <div className="profile-followers">followers</div>
              </div>
              <div className="f-text">
                <div className="follow-number">{getData.following}</div>
                <div className="profile-followings">followings</div>
              </div>
            </div>
          </div>
          <div className="stock-profile">
            {editProfile && <Button id="edit-btn" size="small" variant="contained">Edit</Button>}
            <div className="progress" >
            <div className="profit-goal"></div>
              <h4 className="profit-goal-text">Profit Goal: $10000</h4>
              <ProgressBar
                min={0}
                max={100}
                value={parseInt(getData.profit) / 100}
                width={340}
                height={0}
              />
            <div className="votes">
              <div className="up"><Upvotes/>10 &nbsp;&nbsp;&nbsp;</div>
              <div className="down"><Downvotes/>2</div>
            </div>
            </div>
          </div>
        </div> 
        <div className="profile-graph">
          <div className="graph1">
            
          </div>
          <div className="graph2">
            <div className="table-container">
              <tr className="column">
                <th>Strategy Name</th>
                <th>Description</th>
                <th><Upvotes /></th>
                <th><Downvotes /></th>
              </tr>
              <tr className="table-rows">
                <td className="one">News trading</td>
                <td className="two">A news trading strategy​​ involves trading based on news and market expectations.</td>
                <td className="three">20</td>
                <td className="four">10</td>
              </tr>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile