function validatePassword(password) {
    let isValid = true;

    function checkLength(pass) {
        return pass.length >= 6 && pass.length <= 10;
    }

    function checkIfOnlyLettersAndDigits(pass) {
        for (let i = 0; i < pass.length; i++) {
            let code = pass.charCodeAt(i);

            if (!((code >= 48 && code <= 57) || 
                (code >= 65 && code <= 90) || 
                (code >= 97 && code <= 122))) {
                return false;
            }
        }
        return true;
    }

    function checkAtLeastTwoDigits(pass) {
        let digitCount = 0;
        for (let i = 0; i < pass.length; i++) {
            let code = pass.charCodeAt(i);
            if (code >= 48 && code <= 57) {
                digitCount++;
            }
        }
        return digitCount >= 2;
    }

    if (!checkLength(password)) {
        console.log("Password must be between 6 and 10 characters");
        isValid = false;
    }
    if (!checkIfOnlyLettersAndDigits(password)) {
        console.log("Password must consist only of letters and digits");
        isValid = false;
    }
    if (!checkAtLeastTwoDigits(password)) {
        console.log("Password must have at least 2 digits");
        isValid = false;
    }

    if (isValid) {
        console.log("Password is valid");
    }
}

//validatePassword('logIn');
