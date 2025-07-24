//solve #1
function pirates(inputArr) {
    let sailCommand = inputArr.indexOf('Sail');
    let citiesLine = inputArr.splice(0, sailCommand + 1);

    let citiesMap = new Map();

    for (let line of citiesLine) {
        if (line !== 'Sail') {
            let [city, population, gold] = line.split('||');

            if (!citiesMap.has(city)) {
                citiesMap.set(city, { population: Number(population), gold: Number(gold) });
            } else {
                let existingCity = citiesMap.get(city);
                existingCity.population += Number(population);
                existingCity.gold += Number(gold);
            }
        }
    }

    let events = inputArr;
    for (let event of events) {
        let currentEvent = event.split('=>');
        let command = currentEvent.shift();
        let town = currentEvent[0];

        if (command === 'End') {
            break;
        }

        if (command === 'Plunder') {
            if (citiesMap.has(town)) {
                let [_, people, gold] = currentEvent;
                let targetedTown = citiesMap.get(town);

                targetedTown.population -= Number(people);
                targetedTown.gold -= Number(gold);

                console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);

                if (targetedTown.population <= 0 || targetedTown.gold <= 0) {
                    citiesMap.delete(town);
                    console.log(`${town} has been wiped off the map!`);
                }
            }
        } else if (command === 'Prosper') {
            let gold = Number(currentEvent[1]);

            if (citiesMap.has(town)) {
                let currentTown = citiesMap.get(town);
                if (gold < 0) {
                    console.log('Gold added cannot be a negative number!');
                    continue;
                } else {
                    currentTown.gold += gold;
                    console.log(`${gold} gold added to the city treasury. ${town} now has ${currentTown.gold} gold.`);
                }
            }
        }
    }

    if (citiesMap.size > 0) {
        console.log(`Ahoy, Captain! There are ${citiesMap.size} wealthy settlements to go to:`);
        for (let [city, data] of citiesMap.entries()) {
            console.log(`${city} -> Population: ${data.population} citizens, Gold: ${data.gold} kg`);
        }
    } else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }
}

//pirates(["Nassau||95000||1000",

//"San Juan||930000||1250",

//"Campeche||270000||690",

//"Port Royal||320000||1000",

//"Port Royal||100000||2000",

//"Sail",

//"Prosper=>Port Royal=>-200",

//"Plunder=>Nassau=>94000=>750",

//"Plunder=>Nassau=>1000=>150",

//"Plunder=>Campeche=>150000=>690",

//"End"]);

//solve #2
function pirates(input) {
    const cities = new Map();

    while (input[0] !== "Sail") {
        let [town, population, gold] = input.shift().split("||");
        population = Number(population);
        gold = Number(gold);

        if (!cities.has(town)) {
            cities.set(town, { population, gold });
        } else {
            let city = cities.get(town);
            city.population += population;
            city.gold += gold;
        }
    }

    input.shift(); 

    while (input[0] !== "End") {
        const tokens = input.shift().split("=>");
        const command = tokens[0];
        const town = tokens[1];

        if (command === "Plunder") {
            const people = Number(tokens[2]);
            const gold = Number(tokens[3]);

            const city = cities.get(town);
            city.population -= people;
            city.gold -= gold;

            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);

            if (city.population <= 0 || city.gold <= 0) {
                cities.delete(town);
                console.log(`${town} has been wiped off the map!`);
            }
        }

        else if (command === "Prosper") {
            const gold = Number(tokens[2]);
            if (gold < 0) {
                console.log("Gold added cannot be a negative number!");
            } else {
                const city = cities.get(town);
                city.gold += gold;
                console.log(`${gold} gold added to the city treasury. ${town} now has ${city.gold} gold.`);
            }
        }
    }

    if (cities.size > 0) {
        console.log(`Ahoy, Captain! There are ${cities.size} wealthy settlements to go to:`);
        for (let [town, data] of cities) {
            console.log(`${town} -> Population: ${data.population} citizens, Gold: ${data.gold} kg`);
        }
    } else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }
}
