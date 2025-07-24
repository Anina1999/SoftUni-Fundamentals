//solve #1
function cutAndReverse(text) {
    let firstHalf = [];
    let secondHalf = [];
    let mid = text.length / 2;

    for (let i = 0; i < text.length; i++) {
        if (i < mid) {
            firstHalf.push(text[i]);
        } else {
            secondHalf.push(text[i]);
        }
    }

    console.log(firstHalf.reverse().join(''));
    console.log(secondHalf.reverse().join(''));
}

//cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');

//solve #2
function cutAndReverse(str) {
    let mid = Math.floor(str.length) / 2;
    let firstHalf = str.substring(0, mid);
    let secondHald = str.substring(mid);

    let reversed = firstHalf.split('').reverse().join('');
    let reversedSecond = secondHald.split('').reverse().join('');

    console.log(reversed);
    console.log(reversedSecond);
}
