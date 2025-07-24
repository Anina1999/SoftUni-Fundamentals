function printNxnMatrix(n) {

    function makeArr(length, value) {
        let row = [];
        for (let i = 0; i < length; i++) {
            row.push(value);
        }
        return row;
    }

    function printMatrix(size) {
        for (let i = 0; i < size; i++) {
            let currentRow = makeArr(size, n);
            console.log(currentRow.join(' '));
        }
    }

    printMatrix(n);
}

//printNxnMatrix(3);
