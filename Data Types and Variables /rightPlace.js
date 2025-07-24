function rightPlace(string, char, secondString) {
    let result = string.replace('_', char);

    if (result === secondString) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }

}

//rightPlace('Str_ng', 'i', 'String');
