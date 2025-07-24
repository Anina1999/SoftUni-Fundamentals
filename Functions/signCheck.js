function signCheck(numOne, numTwo, numThree) {
    let arr = [numOne, numTwo, numThree];
    let negativeCount = 0;

    for (let i = 0; i < arr.length; i++) {  
        let currentNumber = arr[i];
        if(currentNumber < 0) {
            negativeCount++;       
        }
    }

    if (negativeCount % 2 === 0) {
        console.log('Positive');
    } else {
        console.log('Negative');
    }
}

//signCheck(5, 12, -15);
