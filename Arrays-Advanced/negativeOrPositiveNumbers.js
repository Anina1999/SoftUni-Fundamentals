function negativeOrPositiveNumbers(arr) {
    arr = arr.map(Number);

    let result = [];

    for (let el of arr) {
        if (el < 0) {
            result.unshift(el);
        } else {
            result.push(el);
        }
    }

    for (let number of result) {
        console.log(number);
    }
}

//negativeOrPositiveNumbers(['7', '-2', '8', '9']);
