function primeNumberChecker(num) {
    let isPrime = true;

    if (num < 2) {
        isPrime = false;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime) {
        console.log('true');
    } else {
        console.log('false');
    }
}

//primeNumberChecker(7);
//primeNumberChecker(8);
//primeNumberChecker(81);
