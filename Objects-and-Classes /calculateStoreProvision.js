function calculateStoreProvision(currentStockArr, orderedProductsArr) {
//    let object = {};
//    let productName;

//    for (let i = 0; i < currentStockArr.length; i++) {
//        let index = currentStockArr[i];
//       let evenOrOdd = i % 2 === 0 ? productName = index : object[productName] = Number(index);
//    }

//    for (let i = 0; i < orderedProductsArr.length; i++) {
//        let index = orderedProductsArr[i];
//        let evenOrOdd = i % 2 === 0 ? productName = index : object.hasOwnProperty(productName) ? 
//        object[productName] += Number(index) : object[productName] = Number(index);
//    }

//    for (let product in object) {
//        console.log(`${product} -> ${object[product]}`);
//    }

    let store = {};

    for (let i = 0; i < currentStockArr.length; i += 2) {
        let product = currentStockArr[i];
        let quantity = Number(currentStockArr[i + 1]);
        store[product] = quantity;
    }

    for (let i = 0; i < orderedProductsArr.length; i += 2) {
        let product = orderedProductsArr[i];
        let quantity = Number(orderedProductsArr[i + 1]);
        if (store.hasOwnProperty(product)) {
            store[product] += quantity;
        } else {
            store[product] = quantity;
        }
    }

    for (let product in store) {
        console.log(`${product} -> ${store[product]}`);
    }
}

//calculateStoreProvision([

//'Chips', '5', 'CocaCola', '9', 'Bananas',

//'14', 'Pasta', '4', 'Beer', '2'

//],

//[

//'Flour', '44', 'Oil', '12', 'Pasta', '7',

//'Tomatoes', '70', 'Bananas', '30'

//]);
//calculateStoreProvision([ 

//'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5' ],

//[ 'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30' ]);
