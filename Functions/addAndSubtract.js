function addAndSubtract(numOne, numTwo, numThree) {
    function sumOfFirstTwo(x, y) {
        return x + y;
    }

    function subtractSumOfFirstTwo(sum, y) {
        return sum - y;
    }

    let sum = sumOfFirstTwo(numOne, numTwo);
    let result = subtractSumOfFirstTwo(sum, numThree);

    console.log(result);
}

//addAndSubtract(23, 6, 10);
