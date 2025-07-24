function convertDistance(meters) {
    let metersToKilometers = meters / 1000;
    let kilometersToMiles = metersToKilometers * 0.621371;

    console.log(`${meters} meters is equal to ${metersToKilometers} kilometers.`);
    console.log(`${metersToKilometers} kilometers is equal to ${kilometersToMiles.toFixed(2)} miles.`);
}

//convertDistance(1852);
//convertDistance(798);
