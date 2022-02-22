export default function getMostBoughtStock(data) {
   
    let stock = '';
    let stockObj = {};
    data.forEach((record) => {
        average += record.profit
    })

    average = average/data.length;

    return average.toFixed(2);

}