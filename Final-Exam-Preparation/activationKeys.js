function activationKeys(inputArr) {
    let rawActivationKey = inputArr.shift();
    
    for (let line of inputArr) {
        let currentLine = line.split('>>>');
        let command = currentLine[0];

        if (command === 'Generate') {
            console.log(`Your activation key is: ${rawActivationKey}`);
            break;
        }

        if (command === 'Slice') {
            let [_, startIndex, endIndex] = currentLine;
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            rawActivationKey = rawActivationKey.slice(0, startIndex) + rawActivationKey.slice(endIndex);
            console.log(rawActivationKey);
        } 
        
        else if (command === 'Contains') {
            let [_, substring] = currentLine;
            if (rawActivationKey.includes(substring)) {
                console.log(`${rawActivationKey} contains ${substring}`);
            } else {
                console.log(`Substring not found!`);
            }
        } 
        
        else if (command === 'Flip') {
            let [_, state, startIndex, endIndex] = currentLine;
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            let modified = rawActivationKey.slice(startIndex, endIndex);
            if (state === 'Upper') {
                modified = modified.toUpperCase();
            } else {
                modified = modified.toLowerCase();
            }
            rawActivationKey = rawActivationKey.slice(0, startIndex) + modified + rawActivationKey.slice(endIndex);
            console.log(rawActivationKey);
        }
    }
}

//activationKeys(['abcdefghijklmnopqrstuvwxyz',
//'Slice>>>2>>>6',
//'Flip>>>Upper>>>3>>>14',
//'Flip>>>Lower>>>5>>>7',
//'Contains>>>def',
//'Contains>>>deF',
//'Generate']);
