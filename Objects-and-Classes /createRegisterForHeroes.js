function createRegisterForHeroes(inputArr) {
//    let hero = [];

//    for (let line of inputArr) {
//        let lineArr = line.split(' / ');
//       let name = lineArr[0];
//        let level = Number(lineArr[1]);
//        let items = lineArr[2] ? lineArr[2] : '';

//        hero.push({
//            name: name,
//            level: level,
//            items: items
//        });
//    }

//    hero.sort((a, b) => a.level - b.level);

//    for (let h of hero) {
//        console.log(`Hero: ${h.name}`);
//        console.log(`level => ${h.level}`);
//        console.log(`items => ${h.items}`);
//    }

    let hero = [];

    for (let line of inputArr) {
        let lineArr = line.split(' / ');
        let name = lineArr[0];
        let level = Number(lineArr[1]);

        let heroObj = {
            'name': name,
            'level': level
        };

        if (lineArr[2]) {
            let items = lineArr[2];
            heroObj.items = items;
        } else {
            heroObj.items = '';
        }

        hero.push(heroObj);
    }

    hero.sort((a, b) => a.level - b.level);

    for (let i = 0; i < hero.length; i++) {
        console.log(`Hero: ${hero[i].name}`);
        console.log(`level => ${hero[i].level}`);
        console.log(`items => ${hero[i].items}`);
    }

    // let heroes = [];
    // for (let line of inputArr) {
      // let [name, levelStr, itemsStr] = line.split(' / ');
      // let level = Number(levelStr);
      // let items = itemsStr ? itemsStr.split(', ').filter(i => i) : [];
      // heroes.push({name, level, items});
    //}

    // heroes.sort((a, b) => a.level - b.level);

    // for (let hero of heroes) {
    // console.log(`Hero: ${hero.name}`);
    // console.log(`level => ${hero.level});
    // console.log(`items => ${hero.items.join(', ')});
    //}
}



//createRegisterForHeroes([

//'Isacc / 25 / Apple, GravityGun',

//'Derek / 12 / BarrelVest, DestructionSword',

//'Hes / 1 / Desolator, Sentinel, Antara'

//]);
//createRegisterForHeroes([

//'Batman / 2 / Banana, Gun',

//'Superman / 18 / Sword',

//'Poppy / 28 / Sentinel, Antara'

//]);
