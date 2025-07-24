function sumFirstAndLast(arr) {
    arr = arr.map(Number);

    let firstElement = arr.shift();
    let lastElement = arr.pop();

    console.log(firstElement + lastElement);
}

//sumFirstAndLast(['20', '30', '40']);
