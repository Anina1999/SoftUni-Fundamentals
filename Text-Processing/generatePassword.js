function generatePassword(arr) {
    let [firstStr, secondStr, word] = arr;

    const concatenatedStr = firstStr.concat(secondStr).toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let changeIndex = 0;

    let result = '';

    for (let char of concatenatedStr) {
        if (vowels.includes(char)) {
            let index = changeIndex % word.length;
            let changeChar = word[index].toUpperCase();
            result += changeChar;
            changeIndex++;
        } else {
            result += char.toLowerCase();
        }
    }

    let reversedPassword = result.split('').reverse().join('');

    console.log(`Your generated password is ${reversedPassword}`);
}

//generatePassword([

//'ilovepizza',

//'ihatevegetables',

//'orange'

//]);
