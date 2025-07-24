function magicMatrices(arr) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        if (arr[i].length !== n) {
            return false;
        }
    }

    let targetSum = 0;
    for (let i = 0; i < n; i++) {
        targetSum += arr[0][i];
    }

    for (let row = 1; row < n; row++) {
        let rowSum = 0;
        for (let col = 0; col < n; col++) {
            rowSum += arr[row][col];
        }
        if (rowSum !== targetSum) {
            return false;
        }
    }

    for (let col = 0; col < n; col++) {
        let colSum = 0;
        for (let row = 0; row < n; row++) {
            colSum += arr[row][col];
        }
        if (colSum !== targetSum) {
            return false;
        }
    }
    return true;
}


//magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
//magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
//magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]]);
