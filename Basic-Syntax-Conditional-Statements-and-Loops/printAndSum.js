function printAndSum(num1, num2) {
    //logic
    let sum = 0;
    let result = '';
    
    for (let i = num1; i <= num2; i++) {
        sum += i;
        result += i + ' ';
    }
    //return result
    console.log(result);
    console.log(`Sum: ${sum}`);
}

//printAndSum(5, 10);
