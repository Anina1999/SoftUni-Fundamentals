function worldTour(inputArr) {
    let stops = inputArr.shift();

    for (let command of inputArr) {
        if (command === 'Travel') {
            console.log(`Ready for world tour! Planned stops: ${stops}`);
            break;
        }

        let commandsSplit = command.split(':');

        if (commandsSplit[0] === 'Add Stop') {
            let index = Number(commandsSplit[1]);
            let stringToAdd = commandsSplit[2];
            if (index >= 0 && index <= stops.length) {
                stops = stops.slice(0, index) + stringToAdd + stops.slice(index);
            }
            console.log(stops);

        } else if (commandsSplit[0] === 'Remove Stop') {
            let firstIndex = Number(commandsSplit[1]);
            let secondIndex = Number(commandsSplit[2]);
            if (
                firstIndex >= 0 && firstIndex <= stops.length - 1 &&
                secondIndex >= 0 && secondIndex <= stops.length - 1 &&
                firstIndex <= secondIndex
            ) {
                stops = stops.slice(0, firstIndex) + stops.slice(secondIndex + 1);
            }
            console.log(stops);

        } else if (commandsSplit[0] === 'Switch') {
            let stopToFind = commandsSplit[1];
            let replaceStop = commandsSplit[2];

            if (stops.includes(stopToFind)) {
                stops = stops.split(stopToFind).join(replaceStop);
            }
            console.log(stops);
        }
    }
}

//worldTour(["Hawai::Cyprys-Greece",
//"Add Stop:7:Rome",
//"Remove Stop:11:16",
//"Switch:Hawai:Bulgaria",
//"Travel"]);
