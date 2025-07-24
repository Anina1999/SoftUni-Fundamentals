function addOrSubtractPercentage(arr) {
    function processCommands(commands) {
        let value = 0;

        function applyCommand(command) {
            if (command === 'soap') {
                value += 10;
            } else if (command === 'water') {
                value += value * 0.2;
            } else if (command === 'vacuum cleaner') {
                value += value * 0.25;
            } else if (command === 'mud') {
                value -= value * 0.1;
            }
        }

        for (let i = 0; i < commands.length; i++) {
            applyCommand(commands[i]);
        }

        return value;
    }

    let result = processCommands(arr);
    console.log(`The car is ${result.toFixed(2)}% clean.`);
}

//addOrSubtractPercentage(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
