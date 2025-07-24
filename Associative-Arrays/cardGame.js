//solve #1
function cardGame(input) {
    let playerMap = new Map();

    for (let line of input) {
        let [playerName, cardsString] = line.split(': ');
        let cards = cardsString.split(', ');

        if (!playerMap.has(playerName)) {
            playerMap.set(playerName, []);
        }

        let existingCards = playerMap.get(playerName);
        existingCards.push(...cards);
    }

    for (let [player, cards] of playerMap.entries()) {
        let uniqueCards = new Set(cards);
        playerMap.set(player, uniqueCards);
    }

    let powers = {
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    };

    let types = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    };

    for (let [player, cardSet] of playerMap.entries()) {
        let total = 0;

        for (let card of cardSet) {
            let powerPart = '';
            let typePart = '';

            if (card.length === 3) {
                powerPart = '10';
                typePart = card[2];
            } else {
                powerPart = card[0];
                typePart = card[1];
            }

            let powerValue = powers[powerPart] || Number(powerPart);
            let typeValue = types[typePart];

            total += powerValue * typeValue;
        }

        console.log(`${player}: ${total}`);
    }
}

//cardGame([

//'Peter: 2C, 4H, 9H, AS, QS',

//'Tomas: 3H, 10S, JC, KD, 5S, 10S',

//'Andrea: QH, QC, QS, QD',

//'Tomas: 6H, 7S, KC, KD, 5S, 10C',

//'Andrea: QH, QC, JS, JD, JC',

//'Peter: JD, JD, JD, JD, JD, JD'

]);

//solve #2
function cardGame(input) {
    let players = new Map();
    for (let line of input) {
        let [name, cardList] = line.split(': ');
        let cards = cardList.split(', ');

        if (!players.has(name)) {
            players.set(name, new Set());
        }

        let playerCards = players.get(name);
        for (let card of cards) {
            playerCards.add(card);
        }
    }

    const powerMap = {
        'J' : 11,
        'Q' : 12,
        'K' : 13,
        'A' : 14
    }

    const typeMap = {
        'S' : 4,
        'H' : 3,
        'D' : 2,
        'C' : 1
    }

    for (let [name, cardSet] of players) {
        let totalValue = 0;
        for (let card of cardSet) {
            let power = card.slice(0, -1);
            let type = card.slice(-1);

            power = powerMap[power] || Number(power);
            let typeValue = typeMap[type];
            totalValue += power * typeValue;
        }
        console.log(`${name}: ${totalValue}`);
    }
}
