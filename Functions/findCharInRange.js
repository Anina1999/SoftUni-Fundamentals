function findCharInRange(charOne, charTwo) {
    function getAsciiCodes(start, stop) {
        return [start.charCodeAt(0), stop.charCodeAt(0)];
    }

    function swipeTwoNumbers(x, y) {
        if (x > y) {
            return [y, x];
        }
        return [x, y];
    }

    function generateCharsBetween(startChar, stopChar) {
        let array = [];
        for (let i = startChar + 1; i < stopChar; i++) {
            array.push(String.fromCharCode(i));
        }
        return array;
    }

    let asciiCodes = getAsciiCodes(charOne, charTwo);
    let swappedCodes = swipeTwoNumbers(asciiCodes[0], asciiCodes[1]);
    let result = generateCharsBetween(swappedCodes[0], swappedCodes[1]);

    console.log(result.join(' '));
}

//findCharInRange('a', 'd');
