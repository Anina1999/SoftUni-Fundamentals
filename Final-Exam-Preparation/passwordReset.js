function passwordReset(inputArr) {
    let password = inputArr.shift();

    for (let line of inputArr) {
        if (line === 'Done') {
            console.log(`Your password is: ${password}`);
            break;
        }

        if (line === 'TakeOdd') {
            let newPassword = '';
            for (let i = 1; i < password.length; i += 2) {
                newPassword += password[i];
            }
            password = newPassword;
            console.log(password);

        } else {
            let parts = line.split(' ');
            let command = parts[0];

            if (command === 'Cut') {
                let index = Number(parts[1]);
                let length = Number(parts[2]);
                let substring = password.substring(index, index + length);
                password = password.replace(substring, '');
                console.log(password);

            } else if (command === 'Substitute') {
                let substring = parts[1];
                let substitute = parts[2];

                if (password.includes(substring)) {
                    while (password.includes(substring)) {
                        password = password.replace(substring, substitute);
                    }
                    console.log(password);
                } else {
                    console.log('Nothing to replace!');
                }
            }
        }
    }
}

//passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
//"TakeOdd",
//"Cut 15 3",
//"Substitute :: -",
//"Substitute | ^",
//"Done"]);
