function rotateArray(arr) {
    let lastIndex = arr.length - 1;
    let rotations = Number(arr[lastIndex]);
    arr.pop();

    rotations = rotations % arr.length;

    for (let i = 0; i < rotations; i++) {
        let lastElement = arr.pop();
        arr.unshift(lastElement);
    }

    console.log(arr.join(' '));
}

//rotateArray(['1', '2', '3', '4', '2']);
//rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
