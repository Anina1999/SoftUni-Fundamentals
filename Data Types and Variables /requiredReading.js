function requiredReading(numberOfPages, PagesReadForOneHour, DaysNeededToRead) {
    let hoursNeeded = numberOfPages / PagesReadForOneHour;

    let hoursPerDay = hoursNeeded / DaysNeededToRead;

    console.log(hoursPerDay);
}

//requiredReading(212, 20 , 2);
