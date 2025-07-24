function diagonalAttack(arr) {
    let result = [];
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;

    for (let row of arr) {
        let numbersRow = row.split(' ').map(Number);
        result.push(numbersRow);
    }

    let length = result.length;  

    for (let i = 0; i < length; i++) {
        firstDiagonalSum += result[i][i];
    }

    for (let i = 0; i < length; i++) {
        secondDiagonalSum += result[i][length - 1 - i]; 
    }

    if (firstDiagonalSum === secondDiagonalSum) {
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length; j++) {
                if (j !== i && j !== length - 1 - i) {
                    result[i][j] = firstDiagonalSum;
                }
            }
        }
    }

    for (let i = 0; i < length; i++) {
        console.log(result[i].join(' '));
    }
}

//diagonalAttack(['5 3 12 3 1',

//'11 4 23 2 5',

//'101 12 3 21 10',

//'1 4 5 2 2',

//'5 22 33 11 1']);
//diagonalAttack(['1 1 1',

//'1 1 1',

//'1 1 0']);
