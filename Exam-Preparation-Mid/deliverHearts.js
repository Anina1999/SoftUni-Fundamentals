function deliverHearts(inputArr) {
    let neighborhoodHeartsCount = inputArr.shift().split('@').map(x => Number(x));
    let currentPosition = 0;

    while (inputArr.length > 0) {
        let command = inputArr.shift();
        if (command === "Love!") {
            break;
        }

        let commandLength = Number(command.split(' ')[1]);
        currentPosition += commandLength;

        if (currentPosition >= neighborhoodHeartsCount.length) {
            currentPosition = 0;
        }

        if (neighborhoodHeartsCount[currentPosition] === 0) {
            console.log(`Place ${currentPosition} already had Valentine's day.`);
        } else {
            neighborhoodHeartsCount[currentPosition] -= 2;
            if (neighborhoodHeartsCount[currentPosition] === 0) {
                console.log(`Place ${currentPosition} has Valentine's day.`);
            }
        }
    }

    console.log(`Cupid's last position was ${currentPosition}.`);

    let failedPlaces = neighborhoodHeartsCount.filter(h => h > 0).length;
    if (failedPlaces === 0) {
        console.log("Mission was successful.");
    } else {
        console.log(`Cupid has failed ${failedPlaces} places.`);
    }
}

//deliverHearts(["10@10@10@2",

//"Jump 1",

//"Jump 2",

//"Love!"]);
//deliverHearts(["2@4@2",

//"Jump 2",

//"Jump 2",

//"Jump 8",

//"Jump 3",

//"Jump 1",

//"Love!"]);
