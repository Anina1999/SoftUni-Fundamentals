function triangleArea(a, b, c) {
    let semiperimeter = (a + b + c) / 2;
    let area = Math.sqrt(semiperimeter * ((semiperimeter - a) * (semiperimeter - b) * (semiperimeter - c)));

    console.log(area);
}

//triangleArea(2, 3.5, 4);
//triangleArea(3, 5.5, 4);
