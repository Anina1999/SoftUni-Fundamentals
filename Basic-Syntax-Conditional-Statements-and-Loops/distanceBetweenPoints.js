function distanceBetweenPoints(x1, y1, x2, y2) {
    //logic
    let a = x2 - x1;
    let b = y2 - y1;
    let distance = Math.sqrt(a * a + b * b);
    //return result
    console.log(distance);
}

//distanceBetweenPoints(2, 4, 5, 0);
