import './Summary.scss';
import getBarChartData from '../../helpers/getBarChartData';

import { Bar } from "react-chartjs-2";


export default function BarChart({ data }) {

    const { barData, barLabels } = getBarChartData(data)

    const dataset = {
        labels: barLabels,
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
                hoverBackgroundColor: [
                    '#501800',
                    '#4B5000',
                    '#175000',
                    '#003350',
                    // '#35014F'
                ],
                data: barData
            }
        ]
    }

    return (

        <div className="pie">
            <Bar
                width={400}
                height={500}
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
                        display: true,
                        position: 'top'
                    },
                    // animation: {
                    //   animateScale: true,
                    //   animateRotate: true
                    // },
                    datalabels: {
                        display: true,
                        color: "white",
                    },
                    tooltips: {
                        backgroundColor: "#5a6e7f",
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