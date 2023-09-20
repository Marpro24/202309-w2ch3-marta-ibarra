const songs = [
  {
    id: 1,
    title: "Smooth Criminal",
    artist: "Miachael Jackson",
    genre: "pop",
    duration: 258,
    year: 1988,
    ispeting: true,
  },
  {
     id: 2,
    title: "Wannabe",
    artist:"Spice Girls",
    genre: "pop",
    duration: 243,
    year: 1996,
    ispeting: true,
  },
  {
     id: 3,
    title: "The Wrestler",
    artist: "Bruce Springsteen",
    genre: "rock",
    duration: 231,
    year: 2008,
    ispeting: false,
  },
  {
     id: 4,
    title: "Christmas Tree Farm",  
    artist: "Taylor Swift",
    genre: "pop",
    duration: 195,
    year: 2019,
    ispeting: no,
  },
]

const addNewSong = (newSong) => listSong.push(newSong);
const newSong = {
     id: 5,
    title: "Paquito el chocolatero",  
    artist: "Maricarmen y su trupa",
    genre: "pop",
    duration: 195,
    year: 1995,
    ispeting: no,


};

console.log(addNewSong(newSong));
console.log(listSongs);



const removeSong = (removedSong)
