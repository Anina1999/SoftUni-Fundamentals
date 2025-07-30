//solve #1 
function filterValidDestinations(input) {
    let text = input[0];

    let pattern = /([=\/])([A-Z][a-zA-Z]{2,})\1/g;

    let destinations = [];
    let travelPoints = 0;

    let match;

    while ((match = pattern.exec(text)) !== null) {
        let destination = match[2];
        destinations.push(destination);
        travelPoints += destination.length;
    }

    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}

//filterValidDestinations(['=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=']);


//solve #2
function filterValidDestinations(input) {
    let pattern = /([=/])(?<location>[A-Z][a-zA-Z]{3,})\1/g;
    let text = input[0];
    let matches = text.matchAll(pattern);
    
    let destination = [];
    let travelPoints = 0;
    for (let match of matches) {
        if (match) {
            let location = match.groups['location'];
            let length = location.length;
            travelPoints += length;
            destination.push(location);
        }
    }
    console.log(`Destinations: ${destination.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}
