//solve #1
function heroesOfCodeAndLogic(inputArr) {
    let numberOfHeroes = Number(inputArr.shift());
    let heroes = inputArr.splice(0, numberOfHeroes);
    let heroMap = new Map();

    for (let hero of heroes) {
        let [heroName, hp, mp] = hero.split(' ');
        heroMap.set(heroName, { hp: Number(hp), mp: Number(mp) });
    }

    for (let line of inputArr) {
        if (line === 'End') {
            break;
        }

        let commandLine = line.split(' - ');
        let command = commandLine[0];

        if (command === 'CastSpell') {
            let [_, heroName, mpNeededStr, spellName] = commandLine;
            let mpNeeded = Number(mpNeededStr);
            let { mp } = heroMap.get(heroName);

            if (mp >= mpNeeded) {
                heroMap.get(heroName).mp -= mpNeeded;
                console.log(`${heroName} has successfully cast ${spellName} and now has ${heroMap.get(heroName).mp} MP!`);
            } else {
                console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
            }

        } else if (command === 'TakeDamage') {
            let [_, heroName, damageStr, attacker] = commandLine;
            let damage = Number(damageStr);
            let { hp } = heroMap.get(heroName);

            hp -= damage;
            if (hp > 0) {
                heroMap.get(heroName).hp = hp;
                console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${hp} HP left!`);
            } else {
                console.log(`${heroName} has been killed by ${attacker}!`);
                heroMap.delete(heroName);
            }

        } else if (command === 'Recharge') {
            let [_, heroName, amountStr] = commandLine;
            let amount = Number(amountStr);
            let { mp } = heroMap.get(heroName);

            let recovered = Math.min(200 - mp, amount);
            heroMap.get(heroName).mp += recovered;
            console.log(`${heroName} recharged for ${recovered} MP!`);

        } else if (command === 'Heal') {
            let [_, heroName, amountStr] = commandLine;
            let amount = Number(amountStr);
            let { hp } = heroMap.get(heroName);

            let recovered = Math.min(100 - hp, amount);
            heroMap.get(heroName).hp += recovered;
            console.log(`${heroName} healed for ${recovered} HP!`);
        }
    }

    for (let [heroName, { hp, mp }] of heroMap) {
        console.log(heroName);
        console.log(`  HP: ${hp}`);
        console.log(`  MP: ${mp}`);
    }
}

//heroesOfCodeAndLogic([
//"2",
//"Solmyr 85 120",
//"Kyrre 99 50",
//"Heal - Solmyr - 10",
//"Recharge - Solmyr - 50",
//"TakeDamage - Kyrre - 66 - Orc",
//"CastSpell - Kyrre - 15 - ViewEarth",
//"End"
//]);

//solve #2 (using classes)
class Hero {
    constructor(name, hp, mp) {
        this.name = name;
        this.hp = hp;
        this.mp = mp;
    }

    castSpell(mpNeeded, spellName) {
        if (this.mp >= mpNeeded) {
            this.mp -= mpNeeded;
            console.log(`${this.name} has successfully cast ${spellName} and now has ${this.mp} MP!`);
        } else {
            console.log(`${this.name} does not have enough MP to cast ${spellName}!`);
        }
    }

    takeDamage(damage, attacker) {
        this.hp -= damage;
        if (this.hp > 0) {
            console.log(`${this.name} was hit for ${damage} HP by ${attacker} and now has ${this.hp} HP left!`);
            return false;
        } else {
            console.log(`${this.name} has been killed by ${attacker}!`);
            return true;
        }
    }

    recharge(amount) {
        let recovered = Math.min(200 - this.mp, amount);
        this.mp += recovered;
        console.log(`${this.name} recharged for ${recovered} MP!`);
    }

    heal(amount) {
        let recovered = Math.min(100 - this.hp, amount);
        this.hp += recovered;
        console.log(`${this.name} healed for ${recovered} HP!`);
    }

    printStats() {
        console.log(this.name);
        console.log(`  HP: ${this.hp}`);
        console.log(`  MP: ${this.mp}`);
    }
}

function heroesOfCodeAndLogic(inputArr) {
    let numberOfHeroes = Number(inputArr.shift());
    let heroesData = inputArr.splice(0, numberOfHeroes);
    let heroMap = new Map();

    for (let hero of heroesData) {
        let [heroName, hp, mp] = hero.split(' ');
        heroMap.set(heroName, new Hero(heroName, Number(hp), Number(mp)));
    }

    for (let line of inputArr) {
        if (line === 'End') break;

        let commandLine = line.split(' - ');
        let command = commandLine[0];

        if (command === 'CastSpell') {
            let [_, heroName, mpNeededStr, spellName] = commandLine;
            let mpNeeded = Number(mpNeededStr);
            heroMap.get(heroName).castSpell(mpNeeded, spellName);

        } else if (command === 'TakeDamage') {
            let [_, heroName, damageStr, attacker] = commandLine;
            let damage = Number(damageStr);
            let isDead = heroMap.get(heroName).takeDamage(damage, attacker);
            if (isDead) {
                heroMap.delete(heroName);
            }

        } else if (command === 'Recharge') {
            let [_, heroName, amountStr] = commandLine;
            let amount = Number(amountStr);
            heroMap.get(heroName).recharge(amount);

        } else if (command === 'Heal') {
            let [_, heroName, amountStr] = commandLine;
            let amount = Number(amountStr);
            heroMap.get(heroName).heal(amount);
        }
    }

    for (let hero of heroMap.values()) {
        hero.printStats();
    }
}
