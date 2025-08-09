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



//solve #2 (has different view, testing with two patterns, no groups, using slice method
// to slice first and last symbol)

function bossRush(inputArr) {
    let numberOfInputs = Number(inputArr[0]);
    let bossNamePattern = /^\|[A-Z]{4,}\|$/;
    let titlePattern = /^#[A-Za-z]+ [A-Za-z]+#$/;

    for (let i = 1; i <= numberOfInputs; i++) {
        let line = inputArr[i];
        
        if (!line.includes(':')) {
            console.log('Access denied!');
            continue;
        }
        let [bossName, title] = line.split(':');

        let bossMatch = bossName.match(bossNamePattern);
        let titleMatch = title.match(titlePattern);

        if (bossMatch && titleMatch) {
           
            let name = bossName.slice(1, -1);
            let titt = title.slice(1, -1);

            console.log(`${name}, The ${titt}`);
            console.log(`>> Strength: ${name.length}`);
            console.log(`>> Armor: ${titt.length}`);

        } else {
            console.log('Access denied!');
        }
    }
}


//solve #3 (using two patterns for each part, by getting groups - SIMILAR as solve #2)
function bossRush(inputArr) {
    let numberOfInputs = Number(inputArr[0]);
    let bossNamePattern = /^\|(?<bossName>[A-Z]{4,})\|$/;
    let titlePattern = /^#(?<title>[A-Za-z]+ [A-Za-z]+)#$/;

    for (let i = 1; i <= numberOfInputs; i++) {
        let line = inputArr[i];
        let [bossName, title] = line.split(':');

        if (!line.includes(':')) {
            console.log('Access denied!');
            continue;
        }

        let bossMatch = bossName.match(bossNamePattern);
        let titleMatch = title.match(titlePattern);

        if (bossMatch && titleMatch) {
            let name = bossMatch.groups.bossName;
            let titt = titleMatch.groups.title;

            console.log(`${name}, The ${titt}`);
            console.log(`>> Strength: ${name.length}`);
            console.log(`>> Armor: ${titt.length}`);
        } else {
            console.log('Access denied!');
        }
    }
}
