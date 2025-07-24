function createCatalogue(inputArr) {
    let products = [];

    for (let line of inputArr) {
        let [name, price] = line.split(' : ');
        price = Number(price);
        products.push({ name, price });
    }

    products.sort((a, b) => a.name.localeCompare(b.name));

    let currentLetter = '';

    for (let product of products) {
        let firstLetter = product.name[0];

        if (firstLetter !== currentLetter) {
            currentLetter = firstLetter;
            console.log(currentLetter);
        }

        console.log(`  ${product.name}: ${product.price}`);
    }
}

//createCatalogue([

//'Appricot : 20.4',

//'Fridge : 1500',

//'TV : 1499',

//'Deodorant : 10',

//'Boiler : 300',

//'Apple : 1.25',

//'Anti-Bug Spray : 15',

//'T-Shirt : 10'

//]);
//createCatalogue([

//'Omlet : 5.4',

//'Shirt : 15',

//'Cake : 59'

//]);
