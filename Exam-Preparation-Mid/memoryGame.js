function memoryGame(inputArr) {
    let slicedArr = inputArr.slice();
    let elements = slicedArr.shift().split(' ');
    let count = 0;

    while (slicedArr[count] !== 'end') {
        let command = slicedArr[count].split(' ');
        let firstIndex = Number(command[0]);
        let secondIndex = Number(command[1]);
        count++;

        if ((firstIndex === secondIndex) || firstIndex < 0 
            || secondIndex < 0 || firstIndex >= elements.length 
            || secondIndex >= elements.length) {
                
            let twoMatchingElements = `-${count}a`;
            let addedIndexinTheMid = Math.floor(elements.length / 2);

            elements.splice(addedIndexinTheMid, 0, twoMatchingElements, twoMatchingElements);
            console.log("Invalid input! Adding additional elements to the board");

        } else if (elements[firstIndex] === elements[secondIndex]) {
            let matchedElement = elements[firstIndex];
            console.log(`Congrats! You have found matching elements - ${matchedElement}!`);
            if (firstIndex > secondIndex) {
                elements.splice(firstIndex, 1);
                elements.splice(secondIndex, 1);
            } else {
                elements.splice(secondIndex, 1);
                elements.splice(firstIndex, 1);
            }
        } else {
            console.log("Try again!");
        }

        if (elements.length === 0) {
            console.log(`You have won in ${count} turns!`);
            return;
        }
    }
    console.log("Sorry you lose :(");
    console.log(elements.join(' '));
}

//memoryGame(["1 1 2 2 3 3 4 4 5 5", 
//"1 0",
//"-1 0",
//"1 0", 
//"1 0", 
//"1 0", 
//"end"
//]);
//memoryGame(["a 2 4 a 2 4", 
//"0 3", 
//"0 2",
//"0 1",
//"0 1", 
//"end"
//]);
//memoryGame(["a 2 4 a 2 4", 
//"4 0", 
//"0 2",
//"0 1",
//"0 1", 
//"end"
//])
