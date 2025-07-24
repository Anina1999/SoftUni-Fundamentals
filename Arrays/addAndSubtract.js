function addAndSubtract(arr) {
    let newArr = [];
    let sumOfTheOriginalArr = 0;
    let sumOfTheModifiedArr = 0;
    for (let i = 0; i < arr.length; i++) {
        let currentNumber = arr[i];
        sumOfTheOriginalArr += currentNumber;
        
        if(currentNumber % 2 === 0) {
            currentNumber += i;
        } else {
            currentNumber -= i;
        }
        newArr.push(currentNumber);
        sumOfTheModifiedArr += currentNumber;
    }
    console.log(newArr);
    console.log(sumOfTheOriginalArr);
    console.log(sumOfTheModifiedArr);
}

//addAndSubtract([5, 15, 23, 56, 35]);
//addAndSubtract([-5, 11, 3, 0, 2]);
