function addAndRemove(arr) {
    let result = [];
    let currentNumber = 1;

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];

        if (command === 'add') {
            result.push(currentNumber);
        } else if (command === 'remove') {
            result.pop(currentNumber);
        }

        currentNumber++;
    }

    if (result.length === 0) {
        console.log('Empty');
    } else {
        console.log(result.join(' '));
    }
}

//addAndRemove(['add', 'add', 'add', 'add']);
//addAndRemove(['add', 'add', 'remove', 'add', 'add']);
//addAndRemove(['remove', 'remove', 'remove']);
