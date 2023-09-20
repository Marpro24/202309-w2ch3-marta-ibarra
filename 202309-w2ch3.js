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
    artist: "Spice Girls",
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
    ispeting: false,
  },
];

const addNewSong = (newSong) => listSongs.push(newSong);
const newSong = {
  id: 5,
  title: "Paquito el chocolatero",
  artist: "Maricarmen y su tropa",
  genre: "pop",
  duration: 195,
  year: 1995,
  ispeting: false,
};

console.log(addNewSong(newSong));
console.log(listSongs);

const findSongTitle = (title) => {
  const findSong = listSongs.find((song) => songs.title === title);

  let findPosition = songs.indexOf(findSong);

  songs.splice(findPosition, 1);

  return songs;
};

console.log(findSongTitle("Wannabe"));
