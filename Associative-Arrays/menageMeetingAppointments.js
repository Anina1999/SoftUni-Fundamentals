function menageMeetingAppointments(meetings) {
    let calendarOfMeetings = {};

    for (let entry of meetings) {
        let parsedMeeting = entry.split(' ');

        [weekday, fullName] = parsedMeeting;

        if (calendarOfMeetings.hasOwnProperty(weekday)) {
            console.log(`Conflict on ${weekday}!`);
        } else {
            calendarOfMeetings[weekday] = fullName;
            console.log(`Scheduled for ${weekday}`);
        }
    }

    for (let key in calendarOfMeetings) {
        console.log(`${key} -> ${calendarOfMeetings[key]}`);
    }
}

//menageMeetingAppointments(['Monday Peter',

//'Wednesday Bill',

//'Monday Tim',

//'Friday Tim']);
