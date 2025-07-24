function storeStudentsInCourses(input) {
    let courseMap = new Map();

    function processMap(arr) {
        for (let line of arr) {
            if (line.includes(': ')) {
                let [courseName, capacity] = line.split(': ');
                capacity = Number(capacity);
                if (!courseMap.has(courseName)) {
                    courseMap.set(courseName, {
                        capacity: capacity,
                        students: []
                    });
                } else {
                    courseMap.get(courseName).capacity += capacity;
                }
            } else if (line.startsWith('user')) {
                let [userPart, rest] = line.split(' with email ');
                let [username, credits] = userPart.split('[');
                credits = Number(credits.replace(']', ''));
                let [email, courseName] = rest.split(' joins ');

                if (courseMap.has(courseName)) {
                    let course = courseMap.get(courseName);
                    if (course.students.length < course.capacity) {
                        course.students.push({
                            username: username.trim(),
                            email: email.trim(),
                            credits: credits
                        });
                    }
                }
            }
        }
    }

    processMap(input);

    let sortedCourses = Array.from(courseMap.entries())
        .sort((a, b) => b[1].students.length - a[1].students.length);

    for (let [courseName, data] of sortedCourses) {
        let placesLeft = data.capacity - data.students.length;
        console.log(`${courseName}: ${placesLeft} places left`);

        let sortedStudents = data.students.sort((a, b) => b.credits - a.credits);
        for (let student of sortedStudents) {
            console.log(`--- ${student.credits}: ${student.username}, ${student.email}`);
        }
    }
}

//storeStudentsInCourses(['JavaBasics: 15',

//'user1[26] with email user1@user.com joins JavaBasics',

//'user2[36] with email user11@user.com joins JavaBasics',

//'JavaBasics: 5', 'C#Advanced: 5',

//'user1[26] with email user1@user.com joins C#Advanced',

//'user2[36] with email user11@user.com joins C#Advanced',

//'user3[6] with email user3@user.com joins C#Advanced',

//'C#Advanced: 1',

//'JSCore: 8',

//'user23[62] with email user23@user.com joins JSCore']);
