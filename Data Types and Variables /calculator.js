function calculator(a, stringOperator, b) {
    let result = 0;

    switch (stringOperator) {
        case '+':
        result = a + b;
        break;

        case '-':
        result = a - b;
        break;

        case '*':
        result = a * b;
        break;

        case '/':
        result = a / b;
        break;
    }
    console.log(result.toFixed(2));
}

//calculator(5, '+', 10);
//calculator(25.5, '-', 3);
