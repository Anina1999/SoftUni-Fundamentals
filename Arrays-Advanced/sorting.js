function sorting(arr) {
    let sliceArr = arr.slice();                             
    let sortedLowest = sliceArr.sort((a, b) => a - b);     
    let sortedHighest = arr.slice().sort((a, b) => b - a); 
    let result = [];

    for (let i = 0; i < arr.length / 2; i++) {
        result.push(sortedHighest[i]);
        result.push(sortedLowest[i]);
    }

    if (arr.length % 2 !== 0) {
        result.pop();
    }
    console.log(result.join(' '));
}

//sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
//sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
