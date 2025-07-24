function extractEmails(input) {
    let text = (typeof input === 'string') ? input : input.join(' ');

    let pattern = /\b[a-zA-Z0-9]+(?:[._-][a-zA-Z0-9]+)*@(?:[a-zA-Z]+(?:-[a-zA-Z]+)*\.)+[a-zA-Z]+(?:-[a-zA-Z]+)*\b/g;

    let matches = text.match(pattern);

    if (matches) {
        for (let email of matches) {
            let [user, host] = email.split('@');
            let hostParts = host.split('.');

            if (
                !/^[._-]|[._-]$/.test(user) &&           
                !/[._-]{2,}/.test(user) &&               
                hostParts.length >= 2 &&                 
                hostParts.every(part => /^[a-zA-Z]+(-[a-zA-Z]+)*$/.test(part)) 
            ) {
                console.log(email);
            }
        }
    }


//extractEmails('Please contact us at: support@github.com. Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.');
