//solve #1
function recordParking(arr) {
    let parking = {};

    for (let entry of arr) {
        let [direction, carNumber] = entry.split(', ');

        if (direction === 'IN') {
            parking[carNumber] = true;
        } else if (direction === 'OUT') {
            delete parking[carNumber];
        }
    }

    let carsInParking = Object.keys(parking);

    if (carsInParking.length === 0) {
        console.log("Parking Lot is Empty");
    } else {
        carsInParking.sort((a, b) => a.localeCompare(b));
        for (let car of carsInParking) {
            console.log(car);
        }
    }
}

//recordParking(['IN, CA2844AA',

//'IN, CA1234TA',

//'OUT, CA2844AA',

//'IN, CA9999TT',

//'IN, CA2866HI',

//'OUT, CA1234TA',

//'IN, CA2844AA',

//'OUT, CA2866HI',

//'IN, CA9876HH',

//'IN, CA2822UU']);

//solve #2
function piccolo(arr) {
    let parkingLot = new Set();

    for (let log of arr) {
        let [direction, carNumber] = log.split(', ');
        if (direction === 'IN') {
            parkingLot.add(carNumber);
        } else if (direction === 'OUT') {
            parkingLot.delete(carNumber);
        }
    }

    if (parkingLot.size === 0) {
        console.log('Parking Lot is Empty');
    } else {
        //let sorted = Array.from(parkingLot).sort((a, b) => a.localeCompare(b));
        let sorted = [...parkingLot].sort();
        for (let car of sorted) {
            console.log(car);
        }
    }
}
