function plantDiscovery(arr) {
    let number = Number(arr.shift());
    let plantArr = arr.splice(0, number);
    
    let plantMap = new Map();

    for (let entry of plantArr) {
        let [plant, rarity] = entry.split('<->');
        rarity = Number(rarity);
        if (!plantMap.has(plant)) {
            plantMap.set(plant, { rarity: rarity, ratings: [] });
        } else {
            plantMap.get(plant).rarity = rarity; // update rarity if repeated
        }
    }

    let command;
    while ((command = arr.shift()) !== 'Exhibition') {
        let [comm, elements] = command.split(': ');
        let [plant, rating] = elements.split(' - ');
        rating = Number(rating);

        if (!plantMap.has(plant)) {
            console.log("error");
            continue;
        }

        if (comm === 'Rate') {
            plantMap.get(plant).ratings.push(rating);
        } else if (comm === 'Update') {
            plantMap.get(plant).rarity = rating;
        } else if (comm === 'Reset') {
            plantMap.get(plant).ratings = [];
        } else {
            console.log("error");
        }
    }

    console.log("Plants for the exhibition:");
    for (let [plant, data] of plantMap.entries()) {
        let avgRating = 0;
        if (data.ratings.length > 0) {
            avgRating = data.ratings.reduce((a, b) => a + b, 0) / data.ratings.length;
        }
        console.log(`- ${plant}; Rarity: ${data.rarity}; Rating: ${avgRating.toFixed(2)}`);
    }
}

//plantDiscovery(["3",
//"Arnoldii<->4",
//"Woodii<->7",
//"Welwitschia<->2",
//"Rate: Woodii - 10",
//"Rate: Welwitschia - 7",
//"Rate: Arnoldii - 3",
//"Rate: Woodii - 5",
//"Update: Woodii - 5",
//"Reset: Arnoldii",
//"Exhibition"]);
