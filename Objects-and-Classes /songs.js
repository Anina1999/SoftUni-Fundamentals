function songs(data) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let numberOfSongs = Number(data[0]); 
    let searchTerm = data.pop();        

    let allSongs = [];

    for (let i = 1; i <= numberOfSongs; i++) {
        let [typeList, name, time] = data[i].split('_'); 

        let song = new Song(typeList, name, time);
        allSongs.push(song);
    }

    if (searchTerm !== 'all') {
        allSongs = allSongs.filter(s => s.typeList === searchTerm);
    }

    for (let song of allSongs) {
        console.log(song.name);
    }
}

//songs([3,

//'favourite_DownTown_3:14',

//'favourite_Kiss_4:16',

//'favourite_Smooth Criminal_4:01',

//'favourite']);
