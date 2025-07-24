function movingTarget(inputArr) {
    let arr = inputArr.slice();
    let sequenceOfTargets = arr.shift().split(' ').map(Number);

    for (let i = 0; i < arr.length; i++) {
        let commandParts = arr[i].split(' ');
        let command = commandParts[0].toLowerCase();

        if (command === 'end') {
            break;
        }

        let index = Number(commandParts[1]);
        let value = Number(commandParts[2]);

        if (command === 'shoot') {
            if (index >= 0 && index < sequenceOfTargets.length) {
                sequenceOfTargets[index] -= value;
                if (sequenceOfTargets[index] <= 0) {
                    sequenceOfTargets.splice(index, 1);
                }
            }
        } else if (command === 'add') {
            if (index >= 0 && index <= sequenceOfTargets.length - 1) {
                sequenceOfTargets.splice(index, 0, value);
            } else {
                console.log("Invalid placement!");
            }
        } else if (command === 'strike') {
            let radius = value;
            let before = index - radius;
            let after = index + radius;

            if (before >= 0 && after < sequenceOfTargets.length) {
                sequenceOfTargets.splice(before, after - before + 1);
            } else {
                console.log("Strike missed!");
            }
        }
    }
    console.log(sequenceOfTargets.join('|'));
}

//movingTarget((["52 74 23 44 96 110",

//"Shoot 5 10",

//"Shoot 1 80",

//"Strike 2 1",

//"Add 22 3",

//"End"]));
//movingTarget((["1 2 3 4 5",

//"Strike 0 1",

//"End"]));
