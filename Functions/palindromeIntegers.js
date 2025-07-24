function palindromeIntegers(arr) {

    function checkIfPalindrome(chars) {
        for (let i = 0; i < chars.length / 2; i++) {
            if (chars[i] !== chars[chars.length - 1 - i]) {
                return false;
            }
        }
        return true;
    }

    for (let i = 0; i < arr.length; i++) {
        let numAsString = arr[i].toString();
        let digitsArr = numAsString.split('');

        if (checkIfPalindrome(digitsArr)) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

//palindromeIntegers([32,2,232,1010]);
