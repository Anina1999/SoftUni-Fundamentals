function messagesManager(input) {
    let capacityOfMessages = Number(input.shift());
    let userMap = new Map();

    for (let line of input) {
        let currentLine = line.split('=');
        let command = currentLine.shift();

        if (command === 'Statistics') {
            break;
        }

        if (command === 'Add') {
            let [username, sent, received] = currentLine;
            
            if (!userMap.has(username)) {
                userMap.set(username, {sent: Number(sent), received: Number(received)});
            } else {
                continue;
            }
        } else if (command === 'Message') {
            let [sender, receiver] = currentLine;

            if (userMap.has(sender) && userMap.has(receiver)) {
                let senderInfo = userMap.get(sender);
                senderInfo.sent += 1;
                let receiverInfo = userMap.get(receiver);
                receiverInfo.received += 1;

                if (senderInfo.sent + senderInfo.received === capacityOfMessages) {
                    console.log(`${sender} reached the capacity!`);
                    userMap.delete(sender);
                }

                if (receiverInfo.sent + receiverInfo.received === capacityOfMessages) {
                    console.log(`${receiver} reached the capacity!`);
                    userMap.delete(receiver);
                }
            }
        } else if (command === 'Empty') {
            let username = currentLine[0];

            if (username === 'All') {
                userMap.clear();
            } else {
                userMap.delete(username);
            }
        }
    }

    console.log(`Users count: ${userMap.size}`);
    for (let [username, data] of userMap) {
        console.log(`${username} - ${data.sent + data.received}`);
    }
}

//messagesManager(["10",
//"Add=Berg=9=0",
//"Add=Kevin=0=0",
//"Message=Berg=Kevin",
//"Add=Mark=5=4",
//"Statistics"]);
