import './Summary.scss';
import { useState } from 'react';
import getTotalEarnings from '../../helpers/getTotalEarnings';
import getAverageEarnings from '../../helpers/getAverageEarnings';

import LineGraph from './LineGraph';
import Statistic from './Statistic';
import StrategyContainer from './StrategyContainer';

export default function Summary({ data }) {

  const totalFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  });

  const averageFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  // Organize and manipulate data
  const totalEarnings = totalFormatter.format(getTotalEarnings(data));
  const averageEarnings = averageFormatter.format(getAverageEarnings(data));

  // Store data after being manipulated
  // const [displayData, setDisplayData] = useState({})

  // Store user selection
  // const [selection, setSelection] = useState('All time')



  return (
    <section className="full-container">
        <div className="stats">

          <Statistic
            label={'Total Earnings'}
            data={totalEarnings}
            image='sum.png'
          />

          <Statistic
            label={'Average Daily Earnings'}
            data={averageEarnings}
            image='average.png'
          />

          <Statistic
            label={'Most Purchased Stock'}
            data={'AAPL'}
            image='trend.png'
          />

          <Statistic
            label={'Highest gain in a day!'}
            data={'$12,000'}
            image='gain.png'
          />
        </div>

      <div className="graphs-container">
        <LineGraph data={data} />
        <StrategyContainer data={data} />
        
      </div>

    </section>
  );
}