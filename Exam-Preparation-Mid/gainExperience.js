function gainExperience(inputArr) {
    let slicedArr = inputArr.slice();
    let amountOfNeededExp = slicedArr.shift();
    let countOfBattles = slicedArr.shift();
    let currentExp = 0; 

    if (amountOfNeededExp < 0 || amountOfNeededExp > 400000) {
        return;
    } else if (countOfBattles < 0 || countOfBattles > 500) {
        return;
    }

    for (let i = 0; i < slicedArr.length; i++) {
        let currentIndex = slicedArr[i];
        let battleNumber = i + 1;

        if (currentIndex < 0 || currentIndex > 5000) {
            break;
        }

        let bonusExp = currentIndex;

        if (battleNumber % 3 === 0) {
            bonusExp += currentIndex * 0.15;
        } else if (battleNumber % 5 === 0) {
            bonusExp -= currentIndex * 0.10;
        } else if (battleNumber % 15 === 0) {
            bonusExp += currentIndex * 0.05;
        }

        currentExp += bonusExp;

        if (currentExp >= amountOfNeededExp) {
            console.log(`Player successfully collected his needed experience for ${battleNumber} battles.`);
            return;
        } 
    }
    let neededExp = amountOfNeededExp - currentExp;
    console.log(`Player was not able to collect the needed experience, ${neededExp.toFixed(2)} more needed.`);
}

//gainExperience([500,
//5,
//50,
//100,
//200,
//100,
//30]);
//gainExperience([500,
//5,
//50,
//100,
//200,
//100,
//20]);
//gainExperience([400,
//5,
//50,
//100,
//200,
//100,
//20]);
