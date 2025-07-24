function maxNumber(arr) {
    let biggestNumber = [];

    for (let i = 0; i < arr.length; i++) {
        let currentNumber = arr[i];
        let isBiggerNumber = true;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] >= currentNumber) {
                isBiggerNumber = false;
                break;
            }
        }
        if (isBiggerNumber) {
            biggestNumber.push(currentNumber);
        }
    }
    console.log(biggestNumber.join(' '));
}

//maxNumber([1, 4, 3, 2]);
//maxNumber([14, 24, 3, 19, 15, 17]);
//maxNumber([41, 41, 34, 20]);
//maxNumber([27, 19, 42, 2, 13, 45, 48]);
