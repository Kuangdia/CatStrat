import './App.scss';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  

  useEffect(() => {
    axios.get(`http://localhost:8080/dashboard`)
      .then((res) => {
        console.log('data!');
        console.log(res.data);
      })
      .catch(err => {
        console.log('error', err)
      })
  }, [])

  

  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />}/> */}
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
    </Router>
  );
}

export default App;
