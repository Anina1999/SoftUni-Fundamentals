function organizeRepertoire(inputArr) {
    let numberOfPieces = Number(inputArr.shift());
    let organizedPiecesMap = new Map();

    for (let i = 0; i < numberOfPieces; i++) {
        let [piece, composer, key] = inputArr[i].split('|');
        if (!organizedPiecesMap.has(piece)) {
            organizedPiecesMap.set(piece, { composer, key });
        }
    }

    inputArr = inputArr.slice(numberOfPieces);

    for (let line of inputArr) {
        if (line === 'Stop') {
            break;
        }

        let [command, ...args] = line.split('|');

        switch (command) {
            case 'Add':
                let [pieceToAdd, composer, key] = args;
                if (!organizedPiecesMap.has(pieceToAdd)) {
                    organizedPiecesMap.set(pieceToAdd, { composer, key });
                    console.log(`${pieceToAdd} by ${composer} in ${key} added to the collection!`);
                } else {
                    console.log(`${pieceToAdd} is already in the collection!`);
                }
                break;

            case 'Remove':
                let pieceToRemove = args[0];
                if (organizedPiecesMap.has(pieceToRemove)) {
                    organizedPiecesMap.delete(pieceToRemove);
                    console.log(`Successfully removed ${pieceToRemove}!`);
                } else {
                    console.log(`Invalid operation! ${pieceToRemove} does not exist in the collection.`);
                }
                break;

            case 'ChangeKey':
                let [pieceToChange, newKey] = args;
                if (organizedPiecesMap.has(pieceToChange)) {
                    let piece = organizedPiecesMap.get(pieceToChange);
                    piece.key = newKey;
                    organizedPiecesMap.set(pieceToChange, piece);
                    console.log(`Changed the key of ${pieceToChange} to ${newKey}!`);
                } else {
                    console.log(`Invalid operation! ${pieceToChange} does not exist in the collection.`);
                }
                break;
        }
    }

    for (let [piece, info] of organizedPiecesMap.entries()) {
        console.log(`${piece} -> Composer: ${info.composer}, Key: ${info.key}`);
    }
}

//organizeRepertoire([
//  '3',
//  'Fur Elise|Beethoven|A Minor',
// 'Moonlight Sonata|Beethoven|C# Minor',
//  'Clair de Lune|Debussy|C# Minor',
//  'Add|Sonata No.2|Chopin|B Minor',
//  'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
//  'Add|Fur Elise|Beethoven|C# Minor',
//  'Remove|Clair de Lune',
// 'ChangeKey|Moonlight Sonata|C# Major',
//  'Stop'  
//]);
