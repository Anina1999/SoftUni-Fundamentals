function mergeArrays(firstArr, secondArr) {
    let result = [];

    for (let i = 0; i < firstArr.length; i++) {
        if (i % 2 === 0) {
            
            let sum = Number(firstArr[i]) + Number(secondArr[i]);
            result.push(sum);
        } else {
            let concatenated = firstArr[i] + secondArr[i];
            result.push(concatenated);
        }
    }

    console.log(result.join(" - "));
}

//mergeArrays(['5', '15', '23', '56', '35'],

//['17', '22', '87', '36', '11']);
//mergeArrays(['13', '12312', '5', '77', '4'],

//['22', '333', '5', '122', '44']);
