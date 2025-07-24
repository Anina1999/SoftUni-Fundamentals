//solve #1
function modernTimesOfHashTag(str) {
    function isValid(word) {
        let isValid = true;
        let chars = word.split('');
        for (let char of chars) {
            if (char.toLowerCase() === char.toUpperCase()) {
                isValid = false;
                break;
            }
        }
        return isValid;
    }

    let everyElement = str.split(' ');
    let result = [];

    for (let el of everyElement) {
        if (el.length > 1 && el.startsWith('#')) {
            let word = el.slice(1);
            if (isValid(word)) {
                result.push(word);
            }
        }
    }

    for (let word of result) {
        console.log(word);
    }
}

//modernTimesOfHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');

//solve #2
function modernTimesOfHashTag(text) {
    let words = text.split(' ');
    for (let word of words) {
        if (word.startsWith('#')) {
            let cleanWord = word.slice(1);
            if (cleanWord.length > 0 && cleanWord.split('').every(c => 
            (c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z'))) {
                console.log(cleanWord);
            }
        }
    }
}
