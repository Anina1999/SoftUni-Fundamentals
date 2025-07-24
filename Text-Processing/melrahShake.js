function melrahShake(arr) {
    let [randomString, randomPattern] = arr;

    while (true) {
        let resultOfFirstMid = [];
        let resultOFSecondMid = [];

        if (randomString.includes(randomPattern)) {
            let firstIndex = randomString.indexOf(randomPattern);
            let lastIndex = randomString.lastIndexOf(randomPattern);

            if (firstIndex !== lastIndex && randomPattern.length > 0) {
                randomString = randomString.slice(0, firstIndex) + randomString.slice(firstIndex + randomPattern.length);
                lastIndex = randomString.lastIndexOf(randomPattern);
                randomString = randomString.slice(0, lastIndex) + randomString.slice(lastIndex + randomPattern.length);

                console.log('Shaked it.');

                let middle = Math.floor(randomPattern.length / 2);
                randomPattern = randomPattern.slice(0, middle) + randomPattern.slice(middle + 1);
            } else {
                console.log('No shake.');
                console.log(randomString);
                break;
            }
        } else {
            console.log('No shake.');
            console.log(randomString);
            break;
        }
    }
}

//melrahShake(['##mtm!!mm.mm*mtm.#',

//'mtm']);
