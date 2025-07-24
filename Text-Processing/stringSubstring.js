//solve #1
function stringSubstring(searchWord, string) {
    let str = string.toLowerCase().split(' ');
    let wordToFind = searchWord.toLowerCase();

    if (!str.includes(wordToFind)) {
        console.log(`${searchWord} not found!`);
    } else {
        console.log(searchWord);
    }
}

//stringSubstring('python', 'JavaScript is the best programming language');

//solve #2
function stringSubstring(search, sentence) {
    let words = sentence.toLowerCase().split(' ');
    if (words.includes(search.toLowerCase())) {
        console.log(search);
    } else {
        console.log(`${search} not found!`);
    }
}
