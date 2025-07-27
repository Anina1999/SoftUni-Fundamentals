//solve #1 (includes nested function and reduce for reverse string)
function concealAndRevealMessages(inputArr) {
    let message = String(inputArr.shift());

    function reverseSubstring(sub) {
        return Array.from(sub).reduce((reversed, char) => char + reversed, '');
    }
    
    while (inputArr.length > 0) {
        let currentLine = inputArr.shift().split(':|:');

        if (currentLine[0] === 'Reveal') {
            console.log(`You have a new text message: ${message}`);
            break;
        }

        let command = currentLine[0];

        switch (command) {
            case 'InsertSpace':
                let index = Number(currentLine[1]);
                message = message.slice(0, index) + ' ' + message.slice(index);
                console.log(message);
                break;

            case 'Reverse':
                let substring = currentLine[1];
                if (message.includes(substring)) {
                    message = message.replace(substring, '');
                    let reversedSubstring = reverseSubstring(substring);
                    message += reversedSubstring;
                    console.log(message);
                } else {
                    console.log('error');
                }
                break;

            case 'ChangeAll':
                let substr = currentLine[1];
                let replacement = currentLine[2];
                let regex = new RegExp(substr, 'g');
                message = message.replace(regex, replacement);
                console.log(message);
                break;
        }
    }
}

//concealAndRevealMessages(['Hiware?uiy',
//'ChangeAll:|:i:|:o',
//'Reverse:|:?uoy',
//'Reverse:|:jd',
//'InsertSpace:|:3',
//'InsertSpace:|:7',
//'Reveal'
//]);


//solve #2 (straight solve)
function concealAndRevealMessages(inputArr) {
    let message = String(inputArr.shift());

    while (inputArr.length > 0) {
        let line = inputArr.shift();

        if (line === 'Reveal') {
            console.log(`You have a new text message: ${message}`);
            break;
        }

        let [command, arg1, arg2] = line.split(':|:');

        switch (command) {
            case 'InsertSpace':
                let index = Number(arg1);
                message = message.slice(0, index) + ' ' + message.slice(index);
                console.log(message);
                break;

            case 'Reverse':
                let substring = arg1;
                if (message.includes(substring)) {
                    message = message.replace(substring, '');
                    let reversed = substring.split('').reverse().join('');
                    message += reversed;
                    console.log(message);
                } else {
                    console.log('error');
                }
                break;

            case 'ChangeAll':
                let substr = arg1;
                let replacement = arg2;
                let regex = new RegExp(substr, 'g');
                message = message.replace(regex, replacement);
                console.log(message);
                break;
        }
    }
}
