const data = `
2019-01-01,Death by Chocolate,180,5,900
2019-01-01,Cake Fudge,150,1,150
2019-01-01,Cake Fudge,150,1,150
2019-01-01,Cake Fudge,150,3,450
2019-01-01,Death by Chocolate,180,1,180
2019-01-01,Vanilla Double Scoop,80,3,240
2019-01-01,Butterscotch Single Scoop,60,5,300
2019-01-01,Vanilla Single Scoop,50,5,250
2019-01-01,Cake Fudge,150,5,750
2019-01-01,Hot Chocolate Fudge,120,3,360
2019-01-01,Butterscotch Single Scoop,60,5,300
2019-01-01,Chocolate Europa Double Scoop,100,1,100
2019-01-01,Hot Chocolate Fudge,120,2,240
2019-01-01,Caramel Crunch Single Scoop,70,4,280
2019-01-01,Hot Chocolate Fudge,120,2,240
2019-01-01,Hot Chocolate Fudge,120,4,480
`;

const lines = data.trim().split('\n');

const getMonth = (dateStr) => {
    const date = new Date(dateStr);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
};

let totalSales = 0;
const monthSales = {};
const monthItems = {};
const monthRevenue = {};
const itemOrders = {};

lines.forEach(line => {
    const [date, sku, unitPrice, quantity, totalPrice] = line.split(',');

    const month = getMonth(date);
    const quantityInt = parseInt(quantity);
    const totalPriceInt = parseInt(totalPrice);

    totalSales += totalPriceInt;

    if (!monthSales[month]) {
        monthSales[month] = 0;
    }
    monthSales[month] += totalPriceInt;

    if (!monthItems[month]) {
        monthItems[month] = {};
    }
    if (!monthItems[month][sku]) {
        monthItems[month][sku] = 0;
    }
    monthItems[month][sku] += quantityInt;

    if (!monthRevenue[month]) {
        monthRevenue[month] = {};
    }
    if (!monthRevenue[month][sku]) {
        monthRevenue[month][sku] = 0;
    }
    monthRevenue[month][sku] += totalPriceInt;

    if (!itemOrders[sku]) {
        itemOrders[sku] = {};
    }
    if (!itemOrders[sku][month]) {
        itemOrders[sku][month] = [];
    }
    itemOrders[sku][month].push(quantityInt);
});

const popularItems = {};
const revenueItems = {};

for (const month in monthItems) {
    popularItems[month] = Object.keys(monthItems[month]).reduce((a, b) => monthItems[month][a] > monthItems[month][b] ? a : b);
}

for (const month in monthRevenue) {
    revenueItems[month] = Object.keys(monthRevenue[month]).reduce((a, b) => monthRevenue[month][a] > monthRevenue[month][b] ? a : b);
}

const popularItemStats = {};

for (const sku in itemOrders) {
    for (const month in itemOrders[sku]) {
        const orders = itemOrders[sku][month];
        const min = Math.min(...orders);
        const max = Math.max(...orders);
        const avg = orders.reduce((a, b) => a + b, 0) / orders.length;

        if (!popularItemStats[sku]) {
            popularItemStats[sku] = {};
        }
        popularItemStats[sku][month] = { min, max, avg };
    }
}

console.log("Total sales of the store:", totalSales);
console.log("Month wise sales totals:", monthSales);
console.log("Most popular item in each month:", popularItems);
console.log("Items generating most revenue in each month:", revenueItems);
console.log("Order statistics for the most popular item:", popularItemStats);
