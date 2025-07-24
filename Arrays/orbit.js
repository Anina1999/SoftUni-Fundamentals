function orbit(input) {
    let width = Number(input[0]);
    let height = Number(input[1]);
    let starRow = Number(input[2]);
    let starCol = Number(input[3]);

    let matrix = [];

    for (let row = 0; row < height; row++) {
        matrix[row] = [];

        for (let col = 0; col < width; col++) {
            let distance = Math.max(
                Math.abs(row - starRow),
                Math.abs(col - starCol)
            );

            matrix[row][col] = distance + 1;
        }
    }

    for (let row = 0; row < height; row++) {
        console.log(matrix[row].join(' '));
    }
}

//orbit([4, 4,

//0, 0]);
