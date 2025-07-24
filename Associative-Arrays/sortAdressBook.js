function sortAdressBook(data) {
    let adressBook = {};
    for (let entry of data) {
        let parsedData = entry.split(':');

        [fullName, adress] = parsedData;

        adressBook[fullName] = adress;
    }

    let adressBookEntries = Object.entries(adressBook);
    adressBookEntries.sort((first, second) => {
        let firstKey = first[0];
        let secondKey = second[0];

        return firstKey.localeCompare(secondKey);
    });

    for (let [fullName, adress] of adressBookEntries) {
        console.log(`${fullName} -> ${adress}`);
    }
}

//sortAdressBook(['Bob:Huxley Rd',

//'John:Milwaukee Crossing',

//'Peter:Fordem Ave',

//'Bob:Redwing Ave',

//'George:Mesta Crossing', 

//'Ted:Gateway Way',

//'Bill:Gateway Way',

//'John:Grover Rd',

//'Peter:Huxley Rd',

//'Jeff:Gateway Way',

//'Jeff:Huxley Rd']);
