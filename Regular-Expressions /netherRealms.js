function netherRealms(input) {
    let onlyCharPattern = /[^0-9+\-*/.\s]/g;
    let demons = input.split(/\s*,\s*/);

    let demonMap = new Map();

    for (let demon of demons) {
        let health = 0;
        let damage = 0;

        let charMatches = demon.match(onlyCharPattern);
        if (charMatches) {
            for (let char of charMatches) {
                health += char.charCodeAt(0);
            }
        }

        let numberPattern = /[-+]?\d+(\.\d+)?/g;
        let numberMatches = demon.match(numberPattern);
        if (numberMatches) {
            for (let num of numberMatches) {
                damage += Number(num);
            }
        }

        let modifiers = demon.match(/[*\/]/g);
        if (modifiers) {
            for (let symbol of modifiers) {
                damage = symbol === '*' ? damage * 2 : damage / 2;
            }
        }

        demonMap.set(demon, {
            health: health,
            damage: damage
        });
    }

    let sorted = [...demonMap.entries()].sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, stats] of sorted) {
        console.log(`${name} - ${stats.health} health, ${stats.damage.toFixed(2)} damage`);
    }
}

//netherRealms('M3ph1st0**, Azazel');
