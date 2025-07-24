function sortAnArrayByTwoCriteria(arr) {
    arr.sort((a, b) => {
        let lengthCriteria = a.length - b.length;

        if (lengthCriteria !== 0) {
            return lengthCriteria;
        }

        let alphabetCriteria = a.toLowerCase().localeCompare(b.toLowerCase());
        return alphabetCriteria;
    })
    console.log(arr.join('\n'));
}

//sortAnArrayByTwoCriteria(['alpha', 'beta', 'gamma']);
//sortAnArrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
