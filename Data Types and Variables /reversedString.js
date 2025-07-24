function reversedString(param) {
    let result = ''

    for (let i = param.length - 1; i >=0; i--) {
        result += param[i];
    }
    console.log(result);
}

//reversedString('Information');
//reversedString('star');
//reversedString('racecar');
