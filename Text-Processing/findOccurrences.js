function findOccurrences(text, word) {
    let replacementLength = word.length;
    let replacement = '*'.repeat(replacementLength);
    let result = text.replaceAll(word, replacement);

    //while (text.includes(word)) {
    //    text = text.replaceAll(word, replacement);
    //}

    console.log(result);
}

//findOccurrences('A small sentence with some words',

//'small');
