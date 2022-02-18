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


    return { barData, barLabels };
}


