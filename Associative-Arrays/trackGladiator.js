function trackGladiator(input) {
    let gladiatorMap = new Map();

    for (let line of input) {
        if (line === 'Ave Cesar') break;

        if (line.includes(' -> ')) {
            let [gladiator, technique, skillStr] = line.split(' -> ');
            let skill = Number(skillStr);

            if (!gladiatorMap.has(gladiator)) {
                gladiatorMap.set(gladiator, new Map());
            }

            let techMap = gladiatorMap.get(gladiator);

            if (!techMap.has(technique)) {
                techMap.set(technique, skill);
            } else {
                let existingSkill = techMap.get(technique);
                if (skill > existingSkill) {
                    techMap.set(technique, skill);
                }
            }
        }

        if (line.includes(' vs ')) {
            let [gladiator1, gladiator2] = line.split(' vs ');

            if (gladiatorMap.has(gladiator1) && gladiatorMap.has(gladiator2)) {
                let techniques1 = gladiatorMap.get(gladiator1);
                let techniques2 = gladiatorMap.get(gladiator2);

                let commonTechnique = false;

                for (let tech of techniques1.keys()) {
                    if (techniques2.has(tech)) {
                        commonTechnique = true;
                        break;
                    }
                }

                if (commonTechnique) {
                    let totalSkill1 = [...techniques1.values()].reduce((a, b) => a + b, 0);
                    let totalSkill2 = [...techniques2.values()].reduce((a, b) => a + b, 0);

                    if (totalSkill1 > totalSkill2) {
                        gladiatorMap.delete(gladiator2);
                    } else if (totalSkill2 > totalSkill1) {
                        gladiatorMap.delete(gladiator1);
                    }
                }
            }
        }
    }

    let sortedGladiators = [...gladiatorMap.entries()]
        .map(([name, techniques]) => {
            let totalSkill = [...techniques.values()].reduce((a, b) => a + b, 0);
            return { name, totalSkill, techniques };
        })
        .sort((a, b) => b.totalSkill - a.totalSkill || a.name.localeCompare(b.name));

    for (let gladiator of sortedGladiators) {
        console.log(`${gladiator.name}: ${gladiator.totalSkill} skill`);
        let sortedTechniques = [...gladiator.techniques.entries()]
            .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

        for (let [technique, skill] of sortedTechniques) {
            console.log(`- ${technique} <!> ${skill}`);
        }
    }
}

//trackGladiator([ 'Peter -> Duck -> 400', 'Julius -> Shield -> 150',
//     'Gladius -> Heal -> 200', 'Gladius -> Support -> 250', 
//     'Gladius -> Shield -> 250', 'Peter vs Gladius', 
//     'Gladius vs Julius', 'Gladius vs Maximilian', 'Ave Cesar' ]);
