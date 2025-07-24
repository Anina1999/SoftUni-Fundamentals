function biggestOfThreeNumbers(num1, num2, num3) {
    let theBiggestNumber = 0;

    if (num1 >= num2 && num1 >= num3) {
        theBiggestNumber = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        theBiggestNumber = num2;
    } else {
        theBiggestNumber = num3;
    }

    console.log(theBiggestNumber);
}

//biggestOfThreeNumbers(-2, 7, 3);
//biggestOfThreeNumbers(130, 5, 9);
//biggestOfThreeNumbers(43, 43.2, 43.1);
//biggestOfThreeNumbers(2, 2, 2);
