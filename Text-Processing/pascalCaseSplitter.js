//solve #1
function pascalCaseSplitter(str) {
    let word = [];
    let currentWord = str[0];

    for (let i = 1; i < str.length; i++) {
        let currentChar = str[i];

        if (currentChar === currentChar.toUpperCase()) {
            word.push(currentWord);
            currentWord = currentChar;
        } else {
            currentWord += currentChar;
        }
    }
    word.push(currentWord);

    console.log(word.join(', '));
}

//pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');

function pascalCaseSplitter(str) {
    let result = [];
    let wordStart = 0;

    for (let i = 1; i < str.length; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z') {
            result.push(str.substring(wordStart, i));
            wordStart = i;
        }
    }
    result.push(str.slice(wordStart));
    console.log(result.join(', '));
}
