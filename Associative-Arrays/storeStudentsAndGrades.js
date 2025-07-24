function storeStudentsAndGrades(input) {
    let map = new Map();

//    for (let data of input) {
//        let parts = data.split(' ');
//        let studentName = parts[0];
//        let grades = [];

//       for (let i = 1; i < length; i++) {
//            let currGrade = Number(parts[i]);
//            grades.push(currGrade);
//        }
//    }

    for (let data of input) {
        let [name, ...grades] = data.split(' ');
        
        grades = grades.map(Number);

        if (map.has(name)) {
            let currentGrades = map.get(name);

//            for (let grade of grades) {
//                currentGrades.push(grade);
//            }

        currentGrades = currentGrades.concat(grades);

            map.set(name, currentGrades);
        } else {
            map.set(name, grades);
        }
    }

    let averageGrade = new Map();

    for (let [name, grades] of map) {
        let sum = 0;

        for (let grade of grades) {
            sum += grade
        }

        let average = sum / grades.length;

        averageGrade.set(name, average.toFixed(2));
    }

    let sortedResult = Array.from(averageGrade)
        .sort((a, b) => a[0].localeCompare(b[0]));

        for (let [name, averageGrade] of sortedResult) {
            console.log(`${name}: ${averageGrade}`);
        }
}

//storeStudentsAndGrades(['Steven 3 5 6 4',

//'George 4 6',

//'Tammy 2 5 3',

//'Steven 6 3']);
