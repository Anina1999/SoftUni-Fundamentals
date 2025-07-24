function processTravels(input) {
    let mapTravels = new Map();

    for (let line of input) {
        let [countryName, townName, travelCost] = line.split(' > ');
        travelCost = Number(travelCost);
        if (!mapTravels.has(countryName)) {
            mapTravels.set(countryName, new Map());
        }

        let towns = mapTravels.get(countryName);
        if (!towns.has(townName)) {
            towns.set(townName, travelCost);
        } else {
            let existingCost = towns.get(townName);
            if (travelCost < existingCost) {
                towns.set(townName, travelCost);
            }
        }
    }

    let sortedTravels = [...mapTravels.entries()]
        .sort((a, b) => a[0].localeCompare(b[0]));

    for (let [countryName, towns] of sortedTravels) {
        let sortedTowns = [...towns.entries()]
            .sort((a, b) => a[1] - b[1]);

        let result = [`${countryName} ->`];

        for (let [townName, travelCost] of sortedTowns) {
            result.push(`${townName} -> ${travelCost}`);
        }
        console.log(result.join(' '));
    }
}

//processTravels([

//"Bulgaria > Sofia > 500",

//"Bulgaria > Sopot > 800",

//"France > Paris > 2000",

//"Albania > Tirana > 1000",

//"Bulgaria > Sofia > 200"

//]);
