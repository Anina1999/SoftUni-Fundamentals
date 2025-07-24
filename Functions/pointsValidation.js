function pointsValidation(input) {
    let x1 = input[0];
    let y1 = input[1];
    let x2 = input[2];
    let y2 = input[3];

    function calculateDistance(x1, y1, x2, y2) {
        let distanceX = x2 - x1;
        let distanceY = y2 - y1;
        return Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    }

    function isValidDistance(distance) {
        return Number.isInteger(distance);
    }

    let firstDistance = calculateDistance(x1, y1, 0, 0);
    if (isValidDistance(firstDistance)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    let secondDistance = calculateDistance(x2, y2, 0, 0);
    if (isValidDistance(secondDistance)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    let thirdDistance = calculateDistance(x1, y1, x2, y2);
    if (isValidDistance(thirdDistance)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

//pointsValidation([3, 0, 0, 4]);
