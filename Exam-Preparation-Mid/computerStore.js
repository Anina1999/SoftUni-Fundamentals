function computerStore(inputArr) {
    let arr = inputArr.slice();
    let i = 0;
    let command = arr[i];
    let totalWithoutTaxes = 0;
    let totalTaxes = 0;

    while (command !== 'special' && command !== 'regular') {
        let currentPrice = Number(command);

        if (currentPrice < 0) {
            console.log("Invalid price!");
        } else {
            totalWithoutTaxes += currentPrice;
            totalTaxes += currentPrice * 0.20; 
        }

        i++;
        command = arr[i];
    }

    if (totalWithoutTaxes === 0) {
        console.log("Invalid order!");
        return;
    }

    let totalPriceWithTaxes = totalWithoutTaxes + totalTaxes;

    if (command === 'special') {
        totalPriceWithTaxes *= 0.90;
    }

    console.log("Congratulations you've just bought a new computer!");
    console.log(`Price without taxes: ${totalWithoutTaxes.toFixed(2)}$`);
    console.log(`Taxes: ${totalTaxes.toFixed(2)}$`);
    console.log("-----------");
    console.log(`Total price: ${totalPriceWithTaxes.toFixed(2)}$`);
}


//computerStore(["1050",
//"200",
//"450",
//"2",
//"18.50", 
//"16.86", 
//"special"
//]);
//computerStore(["1023", 
//"15",
//"-20",
//"-5.50",
//"450",
//"20", 
//"17.66", 
//"19.30",
//"regular"
//]);
