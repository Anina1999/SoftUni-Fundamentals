function matchFullName(input) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let results = input.matchAll(pattern);

    let output = [];

    for (let match of results) {
        output.push(match[0]);
    }
    console.log(output.join(' '));
}

//matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov");
