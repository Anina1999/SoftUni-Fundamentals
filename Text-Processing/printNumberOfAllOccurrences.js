function printNumberOfAllOccurrences(text, searchWord) {
    text = text.replaceAll(',', ' ');
    text = text.replaceAll('.', ' ');
    text = text.replaceAll('!', ' ');
    text = text.replaceAll('?', ' ');
    text = text.replaceAll(':', ' ');
    text = text.replaceAll(';', ' ');

    let allWords = text.split(' ');

    let count = 0;

    for (let word of allWords) {
        if (word === searchWord) {
            count++;
        }
    }

    console.log(count);
}

//printNumberOfAllOccurrences('This is a word and it also is a sentence',

//'is');
