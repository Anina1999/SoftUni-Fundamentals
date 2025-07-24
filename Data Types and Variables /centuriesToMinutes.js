function centuriesToMinutes(numOfCenturies) {
    let years = numOfCenturies * 100;
    let days = Math.trunc(years * 365.2422);
    let hours = days * 24;
    let minutes = hours * 60;

    console.log(`${numOfCenturies} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
}

//centuriesToMinutes(1);
