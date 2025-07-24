function serializeString(arr) {

    function replaceCharsWithIndexes(array) {
        let resultMap = new Map();
        let str = array[0];

        for (let i = 0; i < str.length; i++) {
            let char = str[i];
            if (!resultMap.has(char)) {
                resultMap.set(char, [i]);
            } else {
                resultMap.get(char).push(i);
            }
        }
        return resultMap;
    }

    let resultMap = replaceCharsWithIndexes(arr);

    for (let [char, indexes] of resultMap.entries()) {
        console.log(`${char}:${indexes.join('/')}`);
    }
}

//serializeString(["avjavamsdmcalsdm"]);
