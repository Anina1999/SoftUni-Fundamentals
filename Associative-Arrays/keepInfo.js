//solve #1
function keepInfo(input) {
    const companies = {};

    for (let entry of input) {
        const [companyName, employeeId] = entry.split(' -> ');

        if (!companies[companyName]) {
            companies[companyName] = new Set();
        }

        companies[companyName].add(employeeId);
    }

    const sortedCompanyNames = Object.keys(companies).sort();

    for (let company of sortedCompanyNames) {
        console.log(company);
        for (let id of companies[company]) {
            console.log(`-- ${id}`);
        }
    }
}

//keepInfo ([ 'SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345' ]);

//solve #2
function companyUsers(input) {
    let companyMap = new Map();

    for (let line of input) {
        let [company, employeeId] = line.split(' -> ');
        if (!companyMap.has(company)) {
            companyMap.set(company, new Set());
        }
        companyMap.get(company).add(employeeId);
    }
    //let sortedCompany = Array.from(companyMap.entries())
    //    .sort((a, b) => a[0].localeCompare(b[0])); 
    let sortedCompany = [...companyMap.entries()].sort((a, b) => a[0].localeCompare(b[0]));

    for (let [company, employees] of sortedCompany) {
        console.log(company);
        for (let id of employees) {
            console.log(`-- ${id}`);
        }
    }
}
