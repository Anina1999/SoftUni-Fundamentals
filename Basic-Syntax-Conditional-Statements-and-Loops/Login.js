function login(arr) {
    let username = arr[0];
    let password = arr[0].split('').reverse().join('');
    let attempts = 0;

    //for (let i = username.length - 1; i >= 0; i--) {
        //password += username[i];
    //}
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === password) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            attempts++;
            if (attempts < 4) {
                console.log('Incorrect password. Try again.');
            } else {
                console.log(`User ${username} blocked!`);
                break;
            }
        }
    }
}

//login['sunny','rainy','cloudy','sunny','not sunny'];
