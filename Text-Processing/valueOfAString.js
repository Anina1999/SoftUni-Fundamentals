function valueOfAString(arr) {
    let [stringArray, comm] = arr;

    function getOnlyUpperLetters(stringArr, comm) {
        let takeOnlyUpperLetters = [];
        if (comm === 'UPPERCASE') {
            for (let char of stringArr) {
                if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
                    takeOnlyUpperLetters.push(char);
                }
            }
        }
        return takeOnlyUpperLetters;
    }

    function getOnlyLowerLetters(stringArr, comm) {
        let takeOnlyLowerLetters = [];
        if (comm === 'LOWERCASE') {
            for (let char of stringArr) {
                if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
                    takeOnlyLowerLetters.push(char);
                }
            }
        }
        return takeOnlyLowerLetters;
    }

    function getCommand(comm) {
        if (comm === 'UPPERCASE') {
            return getOnlyUpperLetters(stringArray, comm);
        } else if (comm === 'LOWERCASE') {
            return getOnlyLowerLetters(stringArray, comm);
        } else {
            return [];
        }
    }

    function sumValueOfString(filteredChars) {
        let sum = 0;
        for (let char of filteredChars) {
            sum += char.charCodeAt(0);
        }
        console.log(`The total sum is: ${sum}`);
    }

    let currentCommand = getCommand(comm);
    sumValueOfString(currentCommand);
}

//valueOfAString(['AC/DC',

//'UPPERCASE']);
