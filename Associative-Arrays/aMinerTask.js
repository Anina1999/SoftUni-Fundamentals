//solve #1
function aMinerTask(input) {
    let map = new Map();

    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let quantity = Number(input[i + 1]);

        map.set(resource, (map.get(resource) || 0) + quantity);
    }

    for (let [res, quant] of map) {
        console.log(`${res} -> ${quant}`);
    }
}

//aMinerTask ([ 'gold', '155', 'silver', '10', 'copper', '17', 'gold', '15' ]);

//solve #2
function aMinerTast(arr) {
    let resourcesArr = {};

    for (let i = 0; i < arr.length; i += 2) {
        let resource = arr[i];
        let quantity = Number(arr[i + 1]);

        if (!resourcesArr.hasOwnProperty(resource)) {
            resourcesArr[resource] = 0;
        }
        //resourcesArr[resource] = resourcesArr[resource] || 0;
        resourcesArr[resource] += quantity;
    }

    for (let res in resourcesArr) {
        console.log(`${res} –> ${resourcesArr[res]}`);
    }
}
