function theLift(inputArr) {
    let arr = inputArr.slice();
    let peopleWaiting = Number(arr.shift());
    let currentStateOfTheLift = arr[0].split(' ').map(Number);
    let i = 0;

    while (i < currentStateOfTheLift.length && peopleWaiting > 0) {
        let currentWagon = currentStateOfTheLift[i];
        if (currentWagon < 4) {
            let freeSpots = 4 - currentWagon;
            if (peopleWaiting >= freeSpots) {
                currentStateOfTheLift[i] = 4;
                peopleWaiting -= freeSpots;
            } else {
                currentStateOfTheLift[i] += peopleWaiting;
                peopleWaiting = 0;
            }
        }
        i++;
    }

    let isFull = true;
    for (let j = 0; j < currentStateOfTheLift.length; j++) {
        if (currentStateOfTheLift[j] < 4) {
            isFull = false;
            break;
        }
    }

    if (peopleWaiting === 0 && !isFull) {
        console.log("The lift has empty spots!");
    } else if (peopleWaiting > 0 && isFull) {
        console.log(`There isn't enough space! ${peopleWaiting} people in a queue!`);
    }
    console.log(currentStateOfTheLift.join(' '));
}

//theLift(["15",
//"0 0 0 0"
//]);
//theLift(["20",
//"0 2 0"
//]);
