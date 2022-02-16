import './Summary.scss';
import { useState } from 'react';

export default function Summary(props) {

  const data = props.data

  // Store data after being manipulated
  // const [displayData, setDisplayData] = useState({})

  // Store user selection
  // const [selection, setSelection] = useState('All time')
  



  return (
    <section>
      
      
      <div className="stats">
        <div className="stats__total-earnings">
          Total Earnings
        </div>

        <div className="stats__total-earnings">
          Average Daily Earnings
        </div>

        <div className="stats__total-earnings">
          TBD
        </div>
      </div> 
      
      
    </section>
  );
}