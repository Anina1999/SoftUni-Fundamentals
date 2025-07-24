function storeInfoAboutUsersAndComments(data) {

    function getUser(arr) {
        let users = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].startsWith('user ')) {
                let username = arr[i].split('user ')[1];
                users.push(username);
            }
        }
        return users;
    }

    function getArticleName(inputArr) {
        let articles = [];
        for (let i = 0; i < inputArr.length; i++) {
            if (inputArr[i].startsWith('article ')) {
                let article = inputArr[i].split('article ')[1];
                articles.push(article);
            }
        }
        return articles;
    }

    function makeCommentsObject(array, users, articles) {
        let commMap = new Map();

        for (let line of array) {
            if (line.includes('posts on')) {
                let [userAndArticle, titleAndContent] = line.split(': ');
                let [username, articleName] = userAndArticle.split(' posts on ');
                let [title, content] = titleAndContent.split(', ');

                if (users.includes(username) && articles.includes(articleName)) {
                    if (!commMap.has(articleName)) {
                        commMap.set(articleName, []);
                    }
                    commMap.get(articleName).push({
                        username,
                        title,
                        content
                    });
                }
            }
        }

        return commMap;
    }

    function printCommentsSorted(commMap) {
        let sorted = [...commMap.entries()].sort((a, b) => b[1].length - a[1].length);

        for (let [article, comments] of sorted) {
            console.log(`Comments on ${article}`);
        
            let sortedComments = comments.sort((a, b) => a.username.localeCompare(b.username));
            for (let comment of sortedComments) {
                console.log(`--- From user ${comment.username}: ${comment.title} - ${comment.content}`);
            }
        }
    }

    let listOfUsers = getUser(data);
    let articleName = getArticleName(data);
    let commentsMap = makeCommentsObject(data, listOfUsers, articleName);

    printCommentsSorted(commentsMap);
}

//storeInfoAboutUsersAndComments(['user aUser123', 
//    'someUser posts on someArticle: NoTitle, stupidComment', 
//    'article Books', 'article Movies', 
//    'article Shopping', 'user someUser', 
//    'user uSeR4', 'user lastUser', 
//    'uSeR4 posts on Books: I like books, I do really like them', 
//    'uSeR4 posts on Movies: I also like movies, I really do', 
//    'someUser posts on Shopping: title, I go shopping every day',
//    'someUser posts on Movies: Like, I also like movies very much']);
