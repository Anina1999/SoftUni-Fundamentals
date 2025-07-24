//solve #1
function trackWords(arr) {
    let [searchedWord, ...words] = arr;

    let splitedWords = searchedWord.split(' ');

    let count = {};

    for (let word of splitedWords) {
        count[word] = 0;
    }

    for (let word of words) {
        if (count.hasOwnProperty(word)) {
            count[word]++;
        } else {
            continue;
        }
    }

    let sorted = Object.entries(count).sort((a, b) => b[1] - a[1]);

    for (let [key, value] of sorted) {
        console.log(`${key} - ${value}`);
    }
}

//trackWords([

//'this sentence',

//'In', 'this', 'sentence', 'you', 'have',

//'to', 'count', 'the', 'occurrences', 'of',

//'the', 'words', 'this', 'and', 'sentence',

//'because', 'this', 'is', 'your', 'task'

//]);

//solve #2

function trackWords(arr) {
    let [searchWordsLine, ...textWords] = arr;
    let searchWords = searchWordsLine.split(' ');
    let wordCounts = {};

    for (let word of searchWords) {
        wordCounts[word] = 0;
    }

    for (let word of textWords) {
        if (wordCounts.hasOwnProperty(word)) {
            wordCounts[word]++;
        }
    }
    let sorted = Object.entries(wordCounts).sort((a, b) => b[1] - a[1]);

    for (let [word, count] of sorted) {
        console.log(`${word} - ${count}`);
    }
}
