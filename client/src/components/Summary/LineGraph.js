import React from 'react';
import getLineGraphData from '../../helpers/getLineGraphData';


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
);

 const options = {
  responsive: true,
//   maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

// const labels = ['Jan 21', 'Feb 21', 'Mar 21', 'Apr 21', 'May', 'June', 'July'];

// const lineData = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: [12, 14, 15, 16, 21, 22, 23],
//       borderColor: 'rgb(255, 99, 132)',
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//   ],
// };

export default function LineGraph({ data }) {

    const { lineData, lineLabels } = getLineGraphData(data)

    const lineGraphData = {
          labels: lineLabels,
          datasets: [
            {
              label: 'Dataset 1',
              data: lineData,
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
          ],
        };



  return (
      <Line className="line-graph"
        options={options} 
        data={lineGraphData} 
      />
    );

}
