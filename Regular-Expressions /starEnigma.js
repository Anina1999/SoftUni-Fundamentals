function starEnigma(input) {
    let countOfMessages = Number(input.shift());
    let attackedPlanets = [];
    let destroyedPlanets = [];

    for (let message of input) {
        let matches = message.match(/[starSTAR]/g);
        let starCount = matches ? matches.length : 0;

        let decrypted = '';

        for (let ch of message) {
            decrypted += String.fromCharCode(ch.charCodeAt(0) - starCount);
        }

        let regex = /@(?<planet>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<attackType>[AD])![^@\-!:>]*->(?<soldierCount>\d+)/;
        let match = decrypted.match(regex);

        if (match) {
            let planet = match.groups.planet;
            let attackType = match.groups.attackType;

            if (attackType === 'A') {
                attackedPlanets.push(planet);
            } else if (attackType === 'D') {
                destroyedPlanets.push(planet);
            }
        }
    }
    attackedPlanets.sort((a, b) => a.localeCompare(b));
    destroyedPlanets.sort((a, b) => a.localeCompare(b));

    console.log(`Attacked planets: ${attackedPlanets.length}`);
    attackedPlanets.forEach(p => console.log(`-> ${p}`));

    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    destroyedPlanets.forEach(p => console.log(`-> ${p}`));
}

//starEnigma(['2',

//'STCDoghudd4=63333$D$0A53333',

//'EHfsytsnhf?8555&I&2C9555SR']);
