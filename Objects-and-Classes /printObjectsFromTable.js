function printObjectsFromTable(inputArr) {
//    for (let objects of inputArr) {
//        let currentObject = objects.split(' | ');
        
//        let objectArr = {};
//        objectArr.name = currentObject[0];
//        objectArr.latitude = Number(currentObject[1]).toFixed(2);
//        objectArr.longitude = Number(currentObject[2]).toFixed(2);

//        console.log(`{ town: '${objectArr.name}', latitude: '${objectArr.latitude}', longitude: '${objectArr.longitude}' }`);
//    }

    let result = [];

    for (let record of inputArr) {
        [cityName, lat, lon] = record.split(' | ');
        let city = {
            'town' : cityName,
            'latitude' : Number(lat).toFixed(2),
            'longitude' : Number(lon).toFixed(2)
        };
        result.push(city);
    }

    for (let town of result) {
        console.log(town);
    }
}

//printObjectsFromTable(['Sofia | 42.696552 | 23.32601',

//'Beijing | 39.913818 | 116.363625']);
//printObjectsFromTable(['Plovdiv | 136.45 | 812.575']);
