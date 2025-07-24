function asciiSumator(inputArr) {
    let text = inputArr.pop(); 
    let firstChar = inputArr[0];
    let secondChar = inputArr[1];

    let start = Math.min(firstChar.charCodeAt(0), secondChar.charCodeAt(0));
    let end = Math.max(firstChar.charCodeAt(0), secondChar.charCodeAt(0));

    let sum = 0;

    for (let char of text) {
        let code = char.charCodeAt(0);
        if (code > start && code < end) {
            sum += code;
        }
    }

    console.log(sum);
}

//asciiSumator(['.',

//'@',

//'dsg12gr5653feee5']);
