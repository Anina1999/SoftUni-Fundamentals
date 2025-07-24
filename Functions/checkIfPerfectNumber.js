function checkIfPerfectNumber(number) {
    
    function findDivisors(num) {
        let divisors = [];

        for (let i = 1; i < num; i++) {
            if (num % i === 0) {
                divisors.push(i);
            }
        }
        return divisors;
    }

    function sumArr(arr) {
        let sum = 0;

        for (let el of arr) {
            sum += el;
        }
        return sum;
    }

    let divisors = findDivisors(number);
    let sum = sumArr(divisors);

    if (sum === number) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}

//checkIfPerfectNumber(1236498);
