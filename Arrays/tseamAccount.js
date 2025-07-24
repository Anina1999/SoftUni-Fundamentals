function tseamAccount(arr) {
    let games = arr[0].split(' ');

    for (let i = 1; i < arr.length; i++) {
        let line = arr[i];
        if (line === 'Play!') {
            break;
        }

        let parts = line.split(' ');
        let command = parts[0];
        let item = parts.slice(1).join(' ');

        if (command === 'Install') {
            // Проверяваме дали играта я няма в масива
            let exists = false;
            for (let j = 0; j < games.length; j++) {
                if (games[j] === item) {
                    exists = true;
                    break;
                }
            }
            if (!exists) {
                games.push(item);
            }
        } else if (command === 'Uninstall') {
            for (let j = 0; j < games.length; j++) {
                if (games[j] === item) {
                    games.splice(j, 1);
                    break;
                }
            }
        } else if (command === 'Update') {
            for (let j = 0; j < games.length; j++) {
                if (games[j] === item) {
                    games.splice(j, 1);
                    games.push(item);
                    break;
                }
            }
        } else if (command === 'Expansion') {
            let partsExpansion = item.split('-');
            let game = partsExpansion[0];
            let expansion = partsExpansion[1];

            for (let j = 0; j < games.length; j++) {
                if (games[j] === game) {
                    games.splice(j + 1, 0, game + ':' + expansion);
                    break;
                }
            }
        }
    }

    console.log(games.join(' '));
}
    
//tseamAccount(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!']);
//tseamAccount(['CS WoW Diablo', 'Uninstall XCOM', 'Update PeshoGame', 'Update WoW', 'Expansion Civ-V', 'Play!'] );
