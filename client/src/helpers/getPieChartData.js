import { format, parseISO } from 'date-fns';
// var parseISO = require('date-fns/parseISO');

export default function getPieChartData(data) {
    const pieData = [];
    const pieLabels = [];

    let formattedData = data.reduce((acc, curr) => {
        if (acc[curr.strategy_name]) {
            acc[curr.strategy_name] += 1;
        } else {
            acc[curr.strategy_name] = 1;
        }
        return acc;
    }, {})

    const arrData = Object.entries(formattedData);

    arrData.forEach(([strat, count]) => {
        pieLabels.push(strat);
        pieData.push(count);
    });
    // console.log('pieLabels', pieLabels)
    // console.log('pieData', pieData)


    return { pieData, pieLabels };
}


