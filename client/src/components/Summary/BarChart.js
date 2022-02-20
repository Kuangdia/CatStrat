import './Summary.scss';
import getBarChartData from '../../helpers/getBarChartData';

import { Bar } from "react-chartjs-2";

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


export default function BarChart({ data }) {

    const { barData, barLabels } = getBarChartData(data)

    
    const dataset = {
        labels: barLabels,
        datasets: [
            {
                backgroundColor: [
                    '#B21F00',
                    '#C9DE00',
                    '#2FDE00',
                    '#00A6B4',
                    // '#6800B4'
                ],
                hoverBackgroundColor: [
                    '#501800',
                    '#4B5000',
                    '#175000',
                    '#003350',
                    // '#35014F'
                ],
                data: barData,
            }
        ]
    }

    return (

        <div className="pie">
            <Bar
                width={450}
                height={400}
                data={dataset}
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    datalabels: {
                        display: false,
                        color: "white",
                    },
                    plugins: {
                        legend: {
                          display: false
                        }
                      },
                    layout: {
                        padding: {
                            top: 0,
                            bottom: 0,
                            left: 25,
                            right: 25
                        }
                    }
                }}
            />
        </div>

    );
}
