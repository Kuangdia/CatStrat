import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Landing from './pages/Landing';
import DashboardCalendar from './pages/DashboardCalendar';
import DashboardComparison from './pages/DashboardComparison';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import DashboardProfile from './pages/DashboardProfile';
import DashboardNewProfile from './pages/DashboardNewProfile';
import DashboardCoins from './pages/DashboardCoins';
import DashboardStrategyInfo from './pages/DashboardStrategyInfo';
import DashboardLeaderBoard from './pages/DashboardLeaderBoard';
import DashboardFAQ from './pages/DashboardFAQ';
import DashboardTransaction from './pages/DashboardTransaction';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

function App() {
  // const [user, setUser] = useState({})

  // const loggedUser = () => {
  //   const token = localStorage.getItem("token")
  //   axios.get("/api", {params: {token}})
  //     .then((res) => {
  //       console.log("client res", res.data)
  //       setUser(res.data)
  //     })
  //     .catch(err => console.log(err));
  // }

  // useEffect(() => {
  //   loggedUser();
  // })


  const [coins, setCoins] = useState(0);

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const userID = localStorage.getItem("userID")
    console.log("is userid console", userID)

    Axios.get("/username", { params: { userID } })
      .then(res => {
        console.log("dashboardprofile", res.data)

        res.data.map((item) => {
          if (userID == item.id) {
            // console.log("itemid", item.id)
            setCoins(item.coins);
            // console.log("coin set", item.coins)
            return;
          }
        })
      })

  }, [id])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard setCoins={setCoins} coins={coins}/>} />
        <Route path="/calendar" element={<DashboardCalendar setCoins={setCoins} coins={coins}/>} />
        <Route path="/profile/:id" element={<DashboardProfile setCoins={setCoins} coins={coins}/>} />
        <Route path="/comparison/:id" element={<DashboardComparison setCoins={setCoins} coins={coins}/>} />
        <Route path="/strategyInfo" element={<DashboardStrategyInfo setCoins={setCoins} coins={coins}/>} />
        <Route path="/catecoins/:id" element={<DashboardCoins setCoins={setCoins} coins={coins} />} />
        <Route path="/newprofile" element={<DashboardNewProfile setCoins={setCoins} coins={coins} />} />
        <Route path="/leaderBoard" element={<DashboardLeaderBoard setCoins={setCoins} coins={coins} />} />
        <Route path="/FAQ" element={<DashboardFAQ setCoins={setCoins} coins={coins}/>} />
        <Route path="/transaction" element={<DashboardTransaction setCoins={setCoins} coins={coins} />} />
      </Routes>
    </Router>
  );
}

export default App;
