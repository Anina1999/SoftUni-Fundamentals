function arrangeStudentsByGrade(inputArr) {
    let allStudents = [];

    for (let line of inputArr) {

        let parts = line.split(', ');
        let nameOfStudent = parts[0].split(': ')[1];
        let gradeOfStudent = Number(parts[1].split(': ')[1]);
        let averageScore = Number(parts[2].split(': ')[1]);
        
        if (averageScore < 3) {
            continue;
        } else if (averageScore > 3) {
            allStudents.push({
            nameOfStudent,
            gradeOfStudent: gradeOfStudent + 1,
            averageScore
        });
        }
    }

    let grades = {};
    for (let passedStudents of allStudents) {
        let grade = passedStudents.gradeOfStudent;

        if (grades[grade] === undefined) {
            grades[grade] = [];
        }   
        
        grades[grade].push(passedStudents);
    }
    
    let sortedGrade = Object.keys(grades).map(Number).sort((a, b) => a - b);
    for (let grade of sortedGrade) {
        let nextGrade = grades[grade];
        let studentsInThatGrade = nextGrade.map(n => n.nameOfStudent).join(', ');
        let avgScore = nextGrade
        .reduce((totalStudents, currStudent) => 
            totalStudents + currStudent.averageScore, 0) / nextGrade.length; 
        
        console.log(`${grade} Grade`);
        console.log(`List of students: ${studentsInThatGrade}`);
        console.log(`Average annual score from last year: ${avgScore.toFixed(2)}`);
        console.log('');
    }
}

//arrangeStudentsByGrade([

//"Student name: Mark, Grade: 8, Graduated with an average score: 4.75",

//"Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",

//"Student name: George, Grade: 8, Graduated with an average score: 2.83",

//"Student name: Steven, Grade: 10, Graduated with an average score: 4.20",

//"Student name: Joey, Grade: 9, Graduated with an average score: 4.90",

//"Student name: Angus, Grade: 11, Graduated with an average score: 2.90",

//"Student name: Bob, Grade: 11, Graduated with an average score: 5.15",

//"Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",

//"Student name: Bill, Grade: 9, Graduated with an average score: 6.00", 

//"Student name: Philip, Grade: 10, Graduated with an average score: 5.05", 

//"Student name: Peter, Grade: 11, Graduated with an average score: 4.88", 

//"Student name: Gavin, Grade: 10, Graduated with an average score: 4.00" ]);
