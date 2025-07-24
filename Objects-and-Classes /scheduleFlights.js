function scheduleFlights(inputArr) {
    let firstArr = inputArr[0];  
    let secondArr = inputArr[1]; 
    let thirdArr = inputArr[2]; 

    let objectFlight = {};

    for (let line of firstArr) {
        let parts = line.split(' ');
        let flightCode = parts[0];
        let destination = parts.slice(1).join(' ');
        objectFlight[flightCode] = {
            Destination: destination,
            Status: 'Ready to fly'
        };
    }
    for (let line of secondArr) {
        let parts = line.split(' ');
        let flightCode = parts[0];
        let newStatus = parts[1];

        if (objectFlight.hasOwnProperty(flightCode)) {
            objectFlight[flightCode].Status = newStatus;
        }
    }

    let statusToCheck = thirdArr[0];

    for (let code in objectFlight) {
        let flight = objectFlight[code];
        if (flight.Status === statusToCheck) {
            console.log(`{ Destination: '${flight.Destination}', Status: '${flight.Status}' }`);
        }
    }
}

//scheduleFlights([['WN269 Delaware',

//'FL2269 Oregon',

//'WN498 Las Vegas',

//'WN3145 Ohio',

//'WN612 Alabama',

//'WN4010 New York',

//'WN1173 California',

//'DL2120 Texas',

//'KL5744 Illinois',

//'WN678 Pennsylvania'],

//['DL2120 Cancelled',

//'WN612 Cancelled',

//'WN1173 Cancelled',

//'SK430 Cancelled'],

//['Cancelled']]);
