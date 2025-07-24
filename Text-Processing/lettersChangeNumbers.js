function lettersChangeNumbers(string) {
    let arr = string.split(' ').filter(e => e !== '');
    let totalSum = 0;

    function getAlphabetPosition(letter) {
        let code = letter.charCodeAt(0);
        if (letter >= 'A' && letter <= 'Z') {
            return code - 64;
        } else if (letter >= 'a' && letter <= 'z') {
            return code - 96;
        }
        return 0;
    }

    function solveNumber(arr) {
        let resultMap = new Map();

        for (let i = 0; i < arr.length; i++) {
            let current = arr[i];
            let index = current.charAt(0); 
            let lastChar = current.charAt(current.length - 1); 
            let number = Number(current.slice(1, -1)); 

            let letter = getAlphabetPosition(index);
            let operation = 0;

            if (index >= 'A' && index <= 'Z') {
                operation = number / letter;
            } else if (index >= 'a' && index <= 'z') {
                operation = number * letter;
            }

            let lastLetterPos = getAlphabetPosition(lastChar);

            if (lastChar >= 'A' && lastChar <= 'Z') {
                operation -= lastLetterPos;
            } else if (lastChar >= 'a' && lastChar <= 'z') {
                operation += lastLetterPos;
            }

            resultMap.set(i, operation);
        }

        return resultMap;
    }

    let resultMap = solveNumber(arr);

    for (let num of resultMap.values()) {
        totalSum += num;
    }

    console.log(totalSum.toFixed(2));
}

//lettersChangeNumbers('P34562Z q2576f H456z');
