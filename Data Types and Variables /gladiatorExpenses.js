function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    //logic
    let brokenHelmet = parseInt(lostFightsCount / 2);
    let brokenSword = parseInt(lostFightsCount / 3);
    let brokenShield = parseInt(lostFightsCount / 6);
    let brokenArmor = parseInt(brokenShield / 2);
    let expenses = brokenHelmet * helmetPrice + brokenSword * swordPrice + brokenShield * shieldPrice + brokenArmor * armorPrice;
    
    //return result
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

//gladiatorExpenses(7, 2, 3, 4, 5);
//gladiatorExpenses(23, 12.50, 21.50, 40, 200);
