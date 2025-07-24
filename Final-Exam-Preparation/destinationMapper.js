function destinationMapper(input) {
    let pattern = /([=\/])([A-Z][a-zA-Z]{2,})\1/g;
    let cleanLocationPattern = /[A-Z][a-zA-Z]+/g;
    let result = '';
    let match = input.match(pattern);

    if (match) {
        for (let matches of match) {
            result += matches;
        }
    }

    let locationMatch = result.match(cleanLocationPattern);
    let finalLocations = [];

    if (locationMatch) {
        for (let location of locationMatch) {
            finalLocations.push(location);
        }
    }
    let joinedLocations = finalLocations.join(', ');
    let travelPoints = finalLocations.reduce((sum, loc) => sum + loc.length, 0);

    console.log(`Destinations: ${joinedLocations}`);
    console.log(`Travel Points: ${travelPoints}`);
}

//destinationMapper(("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i="));
