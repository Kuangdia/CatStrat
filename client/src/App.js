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

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/calendar" element={<DashboardCalendar />} />
        <Route path="/profile/:id" element={<DashboardProfile />}/>
        <Route path="/comparison/:id" element={<DashboardComparison />} />
        <Route path="/strategyInfo" element={<DashboardStrategyInfo/>}/>
        <Route path="/catecoins/:id" element={<DashboardCoins/>}/>
        <Route path="/newprofile" element={<DashboardNewProfile />}/>
        <Route path="/leaderBoard" element={<DashboardLeaderBoard />}/>
        <Route path="/FAQ" element={<DashboardFAQ />}/>
        <Route path="/transaction" element={<DashboardTransaction />}/>
      </Routes>
    </Router>
  );
} 

export default App;
