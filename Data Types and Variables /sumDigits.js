function sumDigits(n) {
    let num = n;
    let result = 0;

    do {
        let last = num % 10;
        result += last;
        num = parseInt(num / 10);
    } while (num > 0);
    console.log(result);
}

//sumDigits(245678);
//sumDigits(97561);
//sumDigits(543);
