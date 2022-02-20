import '../Summary/Summary.scss';
import getBarChartData from '../../helpers/getBarChartData';

import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    Legend
} from 'chart.js';

ChartJS.register(
    Legend
);


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
                label: 'label remove me!'
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
                    // title: {
                    //   display: true,
                    //   text: 'Average Rainfall per month',
                    //   fontSize: 20
                    // },
                    legend: {
                        display: false,
                        position: 'top'
                    },
                    plugins: {
                        legend: {
                          display: false
                        }
                      },
                    // animation: {
                    //   animateScale: true,
                    //   animateRotate: true
                    // },
                    datalabels: {
                        display: false,
                        color: "white",
                    },
                    tooltips: {
                        backgroundColor: "#FFFFFF",
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
