//solve #1
function partyTime(arr) {
    let guestMap = new Map();

    let i = 0;
    while (arr[i] !== 'PARTY') {
        guestMap.set(arr[i], true);
        i++;
    }

    let arrivedGuests = arr.slice(i + 1);
    for (let guest of arrivedGuests) {
        guestMap.delete(guest);
    }

    function splitGuests(map) {
        let vip = [];
        let regular = [];

        for (let guest of map.keys()) {
            let firstChar = guest[0];

            if (!isNaN(Number(firstChar))) {
                vip.push(guest);
            } else {
                regular.push(guest);
            }
        }

        return { vip, regular };
    }

    let { vip, regular } = splitGuests(guestMap);

    console.log(vip.length + regular.length);
    vip.sort().forEach(g => console.log(g));
    regular.sort().forEach(g => console.log(g));
}

//partyTime(['7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc' ]);

//solve #2
function partyTime(input) {
    let partyIndex = input.indexOf('PARTY');
    let invitedGuests = input.slice(0, partyIndex);
    let arrivedGuests = input.slice(partyIndex + 1);

    let vip = [];
    let regular = [];

    function isVip(str) {
        return str.charCodeAt(0) >= 48 && str.charCodeAt(0) <= 57;
    }

    for (let guest of invitedGuests) {
        if (isVip(guest)) {
            vip.push(guest);
        } else {
            regular.push(guest);
        }
    }

    for (let guest of arrivedGuests) {
        if (vip.includes(guest)) {
            vip.splice(vip.indexOf(guest), 1);
        }
        if (regular.includes(guest)) {
            regular.splice(regular.indexOf(guest), 1);
        }
    }
    let totalGuests = vip.length + regular.length;

    console.log(totalGuests);
    vip.forEach(g => console.log(g));
    regular.forEach(g => console.log(g));
}
