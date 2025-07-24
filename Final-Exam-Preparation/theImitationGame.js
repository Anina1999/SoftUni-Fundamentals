function theImitationGame(arr) {
    let encryptedMessage = arr.shift();

    for (let line of arr) {
        let currentLine = line.split('|');
        let command = currentLine[0];
        if (command === 'Decode') {
            console.log(`The decrypted message is: ${encryptedMessage}`);
            break;
        }

        if (command === 'Move') {
            let [_, numberOfLetters] = currentLine;
            let lettersToMove = encryptedMessage.substring(0, numberOfLetters);
            encryptedMessage = encryptedMessage.substring(numberOfLetters) + lettersToMove;

        } else if (command === 'Insert') {
            let [_, index, value] = currentLine;
            index = Number(index);
            if (index < 0) {
            index = 0;
            } else if (index > encryptedMessage.length) {
            index = encryptedMessage.length;
            }
            encryptedMessage = encryptedMessage.slice(0, index) + value + encryptedMessage.slice(index);

        } else if (command === 'ChangeAll') {
            let [_, substr, replacement] = currentLine;
           // encryptedMessage = encryptedMessage.split(substr).join(replacement);

           while (encryptedMessage.indexOf(substr) >= 0) {
            encryptedMessage = encryptedMessage.replace(substr, replacement);
           }
        }
    }
}

//theImitationGame([

//'owyouh',

//'Move|2',

//'Move|3',

//'Insert|3|are',

//'Insert|9|?',

//'Decode']);
