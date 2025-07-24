function processOddNumbers(arr) {
    let result = arr
        .filter((number, index) => index % 2 === 1)
        .map(number => number * 2)
        .reverse();
    
    console.log(result.join(' '));
}

//processOddNumbers([10, 15, 20, 25]);
