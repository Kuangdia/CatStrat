import React from 'react'
import "./comparison.scss"
import Button from '@mui/material/Button';
import PieChart from './PieChartC';
import {useState, useEffect} from 'react'
import Axios from "axios";
import {useParams} from 'react-router-dom'

const Comparison = () => {
  const [graphData, setGraphData] = useState([]);
  const [compare, setCompare] = useState(false);

  const userID = localStorage.getItem("userID");
  const params = useParams();
  const id = params.id;


  useEffect(() => {

    if (userID == id) {
      setCompare(false)

      Axios.get(`http://localhost:8080/dashboard`, { params: { user_id: userID } })
      .then((all) => {
        setGraphData(all.data)
      console.log("all1", all.data)
      })
      .catch(err => console.log("comparison page", err))
    }

  }, []);

  return (
    <div className="comparison-container">
      {!compare ? 
      <>
        <div className="nocomparison-container">
          <div className="no-compare-txt">
            No Comparison
          </div>
          <div className="no-compare-btn">
            <Button size="small" variant="contained">Line</Button>
            <Button size="small" variant="contained">Pie</Button>
            <Button size="small" variant="contained">Bar</Button>
          </div>
          <div className="no-compare-graph">
            <PieChart id="graph-chart" data={graphData}/>
          </div>
        </div>
      </> 
      : 
      <>
      <div className="comparison-container-middle">Comparison Chart</div>
      <div className="comparison-container-bottom">
        <div className="comparison-container-left">
          <div className="a-btn">
            <Button size="small" variant="contained">Line</Button>
            <Button size="small" variant="contained">Pie</Button>
            <Button size="small" variant="contained">Bar</Button>
          </div>
          <div className="a-graphs">
            <PieChart id="graph-chart" data={graphData}/>
          </div>
        </div>
        <div className="comparison-container-right">
          <div className="c-btn">
            <Button size="small" variant="contained">Line</Button>
            <Button size="small" variant="contained">Pie</Button>
            <Button size="small" variant="contained">Bar</Button>
          </div>
          <div className="c-graphs">

          </div>
        </div>
      </div>
      </>}
    </div>
  )
}

export default Comparison;