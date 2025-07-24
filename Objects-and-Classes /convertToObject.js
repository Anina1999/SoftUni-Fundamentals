function convertToObject(someDataFromJson) {
    let someDataToJS = JSON.parse(someDataFromJson);

    for (let [key, value] of Object.entries(someDataToJS)) {
        console.log(`${key}: ${value}`);
    }
}

//convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
