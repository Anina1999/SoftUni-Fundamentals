function sequence(inputArr) {
    let uniqueArr = [];

    for (let str of inputArr) {
        let arr = JSON.parse(str).map(Number);
        let sortedArr = arr.slice().sort((a, b) => b - a); 

        let key = arr.slice().sort((a, b) => a - b).join(',');
        let isUnique = !uniqueArr.some(e => e.slice().sort((a, b) => a - b).join(',') === key);

        if (isUnique) {
            uniqueArr.push(sortedArr);
        }
    }

    uniqueArr.sort((a, b) => a.length - b.length);

    for (let unique of uniqueArr) {
        console.log(`[${unique.join(', ')}]`);
    }
}

//sequence(["[-3, -2, -1, 0, 1, 2, 3, 4]",

//"[10, 1, -17, 0, 2, 13]",

//"[4, -3, 3, -2, 2, -1, 1, 0]"]);
//sequence(["[7.14, 7.180, 7.339, 80.099]",

//"[7.339, 80.0990, 7.140000, 7.18]",

//"[7.339, 7.180, 7.14, 80.099]"]);
