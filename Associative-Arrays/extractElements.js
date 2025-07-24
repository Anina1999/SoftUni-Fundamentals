//solve #1
function extractElements(input) {
    let inputArr = input.toLowerCase().split(' ');

    function filterElements(arr) {
        let obj = {};

        for (let el of arr) {
            if (obj.hasOwnProperty(el)) {
                obj[el]++;
            } else {
                obj[el] = 1;
            }
        }

        return obj;
    }

    let filtered = filterElements(inputArr);

    let result = [];

    for (let el of inputArr) {
        if (filtered[el] % 2 !== 0 && !result.includes(el)) {
            result.push(el);
        }
    }
    console.log(result.join(' '));
}

//extractElements('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');

//solve #2 (by filter)
function extractElements(input) {
    let inputArr = input.toLowerCase().split(' ');

    let result = inputArr.filter((word, index, arr) => {
        let count = arr.filter(w => w === word).length;
        return count % 2 !== 0 && arr.indexOf(word) === index;
    });
    console.log(result.join(' '));
}

//extractElements('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');

//solve #3
function oddOccurrences(sentence) {
    let words = sentence.split(' ');
    let countMap = new Map();

    for (let word of words) {
        let lower = word.toLowerCase();
    //    if (!countMap.has(lower)) {
    //        countMap.set(lower, 0);
    //    }

    //    countMap.set(lower, countMap.get(lower) + 1);
        countMap.set(lower, (countMap.get(lower) || 0) + 1);
    }

    let result = [];
    for (let [key, value] of countMap.entries()) {
        if (value % 2 === 1) {
            result.push(key); 
        }
    }
    console.log(result.join(' '));
}

//oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
