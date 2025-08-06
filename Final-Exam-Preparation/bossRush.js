//solve #1 (straight and clean solve)
function bossRush(inputArr) {
    let numberOfInputs = Number(inputArr[0]);
    let pattern = /^\|(?<bossName>[A-Z]{4,})\|:#(?<title>[A-Za-z]+ [A-Za-z]+)#$/;

    for (let i = 1; i <= numberOfInputs; i++) {
        let line = inputArr[i];

        let match = line.match(pattern);

        if (match) {
            let name = match.groups['bossName'];
            let titt = match.groups['title'];

            console.log(`${name}, The ${titt}`);
            console.log(`>> Strength: ${name.length}`);
            console.log(`>> Armor: ${titt.length}`);

        } else {
            console.log('Access denied!');
        }
    }
}

//bossRush(['3',
//'|STEFAN|:#H1gh Overseer#',
//'|IVAN|:#Master detective#',
//'|KARL|: #Marketing lead#']);
