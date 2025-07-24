function arrayManipulator(numArr, commandArr) {
    let slicedArr = numArr.slice();

    commandArr.forEach(line => {
        let parts = line.split(' ');
        let command = parts[0];
        let numbers = parts.slice(1).map(Number);

        if (command === 'add') {
            slicedArr.splice(numbers[0], 0, numbers[1]);
        } else if (command === 'addMany') {
            slicedArr.splice(numbers[0], 0, ...numbers.slice(1));
        } else if (command === 'contains') {
            console.log(slicedArr.indexOf(numbers[0]));
        } else if (command === 'remove') {
            slicedArr.splice(numbers[0], 1); 
        } else if (command === 'shift') {
            let shiftCount = numbers[0] % slicedArr.length;
            slicedArr = slicedArr.slice(shiftCount).concat(slicedArr.slice(0, shiftCount));
        } else if (command === 'sumPairs') {
            slicedArr = slicedArr.reduce((array, val, i, arr) => {
                if (i % 2 === 0) {
                    let sum = val + (arr[i + 1] || 0);
                    array.push(sum);
                }
                return array;
            }, []);
        } else if (command === 'print') {
            console.log(`[ ${slicedArr.join(', ')} ]`);
        }
    });
}

//arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
//arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);
