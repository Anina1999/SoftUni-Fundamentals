function treasureFinder(inputArr) {
    let key = inputArr.shift().split(' ').map(Number); 

    function returnAsciiValues(arr) {
        let asciiCodes = [];
        for (let line of arr) {
            if (line === 'find') {
                break;
            }

            let lineCodes = [];
            line.split('').forEach(char => {
                lineCodes.push(char.charCodeAt(0));
            });

            asciiCodes.push(lineCodes); 
        }
        return asciiCodes;
    }

    let asciiValues = returnAsciiValues(inputArr); 

    for (let l of asciiValues) {
        let result = [];
        let j = 0;
        for (let i = 0; i < l.length; i++) {
            if (j === key.length) { 
                j = 0;
            }

            let currentAscii = l[i];
            let currentKey = key[j];
            let newAscii = currentAscii - currentKey;
            result.push(String.fromCharCode(newAscii));
            j++;
        }

        let decrypted = result.join('');

        let typeStart = decrypted.indexOf('&');
        let typeEnd = decrypted.indexOf('&', typeStart + 1);
        let type = decrypted.slice(typeStart + 1, typeEnd);

        let coordStart = decrypted.indexOf('<');
        let coordEnd = decrypted.indexOf('>', coordStart);
        let coordinates = decrypted.slice(coordStart + 1, coordEnd);

        console.log(`Found ${type} at ${coordinates}`);
    }
}

//treasureFinder(["1 2 1 3",

//"ikegfp'jpne)bv=41P83X@",

//"ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",

//"find"]);
