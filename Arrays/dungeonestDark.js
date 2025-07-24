function dungeonestDark(string) {
    let arr = string.split("|"); 
    let health = 100; 
    let coins = 0;

    for (let i = 0; i < arr.length; i++) {
        let room = arr[i];
        let parts = room.split(' ');
        let command = parts[0];
        let valueOfCommand = Number(parts[1]);

        if (command === 'potion') {
            let healed = Math.min(100 - health, valueOfCommand);
            health += healed;
            console.log(`You healed for ${healed} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (command === 'chest') {
            coins += valueOfCommand;
            console.log(`You found ${valueOfCommand} coins.`);
        } else {
            health -= valueOfCommand;
            if (health > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${i + 1}`);
                return;
            }
        }
    }

    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}

//dungeonestDark("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
//dungeonestDark("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
