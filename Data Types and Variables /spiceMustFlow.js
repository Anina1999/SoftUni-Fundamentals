function spiceMustFlow(startingYield) {
    let daysCount = 0;
    let totalAmountOfSpiceExtracted = 0;
    let minningCrewEveryDayConsumation = 26;
    let minningCrewAdditionalConsumation = 26;

    while (startingYield >= 100) {
        totalAmountOfSpiceExtracted += startingYield;
        totalAmountOfSpiceExtracted -= minningCrewEveryDayConsumation;
        startingYield -= 10;
        daysCount++;
    }

    if (totalAmountOfSpiceExtracted >= minningCrewAdditionalConsumation) {
        totalAmountOfSpiceExtracted -= minningCrewAdditionalConsumation;
    }

    console.log(daysCount);
    console.log(totalAmountOfSpiceExtracted);
}

//spiceMustFlow(111);
//spiceMustFlow(450);
