function nextDay(year, month, day) {
    day += 1;

    let daysInMonth;

    if (month === 1 || month === 3 || month === 5 || month === 7 || 
        month === 8 || month === 10 || month === 12) {
        daysInMonth = 31;
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        daysInMonth = 30;
    } else if (month === 2) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            daysInMonth = 29;
        } else {
            daysInMonth = 28;
        }
    }

    if (day > daysInMonth) {
        day = 1;
        month += 1;
    }

    if (month > 12) {
        month = 1;
        year += 1;
    }

    console.log(year + '-' + month + '-' + day);
}

//nextDay(2016, 9, 30);

function nextDay(year, month, day) {
    let date = new Date(year, month - 1, day); 
    date.setDate(date.getDate() + 1); 

    let newYear = date.getFullYear();
    let newMonth = date.getMonth() + 1; 
    let newDay = date.getDate();

    console.log(`${newYear}-${newMonth}-${newDay}`);
}

//nextDay(2016, 9, 30);
