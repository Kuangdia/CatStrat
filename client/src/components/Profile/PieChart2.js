import '../Summary/Summary.scss';
import getPieChartData from '../../helpers/getPieChartData';

import { Doughnut, Pie } from "react-chartjs-2";
import { randomColor } from 'randomcolor'

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default function PieChart({ data }) {

  const { pieData, pieLabels } = getPieChartData(data)
  let random = randomColor();

  const dataset = {
    labels: pieLabels,
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: [
          '#B21F00',
          '#C9DE00',
          '#2FDE00',
          '#00A6B4',
          // '#6800B4'
        ],
        // hoverBackgroundColor: [
        //   '#501800',
        //   '#4B5000',
        //   '#175000',
        //   '#003350',
        //   // '#35014F'
        // ],
        data: pieData
      }
    ]
  }

  return (
      <div className="pie">
        <Pie
          width={350}
          height={380}
          data={dataset}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              display: true,
              position: 'top'
            },
            animation: {
              animateScale: true,
              animateRotate: true
            },
            datalabels: {
              display: true,
              color: "white",
            },
            layout: {
              padding: {
                top: 40,
                bottom: 0,
                left: -30,
                right: 0
              }
            }
          }}
        />
      </div>
  );
}