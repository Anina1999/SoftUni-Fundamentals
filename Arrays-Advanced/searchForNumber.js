function searchForNumber(firstArr, secondArr) {
    let numOfElementsToTake = secondArr[0];
    let numOfElementsToDelete = secondArr[1];
    let number = secondArr[2];

    let takenElements = firstArr.slice(0, numOfElementsToTake);
    takenElements.splice(0, numOfElementsToDelete);

    let count = takenElements.filter(num => num === number).length;

    console.log(`Number ${number} occurs ${count} times.`);
}

//searchForNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
//searchForNumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);
