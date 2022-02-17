import './Summary.scss';
import getBarChartData from '../../helpers/getBarChartData';

import { Bar } from "react-chartjs-2";
import { Divider, Paper } from '@material-ui/core';


export default function BarChart({ data }) {

    const { barData, barLabels } = getPieChartData(data)

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
        <Paper elevation={3} className="pie" style={{ borderRadius: '30px' }}>
            <h1 className="pie__title"> Strategies Used </h1>
            <Divider className="divider" style={{ height: '2px', color: 'black' }} />
            <div className="pie">
                <Pie
                    data={dataset}
                    options={{
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
                        // layout: {
                        //     padding: {
                        //         top: 5,
                        //         bottom: 5,
                        //         left: 5,
                        //         right: 5
                        //     }
                        // }
                    }}
                />
            </div>
        </Paper>
    );
}