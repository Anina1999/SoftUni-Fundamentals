function train(arr) {
    let wagons = arr
        .shift()
        .split(' ')
        .map(Number);

    let maxCapacity = Number(arr.shift());

    arr.forEach(command => {
        if (command.startsWith('Add')) {
            let passengersToAdd = Number(command.split(' ')[1]);
            wagons.push(passengersToAdd);
        } else {
            let passengersToAdd = Number(command);
            for (let i = 0; i < wagons.length; i++) {
                if (wagons[i] + passengersToAdd <= maxCapacity) {
                    wagons[i] += passengersToAdd;
                    break;
                }
            }
        }
    })
    console.log(wagons.join(' '));
}

//train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);

//train(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6']);
