function sortNumbers(num1, num2, num3) {
    let numbers = [num1, num2, num3];
    numbers.sort((a, b) => b - a); 

    for (let num of numbers) {
        console.log(num);
    }
}

//sortNumbers(2, 1, 3);

function sortNumbers(num1, num2, num3) {
    let first;
    let second;
    let third;

    if (num1 >= num2 && num1 >= num3) {
        first = num1;
        if (num2 >= num3) {
            second = num2;
            third = num3;
        } else {
            second = num3;
            third = num2;
        }
    } else if (num2 >= num1 && num2 >= num3) {
        first = num2;
        if (num1 >= num3) {
            second = num1;
            third = num3;
        } else {
            second = num3;
            third = num1;
        }
    } else {
        first = num3;
        if (num1 >= num2) {
            second = num1;
            third = num2;
        } else {
            second = num2;
            third = num1;
        }
    }

    console.log(first);
    console.log(second);
    console.log(third);
}

//sortNumbers(2, 1, 3);

function sortNumbers(a, b, c) {
    [a, b, c].sort((x, y) => y - x).forEach(num => console.log(num));
}
