function vacation(groupOfPeople, typeOfTheGroup, dayOfTheWeek ) {
    //logic
    let total = 0
    switch (typeOfTheGroup) {
        case'Students':
        switch (dayOfTheWeek) {
            case 'Friday':
                total = groupOfPeople * 8.45;
                break;
            case 'Saturday':
                total = groupOfPeople * 9.80;
                break;
            case 'Sunday':
                total = groupOfPeople * 10.46;
                break;
        }
        if (groupOfPeople >= 30) {total *= 0.85;}
        break;
        case 'Business':
            if (groupOfPeople >= 100) {groupOfPeople -= 10;}
            switch (dayOfTheWeek) {
                case 'Friday':
                    total = groupOfPeople * 10.90;
                    break;
                case 'Saturday':
                    total = groupOfPeople * 15.60;
                    break;
                case 'Sunday':
                    total = groupOfPeople * 16;
                    break;
            }
            break;
        case 'Regular':
            switch (dayOfTheWeek) {
                case 'Friday':
                    total = groupOfPeople * 15;
                    break;
                case 'Saturday':
                    total = groupOfPeople * 20;
                    break;
                case 'Sunday':
                    total = groupOfPeople * 22.50;
                    break;
            }
            if (groupOfPeople >= 10 && groupOfPeople <= 20) {total *= 0.95;}
            break;
    }
    //Return result
    console.log(`Total price: ${total.toFixed(2)}`);
}

//vacation(40, "Regular", "Saturday");
