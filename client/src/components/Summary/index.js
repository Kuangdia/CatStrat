import './Summary.scss';
import { useState } from 'react';

export default function Summary(props) {

  const data = props.data

  // Store data after being manipulated
  const [displayData, setDisplayData] = useState({})

  // Store user selection
  const [selection, setSelection] = useState('All time')
  
  return (
    <section>
      
      
      <div className="stats">
        <div className="stats__total-earnings">
          Hello
        </div>

        <div className="stats__total-earnings">
          Hello
        </div>

        <div className="stats__total-earnings">
          Hello
        </div>
      </div> 
      
      
    </section>
  );
}