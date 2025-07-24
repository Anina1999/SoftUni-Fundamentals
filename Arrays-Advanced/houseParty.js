function houseParty(arr) {
    let list = [];

    for (let el of arr) {
        let name = el.split(' ')[0];

        if (el.includes('is going')) {
            if (list.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                list.push(name);
            }
        } else if (el.includes('is not going')) {
            if (list.includes(name)) {
                let index = list.indexOf(name);
                list.splice(index, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    console.log(list.join('\n'));
}

//houseParty(['Allie is going!',

//'George is going!',

//'John is not going!',

//'George is not going!']);

//houseParty(['Tom is going!',

//'Annie is going!',

//'Tom is going!',

//'Garry is going!',

//'Jerry is going!']);
