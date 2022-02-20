import { format, parseISO } from 'date-fns';
// var parseISO = require('date-fns/parseISO');

export default function getBarChartData(data) {
    const barData = [];
    const barLabels = [];

    let formattedData = data.reduce((acc, curr) => {
        if (acc[curr.strategy_name]) {
            acc[curr.strategy_name] += curr.profit;
        } else {
            acc[curr.strategy_name] = curr.profit;
        }
        return acc;
    }, {})

    const arrData = Object.entries(formattedData);

    arrData.forEach(([strat, profit]) => {
        barLabels.push(strat);
        barData.push(profit);
    });
    console.log('barLabels', barLabels)
    console.log('barData', barData)

    const availableColors = ["#2F3C7E", "#FBEAEB", "#FEE715", "#e52165", "#a2d5c6", "#b20238", "#fbcbc9", "#6b7b8c", "#ff6e40"]
    const colors =[];
    for (let i = 0; i < barLabels.length; i++) {
        colors.push(availableColors[i])

    }

    return { barData, barLabels, colors };
}


