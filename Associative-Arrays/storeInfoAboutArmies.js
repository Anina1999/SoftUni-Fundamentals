function storeInfoAboutArmies(inputArr) {
    let leaderMap = new Map();

    function addLeader(leader) {
        if (!leaderMap.has(leader)) {
            leaderMap.set(leader, { armies: new Map(), total: 0 });
        }
    }

    function addArmy(leader, armyName, armyCount) {
        if (leaderMap.has(leader)) {
            let leaderData = leaderMap.get(leader);
            leaderData.armies.set(armyName, armyCount);
            leaderData.total += armyCount;
        }
    }

    function addToArmy(armyName, extraCount) {
        for (let [leader, leaderData] of leaderMap) {
            if (leaderData.armies.has(armyName)) {
                let currentCount = leaderData.armies.get(armyName);
                leaderData.armies.set(armyName, currentCount + extraCount);
                leaderData.total += extraCount;
            }
        }
    }

    function defeatLeader(leader) {
        if (leaderMap.has(leader)) {
            leaderMap.delete(leader);
        }
    }

    function printResult() {
        let sortedLeaders = Array.from(leaderMap.entries())
            .sort((a, b) => b[1].total - a[1].total);

        for (let [leader, leaderData] of sortedLeaders) {
            console.log(`${leader}: ${leaderData.total}`);

            let sortedArmies = Array.from(leaderData.armies.entries())
                .sort((a, b) => b[1] - a[1]);

            for (let [armyName, count] of sortedArmies) {
                console.log(`>>> ${armyName} - ${count}`);
            }
        }
    }

    for (let line of inputArr) {
        if (line.includes(' arrives')) {
            let leader = line.split(' arrives')[0];
            addLeader(leader);
        }
        else if (line.includes(':')) {
            let [leader, armyData] = line.split(': ');
            let [armyName, armyCountStr] = armyData.split(', ');
            let armyCount = Number(armyCountStr);
            addArmy(leader, armyName, armyCount);
        }
        else if (line.includes(' + ')) {
            let [armyName, extraCountStr] = line.split(' + ');
            let extraCount = Number(extraCountStr);
            addToArmy(armyName, extraCount);
        }
        else if (line.includes(' defeated')) {
            let leader = line.split(' defeated')[0];
            defeatLeader(leader);
        }
    }

    printResult();
}

//storeInfoAboutArmies (['Rick Burr arrives', 
//                    'Fergus: Wexamp, 30245', 
//                    'Rick Burr: Juard, 50000', 
//                    'Findlay arrives', 
//                    'Findlay: Britox, 34540', 
//                    'Wexamp + 6000',
//                   'Juard + 1350', 
//                    'Britox + 4500',
//                    'Porter arrives', 
//                    'Porter: Legion, 55000', 
//                    'Legion + 302', 
//                    'Rick Burr defeated', 
//                    'Porter: Retix, 3205']);
