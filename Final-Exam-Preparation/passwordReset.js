//solve #1
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


//solve #2
function passwordReset(input) {
    let password = input.shift();
    for (let commandLine of input) {
        if (commandLine === 'Done') {
            console.log(`Your password is: ${password}`);
            break;
        }
        let [command, ...args] = commandLine.split(' ');

        switch (command) {
            case 'TakeOdd':
                let newPassword = '';
                for (let i = 1; i < password.length; i += 2) {
                    newPassword += password[i];
                }
                password = newPassword;
                console.log(password);
                break;
            
            case 'Cut':
                let index = Number(args[0]);
                let length = Number(args[1]);
                let substring = password.substring(index, index + length);
                password = password.replace(substring, '');
                console.log(password);
                break;

            case 'Substitute':
                let substr = args[0];
                let replacement = args[1];
                if (password.includes(substr)) {
                    let regex = new RegExp(substr, "g"); //търси всички съвпадения, а не само първото
                    password = password.replace(regex, replacement);
                    console.log(password);
                } else {
                    console.log('Nothing to replace!');
                }
        }
    }
}
