function modificateNumber(num) {
    function makeNumberToArray(number) {
        return String(number).split('').map(Number);
    }

    function findSumOfDigits(digits) {
        let sum = 0;
        for (let i = 0; i < digits.length; i++) {
            sum += digits[i];
        }
        return sum;
    }

    function findAverageDigit(sum, count) {
        return sum / count;
    }

    let digits = makeNumberToArray(num);
    let average = findAverageDigit(findSumOfDigits(digits), digits.length);

    while (average <= 5) {
        digits.push(9); 
        let sum = findSumOfDigits(digits); 
        average = findAverageDigit(sum, digits.length);
    }
    console.log(digits.join(''));
}

//modificateNumber(101);
