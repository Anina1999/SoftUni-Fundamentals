function phoneShop(inputArr) {
    let slicedArr = inputArr.slice();
    let listOfPhones = slicedArr.shift().split(", ");

    let i = 0;
    let command = slicedArr[i];

    while (command !== 'End') {
        let index = command.split(' - ');
        let currentCommand = index[0];
        let secondValue = index[1];

        switch (currentCommand) {
            case 'Add':
                if (!listOfPhones.includes(secondValue)) {
                    listOfPhones.push(secondValue);
                }
                break;

            case 'Remove':
                if (listOfPhones.includes(secondValue)) {
                    let indexOfCommand = listOfPhones.indexOf(secondValue);
                    listOfPhones.splice(indexOfCommand, 1);
                }
                break;

            case 'Bonus phone':
                let bonusPhones = secondValue.split(':');
                let oldPhone = bonusPhones[0];
                let newPhone = bonusPhones[1];
                if (listOfPhones.includes(oldPhone)) {
                    let indexOfOldPhone = listOfPhones.indexOf(oldPhone);
                    listOfPhones.splice(indexOfOldPhone + 1, 0, newPhone);
                }
                break;

            case 'Last':
                if (listOfPhones.includes(secondValue)) {
                    let indexOfLast = listOfPhones.indexOf(secondValue);
                    listOfPhones.splice(indexOfLast, 1);
                    listOfPhones.push(secondValue);
                }
                break;
        }

        i++;
        command = slicedArr[i];
    }
    console.log(listOfPhones.join(", "));
}

//phoneShop(["SamsungA50, MotorolaG5, IphoneSE",
//"Add - Iphone10",
//"Remove - IphoneSE",
//"End"]);
//phoneShop(["HuaweiP20, XiaomiNote",
//"Remove - Samsung",
//"Bonus phone - XiaomiNote:Iphone5",
//"End"]);
//phoneShop(["SamsungA50, MotorolaG5, HuaweiP10",
//"Last - SamsungA50",
//"Add - MotorolaG5",
//"End"]);
