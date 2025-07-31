function bakeryShop(input) {
    let stock = {};
    let allSold = 0;

    for (let line of input) {
        if (line === 'Complete') break;

        let [command, quantityStr, ...foodParts] = line.split(' ');
        let quantity = Number(quantityStr);
        let food = foodParts.join(' ');

        if (command === 'Receive') {
            if (quantity > 0) {
                if (!stock.hasOwnProperty(food)) {
                    stock[food] = 0;
                }
                stock[food] += quantity;
            }
        }

        else if (command === 'Sell') {
            if (!stock.hasOwnProperty(food)) {
                console.log(`You do not have any ${food}.`);
            } else if (stock[food] < quantity) {
                console.log(`There aren't enough ${food}. You sold the last ${stock[food]} of them.`);
                allSold += stock[food];
                delete stock[food];
            } else {
                stock[food] -= quantity;
                allSold += quantity;
                console.log(`You sold ${quantity} ${food}.`);
                if (stock[food] === 0) {
                    delete stock[food];
                }
            }
        }
    }

    for (let food in stock) {
        console.log(`${food}: ${stock[food]}`);
    }

    console.log(`All sold: ${allSold} goods`);
}

//bakeryShop(['Receive 10 muffins',
//'Receive 23 bagels',
//'Sell 5 muffins',
//'Sell 10 bagels',
//'Complete'
//]);
