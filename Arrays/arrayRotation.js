function arrayRotation(arr, number) {
    let numberOfRotations = number % arr.length;
    let newArr = [];

    for (let i = numberOfRotations; i < arr.length; i++) {
        newArr.push(arr[i]);
    }

    for (let i = 0; i < numberOfRotations; i++) {
        newArr.push(arr[i]);
    }

    console.log(newArr.join(' '));
}

//arrayRotation([51, 47, 32, 61, 21], 2);
//arrayRotation([32, 21, 61, 1], 4);
//arrayRotation([2, 4, 15, 31], 5);
