function commonElements(firstArr, secondArr) {

    while (true) {
        for (let i = 0; i < firstArr.length; i++) {
            let currentElementOfFirstArr = firstArr[i];
        
            for (let j = 0; j < secondArr.length; j++) {
            let currentElementOfSecondArr = secondArr[j];

                if (currentElementOfFirstArr === currentElementOfSecondArr) {
                    
                console.log(currentElementOfFirstArr);
                }
            }
        }
        break;
    }
}

//commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],

//['Petar', 10, 'hey', 4, 'hello', '2']);

//commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],

//['s', 'o', 'c', 'i', 'a', 'l']);
