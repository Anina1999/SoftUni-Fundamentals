function bombNumbers(firstArr, secondArr) {
    let initialSequence = firstArr.slice()
    let specialBombNumber = secondArr[0];
    let specialBombPower = secondArr[1];

    while (initialSequence.includes(specialBombNumber)) {
        let index = initialSequence.indexOf(specialBombNumber);
        let start = Math.max(0, index - specialBombPower);
        let end = Math.min(index + specialBombPower, initialSequence.length - 1);

        initialSequence.splice(start, end - start + 1);
    }

    let sum = initialSequence.reduce((value, el) => value + el, 0);
    console.log(sum);
}

//bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
//bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
//bombNumbers([1, 7, 7, 1, 2, 3],[7, 1]);
//bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
