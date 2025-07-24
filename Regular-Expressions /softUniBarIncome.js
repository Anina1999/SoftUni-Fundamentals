//solve #1
function softUniBarIncome(input) {
    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.]*?(?<price>\d+(\.\d+)?)\$/;
    let total = 0;

    for (let line of input) {
        if (line === 'end of shift') break;

        let match = line.match(pattern);

        if (match) {
            let { name, product, count, price } = match.groups;
            count = Number(count);
            price = parseFloat(price);
            let priceOfAllProducts = count * price;

            console.log(`${name}: ${product} - ${priceOfAllProducts.toFixed(2)}`);
            total += priceOfAllProducts;
        }
    }
    console.log(`Total income: ${total.toFixed(2)}`);
}

//softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',

//'%Peter%<Gum>1.3$',

//'%Maria%<Cola>|1|2.4',

//'%Valid%<Valid>valid|10|valid20$',

//'end of shift']);


//solve #2
function softUniBarIncome(input) {
    let orderPattern = /%([A-Z][a-z]+)%[^|$%.]*<(\w+)>[^.]*\|(\d+)\|[^$]*?(\d+(\.\d+)?)\$/;
    let totalIncome = 0;

    for (let line of input) {
        if (line === 'end of shift') break;

        let match = line.match(orderPattern);
        if (match) {
            let customer = match[1];
            let product = match[2];
            let count = parseInt(match[3]);
            let price = parseFloat(match[4]);
            let totalPrice = count * price;
            console.log(`${customer}: ${product} - ${totalPrice.toFixed(2)}`);
            totalIncome += totalPrice;
        }
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
