import './Summary.scss';
import { useState } from 'react';
import getTotalEarnings from '../../helpers/getTotalEarnings';
import getAverageEarnings from '../../helpers/getAverageEarnings';

import LineGraph from './LineGraph';
import PieChart from './PieChart';
import Statistic from './Statistic';

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
    <section>
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
          label={'Return on Investment'}
          data={'34%'}
          image='logo192.png'
        />

        <Statistic
          label={'Better than others in your money bracket'}
          data={'15%'}
          image='logo192.png'
        />
      </div>
      <div className="graphs-container">
        <LineGraph data={data} />
        <PieChart data={data} />
      </div>

    </section>
  );
}