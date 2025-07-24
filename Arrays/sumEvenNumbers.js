function sumEvenNumbers(arr) {
    //let arrOfNumbers = arr.map(Number);
    let sum = 0;

    //for (let i = 0; i < arrOfNumbers.length; i++) {
     //   let currentNumber = arrOfNumbers[i];
     //   if (currentNumber % 2 === 0) {
    //        sum += currentNumber;
     //   }
    //}
    //console.log(sum);

    for (let number of arr) {
        number = Number(number);

        if (number % 2 === 0) {
            sum += number;
        }
    }
    console.log(sum);
}

//sumEvenNumbers(['1','2','3','4','5','6']);
//sumEvenNumbers(['3','5','7','9']);
//sumEvenNumbers(['2','4','6','8','10']);
