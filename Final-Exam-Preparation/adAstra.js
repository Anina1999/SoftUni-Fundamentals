//solve #1
function adAstra(data) {
    let pattern = /([#|])(?<itemName>[A-Za-z\s]+)\1(?<expirationDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;

    let totalCalories = 0;
    let matches = data[0].matchAll(pattern);
    let items = [];

    for (let match of matches) {
        let itemName = match.groups['itemName'];
        let expirationDate = match.groups['expirationDate'];
        let calories = Number(match.groups['calories']);

        totalCalories += calories;

        items.push({
            itemName,
            expirationDate,
            calories
        });
    }

    let daysUntilFoodIsOver = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${daysUntilFoodIsOver} days!`);

    for (let item of items) {
        console.log(`Item: ${item.itemName}, Best before: ${item.expirationDate}, Nutrition: ${item.calories}`);
    }
}

//adAstra([

//'#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500|| Not right|6.8.20|5|']);



//solve #2
function adAstra(input) {
    let pattern = /([#|])(?<item>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;
    let totalCalories = 0;
    let foodItems = [];

    let match;
    while ((match = pattern.exec(input)) !== null) {
        let item = match.groups.item;
        let date = match.groups.date;
        let calories = Number(match.groups.calories);
        totalCalories += calories;
        foodItems.push({item, date, calories});
    }

    let days = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${days} days!`);

    for (let food of foodItems) {
        console.log(`Item: ${food.item}, Best before: ${food.date}, Nutrition: ${food.calories}`);
    }
}
