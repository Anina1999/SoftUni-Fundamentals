function factorialDivision(firstNumber, secondNumber) {
    function calculateFactorialOfNumber(x) {
        let factorialOfFirstNumber = 1;
        for (let i = 1; i <= x; i++) {
            factorialOfFirstNumber *= i;
        }
        return factorialOfFirstNumber;
    }

    let resultOfFirstNumber = calculateFactorialOfNumber(firstNumber);
    let resultOfSecondNumber = calculateFactorialOfNumber(secondNumber);
    let divided = resultOfFirstNumber / resultOfSecondNumber;

    console.log(divided.toFixed(2));
}

//factorialDivision(5, 2);
