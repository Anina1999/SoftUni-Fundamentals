function bonusScoringSystem(inputArr) {
    let arr = inputArr.slice().map(Number);
    let numberOfStudents = arr.shift();
    let numberOfLecturers = arr.shift();
    let additionalBonus = arr.shift();

    if (numberOfStudents === 0) {
        console.log(`Max Bonus: 0.`);
        console.log(`The student has attended 0 lectures.`);
        return;
    }

    let countOfStudentAttendances = [];

    for (let i = 0; i < numberOfStudents; i++) {
        let lecturesAttended = arr[i];
        countOfStudentAttendances.push(lecturesAttended);
    }

    function calculateBonus(attendances, numLectures, bonus) {
        let bonuses = [];
        for (let i = 0; i < attendances.length; i++) {
            let bonusForStudent = attendances[i] / numLectures * (5 + bonus);
            bonuses.push(bonusForStudent);
        }
        return bonuses;
    }

    let bonusCalculated = calculateBonus(countOfStudentAttendances, numberOfLecturers, additionalBonus);

    let maxBonusExact = bonusCalculated[0];
    let maxIndex = 0;
    for (let i = 1; i < bonusCalculated.length; i++) {
        if (bonusCalculated[i] > maxBonusExact) {
            maxBonusExact = bonusCalculated[i];
            maxIndex = i;
        }
    }

    let studentHighestBonus = Math.ceil(maxBonusExact);
    let studentAttendaces = countOfStudentAttendances[maxIndex];

    console.log(`Max Bonus: ${studentHighestBonus}.`);
    console.log(`The student has attended ${studentAttendaces} lectures.`);
}

//bonusScoringSystem([

//'5', '25', '30',

//'12', '19', '24',

//'16', '20'

//]);
//bonusScoringSystem([

//'10', '30', '14', '8',

//'23', '27', '28', '15',

//'17', '25', '26', '5',

//'18'

//]);
