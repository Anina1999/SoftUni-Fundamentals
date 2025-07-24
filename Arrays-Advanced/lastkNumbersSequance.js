function lastkNumbersSequance(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        let startIndex = Math.max(0, i - k);

        let previousThreeNumbers = result.slice(startIndex, i);

        let sum = 0;

        for (let number of previousThreeNumbers) {
            sum += number;
        }

        result[i] = sum;
    }
    console.log(result.join(' '));
}

//lastkNumbersSequance(6, 3);
