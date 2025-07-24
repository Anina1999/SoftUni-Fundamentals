function deserializeString(inputArr) {
    let result = [];

    for (let line of inputArr) {
        if (line !== 'end') {
            let [char, indexes] = line.split(':');
            let foundAtIndexes = indexes.split('/').map(Number);

            for (let i = 0; i < foundAtIndexes.length; i++) {
                let index = foundAtIndexes[i];
                result[index] = char;
            }
        }
    }
    console.log(result.join(''));
}

//deserializeString(['a:0/2/4/6',

//'b:1/3/5',

//'end']);
