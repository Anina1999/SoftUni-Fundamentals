function farmLegendaryItem(input) {
    let inputArr = input.toLowerCase().split(' ');

    let keyMaterials = { shards: 0, fragments: 0, motes: 0 };
    let junkMaterials = {};
    let obtainedItem = '';
    let legendaryObtained = false;

    const itemMap = {
        shards: 'Shadowmourne',
        fragments: 'Valanyr',
        motes: 'Dragonwrath'
    };

    function collectMaterial(quantity, material) {
        if (material in keyMaterials) {
            keyMaterials[material] += quantity;
            checkLegendary(material);
        } else {
            if (!junkMaterials.hasOwnProperty(material)) {
                junkMaterials[material] = 0;
            }
            junkMaterials[material] += quantity;
        }
    }

    function checkLegendary(material) {
        if (!legendaryObtained && keyMaterials[material] >= 250) {
            keyMaterials[material] -= 250;
            obtainedItem = material;
            legendaryObtained = true;
        }
    }

    function printLegendaryResult() {
        console.log(`${itemMap[obtainedItem]} obtained!`);

        let sortedKeyMaterials = Object.entries(keyMaterials)
            .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

        for (let [material, qty] of sortedKeyMaterials) {
            console.log(`${material}: ${qty}`);
        }

        let sortedJunk = Object.entries(junkMaterials)
            .sort((a, b) => a[0].localeCompare(b[0]));

        for (let [material, qty] of sortedJunk) {
            console.log(`${material}: ${qty}`);
        }
    }

    for (let i = 0; i < inputArr.length; i += 2) {
        let quantity = Number(inputArr[i]);
        let material = inputArr[i + 1];
        collectMaterial(quantity, material);
        if (legendaryObtained) break;
    }

    printLegendaryResult();
}


//farmLegendaryItem ('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');
