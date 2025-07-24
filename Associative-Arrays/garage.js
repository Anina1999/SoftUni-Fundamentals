function garage(arr) {
    let mapGarage = new Map();
    let numberSet = new Set();

    for (let line of arr) {
        let [number, ...info] = line.split(' - ');
        number = Number(number);
        numberSet.add(number);

        let carInfo = info.join(' - ').split(', ')
            .map(e => e.split(': ').join(' - '))
            .join(', ');

        if (!mapGarage.has(number)) {
            mapGarage.set(number, []);
        }

        mapGarage.get(number).push(carInfo);
    }

    for (let garageNumber of numberSet) {
        console.log(`Garage № ${garageNumber}`);
        
        let cars = mapGarage.get(garageNumber);
        
        if (cars.length > 0) {
            
            for (let i = 0; i < cars.length; i++) {
                console.log(`--- ${cars[i]}`);
            }
        }
    }
}

//garage(['1 - color: blue, fuel type: diesel', 
//        '1 - color: red, manufacture: Audi',
//        '2 - fuel type: petrol', 
//        '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);
