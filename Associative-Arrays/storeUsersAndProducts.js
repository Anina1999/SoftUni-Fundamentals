function storeUsersAndProducts(data) {
    function trackUserPurchases(data) {
        let usersMap = new Map();

        for (let line of data) {
            if (line.startsWith('user ')) {
                let username = line.split('user ')[1];
                if (!usersMap.has(username)) {
                    usersMap.set(username, []);
                }
            } else if (line.includes('buys:')) {
                let [usernamePart, purchasePart] = line.split(' buys: ');
                let [product, price] = purchasePart.split(', ');
                price = parseFloat(price);

                if (usersMap.has(usernamePart)) {
                    usersMap.get(usernamePart).push({
                        product,
                        price
                    });
                }
            }
        }

        for (let [username, purchases] of usersMap.entries()) {
            console.log(username);
            for (let purchase of purchases) {
                console.log(`--- ${purchase.product}: ${purchase.price.toFixed(2)}`);
            }
        }
    }
    
    trackUserPurchases(data);
}

//storeUsersAndProducts([
//  'user Ivan',
//  'user Maria',
//  'Ivan buys: Book, 12.50',
//  'Maria buys: Pen, 2.30',
//  'Ivan buys: Notebook, 5.20'
//]);
