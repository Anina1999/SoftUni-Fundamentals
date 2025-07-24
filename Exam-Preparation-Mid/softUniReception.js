function softUniReception(arr) {
    let inputArr = arr.slice().map(x => Number(x));
    let firstEmployeePerHour = inputArr.shift();
    let secondEmployeePerHour = inputArr.shift();
    let thirdEmployeePerHour = inputArr.shift();
    let totalStudentsForTheDay = inputArr[0];

    let hourNeededToRespond = 0;

    while (totalStudentsForTheDay > 0) {
        hourNeededToRespond++;

        if (hourNeededToRespond % 4 === 0) {
            continue;
        }
        
        totalStudentsForTheDay -= (firstEmployeePerHour + secondEmployeePerHour + thirdEmployeePerHour);
    }

    console.log(`Time needed: ${hourNeededToRespond}h.`);
}

//softUniReception(['5','6','4','20']);
//softUniReception(['1','2','3','45']);
