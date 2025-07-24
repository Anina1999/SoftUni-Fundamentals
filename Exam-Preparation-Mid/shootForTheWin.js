function shootForTheWin(arr) {
    let inputArr = arr.slice();
    let targets = inputArr.shift().split(' ').map(Number);

    function shootTargets(targets, commands) {
        let shotCount = 0;

        for (let cmd of commands) {
            if (cmd === "End") break;

            let index = Number(cmd);

            if (index < 0 || index >= targets.length || targets[index] === -1) {
                continue;
            }

            let shotValue = targets[index];
            targets[index] = -1;
            shotCount++;

            targets.forEach((value, i) => {
                if (value === -1) return;

                if (value > shotValue) {
                    targets[i] -= shotValue;
                } else {
                    targets[i] += shotValue;
                }
            })
        }

        let target1 = targets[0] !== undefined ? targets[0] : '';
        let target2 = targets[1] !== undefined ? targets[1] : '';
        let target3 = targets[2] !== undefined ? targets[2] : '';
        let target4 = targets[3] !== undefined ? targets[3] : '';
        let target5 = targets[4] !== undefined ? targets[4] : '';
        let target6 = targets[5] !== undefined ? targets[5] : '';

        console.log(`Shot targets: ${shotCount} -> ${target1} ${target2} ${target3} ${target4} ${target5} ${target6}`);
    }

    shootTargets(targets, inputArr);
}

//shootForTheWin(["24 50 36 70",

//"0",

//"4",

//"3",

//"1",

//"End"]);
//shootForTheWin(["30 30 12 60 54 66",

//"5",

//"2",

//"4",

//"0",

//"End"]);
