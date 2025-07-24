function nonDecreasingSubset(arr) {
    let finalArr = [];
    let currentBiggestNumber = arr[0];
    finalArr.push(currentBiggestNumber);

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= currentBiggestNumber) {
            finalArr.push(arr[i]);
            currentBiggestNumber = arr[i];
        }
    }

    console.log(finalArr.join(' '));
}

//nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);
//nonDecreasingSubset([ 1, 2, 3, 4]);
//nonDecreasingSubset([ 20, 3, 2, 15, 6, 1]);
