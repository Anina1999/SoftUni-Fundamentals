function storeInfoAboutMovies(inputArr) {
//    let movies = [];

//    class Movie {
//        constructor(name, director, date) {
//            this.name = name,
//            this.director = director,
//            this.date = date
//        }
//    }

//    for (let line of inputArr) {
//        if (line.startsWith('addMovie')) {
//            let movieName = line.split('addMovie ')[1];
//            movies.push({ name: movieName });
//        } else if (line.includes('directedBy')) {
//            let splitLine = line.split(' directedBy ');
//            let movieName = splitLine[0];
//            let directorName = splitLine[1];
//            let movie = movies.find(m => m.name === movieName);
//            if (movie) {
//                movie.director = directorName;
//            }
//        } else if (line.includes('onDate')) {
//            let splitLine = line.split(' onDate ');
//            let movieName = splitLine[0];
//            let date = splitLine[1];
//            let movie = movies.find(m => m.name === movieName);
//            if (movie) {
//                movie.date = date;
//            }
//        }
//    }

//    for (let movie of movies) {
//        if (movie.name && movie.director && movie.date) {
//            let newMovie = new Movie(movie.name, movie.director, movie.date);
//            let jsonNewMovie = JSON.stringify(newMovie);
//            console.log(jsonNewMovie);
//        }
//    }

    let movies = [];
    for (let line of inputArr) {
        if (line.startsWith('addMovie')) {
            let name = line.substring(9);
            movies.push({'name' : name});
        } else if (line.includes('directedBy')) {
            let [name, director] = line.split(' directedBy ');
            let movie = movies.find(m => m.name === name);
            if (movie) {
                movie.director = director;
            }
        } else if (line.includes('onDate')) {
            let [name, date] = line.split(' onDate ');
            let movie = movies.find(m => m.name === name);
            if (movie) {
                movie.date = date;
            }
        }
    }
    for (let movie of movies) {
        if (movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    }
}

//storeInfoAboutMovies(['addMovie Fast and Furious',

//'addMovie Godfather',

//'Inception directedBy Christopher Nolan',

//'Godfather directedBy Francis Ford Coppola',

//'Godfather onDate 29.07.2018',

//'Fast and Furious onDate 30.07.2018',

//'Batman onDate 01.08.2018',

//'Fast and Furious directedBy Rob Cohen']);

//storeInfoAboutMovies(['addMovie The Avengers',

//'addMovie Superman',

//'The Avengers directedBy Anthony Russo',

//'The Avengers onDate 30.07.2010',

//'Captain America onDate 30.07.2010',

//'Captain America directedBy Joe Russo']);
