//solve #1
function race(input) {
    let nameList = input.shift().split(', ');
    let nameMap = new Map();
    let namePattern = /[A-Za-z]/g; 
    let digitPattern = /\d/g;

    for (let line of input) {
        if (line === 'end of race') break;

        let matchName = line.match(namePattern);
        let matchDigit = line.match(digitPattern);

        let name = matchName ? matchName.join('') : '';
        let distance = matchDigit ? matchDigit.map(Number).reduce((a, b) => a + b, 0) : 0;

        if (nameList.includes(name)) {
            if (!nameMap.has(name)) {
                nameMap.set(name, 0);
            }
            nameMap.set(name, nameMap.get(name) + distance);
        }
    }
    let sorted = [...nameMap.entries()].sort((a, b) => b[1] - a[1]);
    let [[first],[second],[third]] = sorted;

    console.log(`1st place: ${first}`);
    console.log(`2nd place: ${second}`);
    console.log(`3rd place: ${third}`);
}

//race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',

//'Mi*&^%$ch123o!#$%#nne787) ',

//'%$$B(*&&)i89ll)*&) ',

//'R**(on%^&ald992) ',

//'T(*^^%immy77) ',

//'Ma10**$#g0g0g0i0e',

//'end of race']);


//solve #2
function race(input) {
    let participants = input.shift().split(', ');
    let distances = {};
    let nameRegex = /[A-Za-z]/g;
    let digitRegex = /\d/g;

    for (let line of input) {
        if (line === 'end of race') break;
        let nameMatch = line.match(nameRegex);
        let digitMatch = line.match(digitRegex);

        if (!nameMatch || !digitMatch) continue;

        let name = nameMatch.join('');
        let distance = digitMatch.map(Number).reduce((a, b) => a + b, 0);

        if (participants.includes(name)) {
            if (!distances[name]) {
                distances[name] = 0;
            }
            distances[name] += distance;
        }
    }

    let sorted = Object.entries(distances)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3);

    let places = [`1st`, `2nd`, `3rd`];
    sorted.forEach(([name], index) => {
        console.log(`${places[index]} place: ${name}`);
    });
}
