function storeInfoAboutShelvesAndBooks(input) {
    let shelves = new Map();

    function processInput(lines) {
        for (let line of lines) {
            if (line.includes(' -> ')) {
                let [id, genre] = line.split(' -> ');
                if (!shelves.has(id)) {
                    shelves.set(id, { genre: genre, books: [] });
                }
            } else {
                let [titleAndAuthor, genre] = line.split(', ');
                let [title, author] = titleAndAuthor.split(': ');
                for (let [id, shelfData] of shelves) {
                    if (shelfData.genre === genre) {
                        shelfData.books.push({ title: title.trim(), author: author.trim() });
                        break;
                    }
                }
            }
        }
    }

    function displayShelves() {
        let sortedShelves = Array.from(shelves.entries())
            .sort((a, b) => b[1].books.length - a[1].books.length);

        for (let [id, shelfData] of sortedShelves) {
            console.log(`${id} ${shelfData.genre}: ${shelfData.books.length}`);
            let sortedBooks = shelfData.books
                .sort((a, b) => a.title.localeCompare(b.title));
            for (let book of sortedBooks) {
                console.log(`--> ${book.title}: ${book.author}`);
            }
        }
    }

    processInput(input);
    displayShelves();
}

//storeInfoAboutShelvesAndBooks(['1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery', 
//'2 -> mystery', '3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery', 
//'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi', 
//'Lions and Rats: Gabe Roads, history', '2 -> romance', 'Effect of the Void: Shay B, romance', 
//'Losing Dreams: Gail Starr, sci-fi', 'Name of Earth: Jo Bell, sci- fi', 
//'Pilots of Stone: Brook Jay, history']);
