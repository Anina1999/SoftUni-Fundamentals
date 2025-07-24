function leapYear(year) {
    //logic
    let result = 'notLeap'
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        result === year;
        console.log('yes');
    } else {
        console.log('no');
    }
}

//leapYear(1900);
