function mirrorWords(input) {
    let text = String(input.slice());
    let pattern = /([#@])(?<word>[A-Za-z]{3,})\1\1(?<mirrorWord>[A-Za-z]{3,})\1/g;
    
    let wordPairs = [];
    let mirrorWords = [];
    let match;

    while ((match = pattern.exec(text)) !== null) {
        let word = match.groups['word'];
        let mirrorWord = match.groups['mirrorWord'];
        wordPairs.push([word, mirrorWord]);

        if (word === mirrorWord.split('').reverse().join('')) {
            mirrorWords.push(`${word} <=> ${mirrorWord}`);
        }
    }

    if (wordPairs.length === 0) {
        console.log("No word pairs found!");
    } else {
        console.log(`${wordPairs.length} word pairs found!`);
    }

    if (mirrorWords.length === 0) {
        console.log("No mirror words!");
    } else {
        console.log("The mirror words are:");
        console.log(mirrorWords.join(', '));
    }
}

//mirrorWords([
//'@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
//]);
