//solve #1
function replaceRepeatingCharacters(text) {
    let char = text.split('');
    let result = [];

    for (let i = 0; i < char.length; i++) {
        let currentChar = char[i];
        let nextChar = char[i + 1];

        if (currentChar !== nextChar) {
            result.push(currentChar);
        }
    }

    console.log(result.join(''));
}

//replaceRepeatingCharacters('aaaaabbbbbcdddeeeedssaa');

//solve #2
    function replaceRepeatingChars(str) {
        let result = '';
        for (let i = 0; i < str.length; i++) {
            if (str[i] !== str[i - 1]) {
                result += str[i];
            }
        }
        console.log(result);
}
//replaceRepeatingChars('qqqwerqwecccwd');
