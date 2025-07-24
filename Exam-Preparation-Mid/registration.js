function registration(inputArr) {
    let slicedArr = inputArr.slice();
    let originalName = slicedArr.shift();

    for (let i = 0; i < slicedArr.length; i++) {
        let parts = slicedArr[i].split(' ');
        let command = parts[0];

        if (command === "Registration") {
            break;
        }

        let firstValue = parts[1];
        let secondValue = parts[2];

        switch (command) {
            case 'Letters':
                if (firstValue === 'Lower') {
                    originalName = originalName.toLowerCase();
                    console.log(originalName);
                } else if (firstValue === 'Upper') {
                    originalName = originalName.toUpperCase();
                    console.log(originalName);
                }
                break;

            case 'Substring':
                if (originalName.includes(firstValue)) {
                    originalName = originalName.replace(firstValue, '');
                    console.log(originalName);
                } else {
                    console.log(`The username ${originalName} doesn't contain ${firstValue}.`);
                }
                break;

            case 'Reverse':
                let startIndex = Number(firstValue);
                let endIndex = Number(secondValue);

                if (
                    startIndex >= 0 &&
                    endIndex < originalName.length &&
                    startIndex <= endIndex
                ) {
                    let substring = originalName.substring(startIndex, endIndex + 1);
                    let reversed = substring.split('').reverse().join('');
                    console.log(reversed);
                }
                break;

            case 'Replace':
                let charToReplace = firstValue;
                while (originalName.includes(charToReplace)) {
                    originalName = originalName.replace(charToReplace, '-');
                }
                console.log(originalName);
                break;

            case 'IsValid':
                if (originalName.includes(firstValue)) {
                    console.log('Valid username.');
                } else {
                    console.log(`${firstValue} must be contained in your username.`);
                }
                break;

            default:
                console.log('Invalid command');
                break;
        }
    }
}

//registration(["John",
//"Letters Lower",
//"Substring SA",
//"IsValid @",
//"Registration"
//]);
//registration(["ThisIsSoftUni",
//"Reverse 1 3",
//"Replace S",
//"Substring hi",
//"Registration"
//]);
