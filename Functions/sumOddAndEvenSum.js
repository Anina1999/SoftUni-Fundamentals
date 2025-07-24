function sumOddAndEvenSum(number) {
    function sumOddSum(num) {
        let oddSum = 0;
        while (num > 0) {
            let digit = num % 10;
            if (digit % 2 !== 0) {
                oddSum += digit;
            }
            num = Math.floor(num / 10);
        }
        return oddSum;
    }

    function sumEvenSum(num) {
        let evenSum = 0;
        while (num > 0) {
            let digit = num % 10;
            if (digit % 2 === 0) {
                evenSum += digit;
            }
            num = Math.floor(num / 10);
        }
        return evenSum;
    }

    let sumOfOddNumbers = sumOddSum(number);
    let sumOfEvenNumbers = sumEvenSum(number);

    console.log(`Odd sum = ${sumOfOddNumbers}, Even sum = ${sumOfEvenNumbers}`);
}

//sumOddAndEvenSum(3495892137259234);
