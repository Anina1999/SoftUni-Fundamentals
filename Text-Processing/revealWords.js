//solve #1
function revealWords(word, sentence) {
    let searchWords = word.split(', ');
    let sentenceSplit = sentence.split(' ');

    for (let i = 0; i < sentenceSplit.length; i++) {
        let currentWord = sentenceSplit[i];
        if (currentWord.includes('*')) {
            for (let w of searchWords) {
                if (w.length === currentWord.length) {
                    sentenceSplit[i] = w;
                    break;
                }
            }
        }
    }
    console.log(sentenceSplit.join(' '));
}

//revealWords('great, learning',

//'softuni is ***** place for ******** new programming languages');

//solve #2
function revealWords(wordlist, templateString) {
    let searchWordsArr = wordlist.split(', ');
    let searchWords = {};
    for (let word of searchWordsArr) {
        let key = '*'.repeat(word.length);
        searchWords[key] = word; 
    }

    let sentence = templateString.split(' ');

    for (let i = 0; i < sentence.length; i++) {
        let currentWord = sentence[i];
        if (searchWords.hasOwnProperty(currentWord)) {
            sentence[i] = searchWords[currentWord];
        }
    }
    console.log(sentence.join(' '));
}
