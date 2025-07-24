function radioCrystals(arr) {
    function cut(x) {
        return x / 4;
    }

    function lap(x) {
        return x * 0.8;
    }

    function grind(x) {
        return x - 20;
    }

    function etch(x) {
        return x - 2;
    }

    function xray(x) {
        return x + 1;
    }

    function transportAndWash(x) {
        x = Math.floor(x);
        console.log("Transporting and washing");
        return x;
    }

    function processOperations(crystal, desiredFrequency) {
        let count;

        count = 0;
        while (cut(crystal) >= desiredFrequency) {
            crystal = cut(crystal);
            count++;
        }
        if (count > 0) {
            console.log(`Cut x${count}`);
            crystal = transportAndWash(crystal);
        }

        count = 0;
        while (lap(crystal) >= desiredFrequency) {
            crystal = lap(crystal);
            count++;
        }
        if (count > 0) {
            console.log(`Lap x${count}`);
            crystal = transportAndWash(crystal);
        }

        count = 0;
        while (grind(crystal) >= desiredFrequency) {
            crystal = grind(crystal);
            count++;
        }
        if (count > 0) {
            console.log(`Grind x${count}`);
            crystal = transportAndWash(crystal);
        }

        count = 0;
        while (etch(crystal) >= desiredFrequency - 1) {
            crystal = etch(crystal);
            count++;
        }
        if (count > 0) {
            console.log(`Etch x${count}`);
            crystal = transportAndWash(crystal);
        }

        if (crystal === desiredFrequency - 1) {
            crystal = xray(crystal);
            console.log("X-ray x1");
        }

        return crystal;
    }

    let desiredFrequency = arr[0];
    let thicknessChunks = arr.slice(1);

    for (let i = 0; i < thicknessChunks.length; i++) {
        let chunk = thicknessChunks[i];
        console.log(`Processing chunk ${chunk} microns`);
        chunk = processOperations(chunk, desiredFrequency);
        console.log(`Finished crystal ${desiredFrequency} microns`);
    }
}

//radioCrystals([1375, 50000]);
