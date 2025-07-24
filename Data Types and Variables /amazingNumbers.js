function amazingNumbers(number) {
    
    let numberAsString = String(number);
    let sum = 0;

    for (let i = 0; i < numberAsString.length; i++) {
        let currentSymbol = numberAsString[i];
        sum += Number(currentSymbol);
    }

    let currentSumAsString = String(sum);

    let isAmazing = currentSumAsString.includes('9');

    // for (let i = 0; i < currentSumAsString.length; i++) {
    //     let currentDigit = currentSumAsString[i];

    //     if (currentDigit === '9') {
    //         isAmazing = true;
    //     }
    // }

    if (isAmazing) {
        console.log(`${number} Amazing? True`);
    } else {
        console.log(`${number} Amazing? False`);
    }
}

//amazingNumbers(999);
