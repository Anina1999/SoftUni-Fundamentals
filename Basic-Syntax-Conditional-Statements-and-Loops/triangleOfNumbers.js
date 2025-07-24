function triangleOfNumbers(n) {
    //logic
    let result = '';
    for (let i = 1; i <= n; i++) {
        result = '';
        for (let j = 0; j < i; j++) {
            result += i + ' ';
        }
        //print result
        console.log(result);
    }
}

//triangleOfNumbers(3);
