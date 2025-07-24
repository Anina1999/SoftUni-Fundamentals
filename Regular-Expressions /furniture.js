//solve #1
function furniture(input) {
    let pattern = />>(?<furniture>[A-Z][A-Za-z]*)<<(?<price>\d+(\.\d+)?)!(?<quantity>\d+)/;
    let furnitureList = [];
    let totalSpendMoney = 0;

    for (let text of input) {
        if (text === 'Purchase') break;

        let match = text.match(pattern);

        if (match) {
            let furnitureName = match.groups['furniture'];
            let price = Number(match.groups['price']);
            let quantity = Number(match.groups['quantity']);

            furnitureList.push(furnitureName);
            totalSpendMoney += price * quantity;
        }
    }

    function printOutput() {
        let result = 'Bought furniture:\n';
        if (furnitureList.length > 0) {
            result += furnitureList.join('\n') + '\n';
        }
        result += `Total money spend: ${totalSpendMoney.toFixed(2)}`;
        return result;
    }

    console.log(printOutput());
}

//furniture(['>>Laptop<<312.2323!3',

//'>>TV<<300.21314!5',

//'>Invalid<<!5',

//'>>TV<<300.21314!20',

//'>>Invalid<!5',

//'>>TV<<30.21314!5',

//'>>Invalid<<!!5',

//'Purchase']);



//solve 2
function furniture(inputLines) {
    let pattern = />>([A-Z][A-Za-z\s]*)<<(\d+(\.\d+)?)!(\d+)/;
    let furniture = [];
    let total = 0;

    for (let line of inputLines) {
        if (line === 'Purchase') break;

        let match = line.match(pattern);
        if (match) {
            let name = match[1];
            let price = parseFloat(match[2]);
            let quantity = parseInt(match[4]);
            furniture.push(name);
            total += price * quantity;
        }
    }
    console.log('Bought furniture:');
    furniture.forEach(item => console.log(item));
    console.log(`Total money spend: ${total.toFixed(2)}`);
}
