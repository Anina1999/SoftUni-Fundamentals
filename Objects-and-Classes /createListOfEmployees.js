function createListOfEmployees(inputArr) {
 //   class Employee {
 //       constructor(employeeName, personalNumber) {
 //           this.employeeName = employeeName;
 //          this.personalNumber = personalNumber;
 //       }
 //   };

 //   let objectResult = {};

 //   for (let i = 0; i < inputArr.length; i++) {
 //       let index = inputArr[i];
 //       objectResult.name = index;
 //       objectResult.personalNumber = index.length;

 //       let employeeResult = new Employee(objectResult.name, objectResult.personalNumber);

 //       console.log(`Name: ${employeeResult.employeeName} -- Personal Number: ${employeeResult.personalNumber}`);
 //   }

    let result = [];

    for (let employee of inputArr) {
    let employeeObj = {
        'name' : employee,
        'personalNumber' : employee.length
        };
        result.push(employeeObj);
    }
    

    result.forEach((em) => {
        console.log(`Name: ${em.name} -- Personal Number: ${em.personalNumber}`);
    })
}

//createListOfEmployees([

//'Silas Butler',

//'Adnaan Buckley',

//'Juan Peterson',

//'Brendan Villarreal'

//]);

//createListOfEmployees([

//'Samuel Jackson',

//'Will Smith',

//'Bruce Willis',

//'Tom Holland'

//]);
