function stringGame(input) {
    let string = String(input.shift());
    
    
    for (let line of input) {
        let [command, ...args] = line.split(' ');

        if (command === 'Done') {
            break;
        }

        switch (command) {
            case 'Change':
                let [char, replacement] = [...args];
                let regex = new RegExp(char, "g");
                    string = string.replace(regex, replacement);
                    console.log(string);
                break;
            
            case 'Includes':
                let substring = args[0];

                if (string.includes(substring)) {
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;

            case 'End':
                let substr = args[0];

                if (string.endsWith(substr)) {
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;

            case 'Uppercase':
                let upperString = string.toUpperCase();
                console.log(upperString);
                string = upperString;
                break;

            case 'FindIndex':
                let character = args[0];
                let splittedString = string.split('');
                if (splittedString.includes(character)) {
                    let index = splittedString.indexOf(character);
                    console.log(index);
                }
                break;

            case 'Cut':
                let startIndex = Number(args[0]);
                let count = Number(args[1]);
                let cutString = string.substring(startIndex, startIndex + count);
                string = cutString;
                console.log(string);
        }
    }
}

//stringGame(["//Th1s 1s my str1ng!//",
//"Change 1 i",
//"Includes string",
//"End my",
//"Uppercase",
//"FindIndex I",
//"Cut 5 5",
//"Done"]);
