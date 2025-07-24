function hardWords(input) {
    let letter = input[0];
    let words = input[1];

    let letterArr = letter.split(' ');
    let object = {};

    for (let word of words) {
        let changeToElement = '_'.repeat(word.length);
        object[word] = changeToElement;
    }

    for (let i = 0; i < letterArr.length; i++) {
        let w = letterArr[i];
        let punctuation = '';
        let coreWord = w;

        let lastChar = w[w.length - 1];
        let punctuationMarks = ['.', ',', '!', '?'];

        if (punctuationMarks.includes(lastChar)) {
            punctuation = lastChar;
            coreWord = w.slice(0, -1);
        }

        if (coreWord.includes('_')) {
            for (let key in object) {
                if (object[key] === coreWord) {
                    letterArr[i] = key + punctuation;
                    delete object[key];
                    break;
                }
            }
        }
    }

    console.log(letterArr.join(' '));
}

//hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
//['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']] );
