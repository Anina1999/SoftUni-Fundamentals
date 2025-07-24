function modifyArray(inputArr) {
    let arr = inputArr.slice();        
    let initialArrValue = arr.shift().split(' ').map(Number);

    for (let i = 0; i < arr.length; i++) {
        let commandParts = arr[i].split(' ');
        let command = commandParts[0];

        let firstIndex = Number(commandParts[1]);
        let secondIndex = Number(commandParts[2]);

        if (command === 'end') {
            break;
        }

        switch (command) {
            case 'swap':
                let caseSwap = initialArrValue[firstIndex];
                initialArrValue[firstIndex] = initialArrValue[secondIndex];
                initialArrValue[secondIndex] = caseSwap;
                break;

            case 'multiply':
                initialArrValue[firstIndex] = initialArrValue[firstIndex] * initialArrValue[secondIndex];
                break;

            case 'decrease':
                initialArrValue = initialArrValue.map(x => x - 1);
                break;
        }
    }
    console.log(initialArrValue.join(', '));
}

//modifyArray([ '23 -2 321 87 42 90 -123', 
//    'swap 1 3', 
//    'swap 3 6', 
//    'swap 1 0', 
//    'multiply 1 2', 
//    'multiply 2 1', 
//    'decrease', 
//    'end' ]);
//modifyArray([

//'1 2 3 4',

//'swap 0 1',

//'swap 1 2',

//'swap 2 3',

//'multiply 1 2',

//'decrease',

//'end'

//]);
