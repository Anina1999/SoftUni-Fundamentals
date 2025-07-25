//solve #1
function needForSpeed(input) {
    let numberOfCars = Number(input[0]);
    let carMap = new Map();

    for (let i = 1; i <= numberOfCars; i++) {
        let [car, mileage, fuel] = input[i].split('|');
        mileage = Number(mileage);
        fuel = Number(fuel);
        carMap.set(car, { mileage: mileage, fuel: fuel });
    }

    let commandArr = input.slice(numberOfCars + 1);

    for (let line of commandArr) {
        let currentLine = line.split(' : ');
        let command = currentLine[0];

        if (command === 'Stop') {
            for (let [car, info] of carMap.entries()) {
                console.log(`${car} -> Mileage: ${info.mileage} kms, Fuel in the tank: ${info.fuel} lt.`);
            }
            break;
        }

        if (command === 'Drive') {
            let [_, car, distance, fuel] = currentLine;
            distance = Number(distance);
            fuel = Number(fuel);
            let carData = carMap.get(car);

            if (carData.fuel < fuel) {
                console.log('Not enough fuel to make that ride');
            } else {
                carData.mileage += distance;
                carData.fuel -= fuel;
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);

                if (carData.mileage >= 100000) {
                    carMap.delete(car);
                    console.log(`Time to sell the ${car}!`);
                }
            }

        } else if (command === 'Refuel') {
            let [_, car, fuel] = currentLine;
            fuel = Number(fuel);
            let carData = carMap.get(car);
            let refueled = Math.min(75 - carData.fuel, fuel);
            carData.fuel += refueled;
            console.log(`${car} refueled with ${refueled} liters`);

        } else if (command === 'Revert') {
            let [_, car, kilometers] = currentLine;
            kilometers = Number(kilometers);
            let carData = carMap.get(car);
            carData.mileage -= kilometers;

            if (carData.mileage < 10000) {
                carData.mileage = 10000;
            } else {
                console.log(`${car} mileage decreased by ${kilometers} kilometers`);
            }
        }
    }
}

//needForSpeed([

//'3',

//'Audi A6|38000|62',

//'Mercedes CLS|11000|35',

//'Volkswagen Passat CC|45678|5',

//'Drive : Audi A6 : 543 : 47',

//'Drive : Mercedes CLS : 94 : 11',

//'Drive : Volkswagen Passat CC : 69 : 8',

//'Refuel : Audi A6 : 50',

//'Revert : Mercedes CLS : 500',

//'Revert : Audi A6 : 30000',

//'Stop'

//]);


//solve #2
function needForSpeed(input) {
    let n = Number(input.shift());
    let cars = {};
    for (let i = 0; i < n; i++) {
        let [car, mileage, fuel] = input[i].split('|');
        cars[car] = {
            mileage: Number(mileage),
            fuel: Number(fuel)
        }
    }
    input = input.slice(n);

    for (let line of input) {
        if (line === 'Stop') break;

        let [command, car, param1, param2] = line.split(' : ');

        switch (command) {
            case 'Drive':
                let distance = Number(param1);
                let fuelNeeded = Number(param2);

                if (cars[car].fuel < fuelNeeded) {
                    console.log('Not enough fuel to make that ride');
                } else {
                    cars[car].mileage += distance;
                    cars[car].fuel -= fuelNeeded;
                    console.log(`${car} driven for ${distance} kilometers. ${fuelNeeded} liters of fuel consumed.`)
                    
                    if (cars[car].mileage >= 100000) {
                        delete cars[car];
                        console.log(`Time to sell the ${car}!`);
                    }
                }
                break;

            case 'Refuel':
                let fuelToAdd = Number(param1);
                let currentFuel = cars[car].fuel;
                let addedFuel = Math.min(75 - currentFuel, fuelToAdd);
                cars[car].fuel += addedFuel;
                console.log(`${car} refueled with ${addedFuel} liter`);
                break;

            case 'Revert':
                let kilometers = Number(param1);
                cars[car].mileage -= kilometers;
                if (cars[car].mileage < 10000) {
                    cars[car].mileage = 10000;
                } else {
                    console.log(`${car} mileage decreased by ${kilometers} kilometers`);
                }
        }
    }
    for (let car in cars) {
        console.log(`${car} -> Mileage: ${cars[car].mileage} kms, Fuel in the tank: ${cars[car].fuel} lt.`);
    }
}
