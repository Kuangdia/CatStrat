import './Summary.scss';
import { useState } from 'react';
import getTotalEarnings from '../../helpers/getTotalEarnings';
import getAverageEarnings from '../../helpers/getAverageEarnings';
// import getLineGraphData from '../../helpers/getLineGraphData';

import LineGraph from './LineGraph';

export default function Summary({data}) {

  // Organize and manipulate data
  const totalEarnings = getTotalEarnings(data);
  const averageEarnings = getAverageEarnings(data);
  // const lineGraphData = getLineGraphData(data);

  // Store data after being manipulated
  // const [displayData, setDisplayData] = useState({})

  // Store user selection
  // const [selection, setSelection] = useState('All time')
  
  


  return (
    <section>
      <div className="stats">
        <div className="stats__total-earnings">
          Total Earnings: ${totalEarnings}
        </div>

        <div className="stats__total-earnings">
          Average Daily Earnings: ${averageEarnings}
        </div>

        <div className="stats__total-earnings">
          TBD
        </div>
      </div> 

      <LineGraph data={data}/>

      
      
    </section>
  );
}