function repeatString(string, count) {
    let result = '';
    let i = 0;
    while (i < Number(count)) {
        result += string;
        i++;
    }
    return result;
}

let result = repeatString("abc", 3)

console.log(result);
