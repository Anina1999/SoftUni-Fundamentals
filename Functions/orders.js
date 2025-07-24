function orders(product, count) {
    let price = 0;
    switch (product) {
        case 'coffee':
            price += 1.50;
            break;
        case 'coke':
            price += 1.40;
            break;
        case 'water':
            price += 1.00;
            break;
        case 'snacks':
            price += 2.00;
    }  

    let totalPrice = price * count;
    
    return totalPrice.toFixed(2);
}

let totalPrice = orders("water", 5);

console.log(totalPrice);
