function digitsWithWords(wordOfDigit) {
    let number = 0;

    if (wordOfDigit == 'zero') {
        number = 0;
    } else if (wordOfDigit == 'one') {
        number = 1;
    } else if (wordOfDigit == 'two') {
        number = 2;
    } else if (wordOfDigit == 'three') {
        number = 3;
    } else if (wordOfDigit == 'four') {
        number = 4;
    } else if (wordOfDigit == 'five') {
        number = 5;
    } else if (wordOfDigit == 'six') {
        number = 6;
    } else if (wordOfDigit == 'seven') {
        number = 7;
    } else if (wordOfDigit == 'eight') {
        number = 8;
    } else if (wordOfDigit == 'nine') {
        number = 9;
    } else {
        console.log("Invalid input");
    }

    console.log(number);
}

//digitsWithWords('nine');
digitsWithWords('two');
