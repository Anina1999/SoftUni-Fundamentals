function browseHistory(object, stringArr) {

    let browserName = object["Browser Name"];
    let openTabs = object["Open Tabs"];
    let recentlyClosed = object["Recently Closed"];
    let browserLogs = object["Browser Logs"];

    for (let command of stringArr) {
        if (command === 'Clear History and Cache') {
            openTabs.length = 0;
            recentlyClosed.length = 0;
            browserLogs.length = 0;
            continue;
        }

        let splitCommand = command.split(' ');
        let currCommand = splitCommand[0];
        let browser = splitCommand[1];

        let valid = true;

        if (currCommand === 'Close') {
            valid = openTabs.includes(browser);
        }

        if (valid) {
            if (currCommand === 'Open') {
                openTabs.push(browser);
                browserLogs.push(command);
            } else if (currCommand === 'Close') {
                let index = openTabs.indexOf(browser);
                openTabs.splice(index, 1);
                recentlyClosed.push(browser);
                browserLogs.push(command);
            }
        }
    }
    console.log(`${browserName}`);
    console.log(`Open Tabs: ${openTabs.join(', ')}`);
    console.log(`Recently Closed: ${recentlyClosed.join(', ')}`);
    console.log(`Browser Logs: ${browserLogs.join(', ')}`);
}

//browseHistory({"Browser Name":"Google Chrome",

//"Open Tabs":["Facebook","YouTube","Google Translate"],

//"Recently Closed":["Yahoo","Gmail"],

//"Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate","Close Yahoo","Open Gmail",

//"Close Gmail","Open Facebook"]},

//["Close Facebook", "Open StackOverFlow", "Open Google"]);
