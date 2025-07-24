function ladyBugs(input) {
    let fieldSize = Number(input[0]);
    let field = [];
    
    for (let i = 0; i < fieldSize; i++) {
        field[i] = 0;
    }

    let initialPositions = input[1].split(' ');
    for (let i = 0; i < initialPositions.length; i++) {
        let index = Number(initialPositions[i]);
        if (index >= 0 && index < fieldSize) {
            field[index] = 1;
        }
    }

    for (let i = 2; i < input.length; i++) {
        let parts = input[i].split(' ');
        let startIndex = Number(parts[0]);
        let direction = parts[1];
        let flyLength = Number(parts[2]);

        if (startIndex < 0 || startIndex >= fieldSize) {
            continue;
        }
        if (field[startIndex] === 0) {
            continue;
        }

        field[startIndex] = 0;

        let position = startIndex;
        let step = direction === 'right' ? flyLength : -flyLength;

        position = position + step;

        while (position >= 0 && position < fieldSize && field[position] === 1) {
            position = position + step;
        }

        if (position >= 0 && position < fieldSize) {
            field[position] = 1;
        }
    }

    let result = '';
    for (let i = 0; i < fieldSize; i++) {
        result += field[i] + ' ';
    }
    console.log(result.trim());
}

//ladyBugs([ 3, '0 1', '0 right 1', '2 right 1' ]);
//ladyBugs([ 3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
//ladyBugs([ 5, '3', '3 left 2', '1 left -2']);
