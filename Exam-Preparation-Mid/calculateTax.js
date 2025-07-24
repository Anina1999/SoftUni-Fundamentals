function calculateTax(inputArr) {
    let slicedArr = inputArr.slice().join('').split('>>');
    let taxToBePaid = 0;

    for (let i = 0; i < slicedArr.length; i++) {
        let currentVehicle = slicedArr[i].split(' ');
        let carType = currentVehicle[0];
        let yearsForTaxPayment = Number(currentVehicle[1]);
        let kmTraveled = Number(currentVehicle[2]);

        if (carType !== 'family' && carType !== 'heavyDuty' && carType !== 'sports') {
            console.log('Invalid car type.');
            continue;
        }

        let familyTypeInEuro = 50;
        let heavyDutyTypeInEuro = 80;
        let sportsTypeInEuro = 100;
        let totalCarTax = 0;

        switch (carType) {
            case 'family':
                for (let j = 1; j <= yearsForTaxPayment; j++) {
                    familyTypeInEuro -= 5;
                }
                familyTypeInEuro += Math.floor(kmTraveled / 3000) * 12;
                totalCarTax = familyTypeInEuro;
                break;

            case 'heavyDuty':
                for (let j = 1; j <= yearsForTaxPayment; j++) {
                    heavyDutyTypeInEuro -= 8;
                }
                heavyDutyTypeInEuro += Math.floor(kmTraveled / 9000) * 14;
                totalCarTax = heavyDutyTypeInEuro;
                break;

            case 'sports':
                for (let j = 1; j <= yearsForTaxPayment; j++) {
                    sportsTypeInEuro -= 9;
                }
                sportsTypeInEuro += Math.floor(kmTraveled / 2000) * 18;
                totalCarTax = sportsTypeInEuro;
                break;
        }

        taxToBePaid += totalCarTax;
        console.log(`A ${carType} car will pay ${totalCarTax.toFixed(2)} euros in taxes.`);
    }

    console.log(`The National Revenue Agency will collect ${taxToBePaid.toFixed(2)} euros in taxes.`);
}

//calculateTax([ 'family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410' ]);
//calculateTax([ 'family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012' ]);
