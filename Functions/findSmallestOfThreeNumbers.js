function findSmallestOfThreeNumbers(numOne, numTwo, numThree) {
    function findSmallerNumber(x, y) {
        return x < y ? x : y;
    }

    let smallerOfFirstTwo = findSmallerNumber(numOne, numTwo);
    let smallest = findSmallerNumber(smallerOfFirstTwo, numThree);

    return smallest;
}

let result = findSmallestOfThreeNumbers(2, 5, 3);
console.log(result);
