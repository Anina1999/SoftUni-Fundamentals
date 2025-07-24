function gladiatorInventory(arr) {
    let inventoryEquipment = arr.shift().split(' ');

    let commands = arr.map(line => line.split(' ')[0]);     
    let equipment = arr.map(line => line.split(' ')[1]);    

    for (let i = 0; i < commands.length; i++) {
        let currentCommand = commands[i];
        let currentEquipment = equipment[i];

        if (currentCommand === 'Buy') {
            if (!inventoryEquipment.includes(currentEquipment)) {
                inventoryEquipment.push(currentEquipment);
            }

        } else if (currentCommand === 'Trash') {
            if (inventoryEquipment.includes(currentEquipment)) {
                let index = inventoryEquipment.indexOf(currentEquipment);
                inventoryEquipment.splice(index, 1);
            }

        } else if (currentCommand === 'Repair') {
            if (inventoryEquipment.includes(currentEquipment)) {
                let index = inventoryEquipment.indexOf(currentEquipment);
                let itemToRepair = inventoryEquipment.splice(index, 1)[0];
                inventoryEquipment.push(itemToRepair);
            }

        } else if (currentCommand === 'Upgrade') {
            let [baseItem, upgrade] = currentEquipment.split('-');
            
            if (inventoryEquipment.includes(baseItem)) {
                let index = inventoryEquipment.indexOf(baseItem);
                inventoryEquipment.splice(index + 1, 0, `${baseItem}:${upgrade}`);
            }
        }
    }
    console.log(inventoryEquipment.join(' '));
}
