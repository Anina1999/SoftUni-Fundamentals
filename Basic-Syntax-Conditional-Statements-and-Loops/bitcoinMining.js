function bitcoinMining(gold) {
    //logic
    let goldPricePerGram = 67.51;
    let bitcoinPrice = 11949.16;

    let totalMoney = 0;
    let bitcoins = 0;
    let firstBitcoinBoughtDay = 0;

    for (let day = 0; day < gold.length; day++) {
        let dailyGold = gold[day];

        if ((day + 1) % 3 === 0) {
            dailyGold *= 0.70;
        }
        totalMoney += dailyGold * goldPricePerGram;

        while (totalMoney >= bitcoinPrice) {
            bitcoins++;
            totalMoney -= bitcoinPrice;
            if (bitcoins === 1) {
                firstBitcoinBoughtDay = day + 1;
            }
        }
    }

    console.log(`Bought bitcoins: ${bitcoins}`);
    if (bitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinBoughtDay}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

//bitcoinMining([100, 200, 300]);
