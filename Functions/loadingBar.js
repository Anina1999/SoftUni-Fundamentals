function loadingBar(num) {
    let percentCount = num / 10;
    let result = [];

    for (let i = 0; i < 10; i++) {
        if (i < percentCount) {
            result.push('%');
        } else {
            result.push('.');
        }
    }

    let bar = result.join('');

    if (num === 100) {
        console.log(`${num}% Complete!`);
        console.log(`[${bar}]`);
    } else {
        console.log(`${num}% [${bar}]\nStill loading...`);
    }
}

//loadingBar(30);
