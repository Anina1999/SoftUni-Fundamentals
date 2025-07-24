function storage(input) {
    let map = new Map();

    for (let data of input) {
        let [item, quantity] = data.split(' ');
        quantity = Number(quantity);

        if (map.has(item)) {
            let existingQuantity = map.get(item);
            let updatedQuantity = existingQuantity + quantity;

            map.set(item, updatedQuantity);
        } else {
            map.set(item, quantity);
        }
    }
    
    for (let [key, value] of map.entries()) {
        console.log(`${key} -> ${value}`);
    }
}

//storage(['tomatoes 10',

//'coffee 5',

//'olives 100',

//'coffee 40']);
