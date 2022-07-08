export interface PlayerSongInterface {
   song: string;
   name: string;
   artist: string;
   image: string;
}

export interface PlayerStyleInterface {
   background: string;
   titleColor: string;
   artistColor: string;
}

export interface SongsInterface {
   song: PlayerSongInterface;
   style: PlayerStyleInterface;
}

//Placeholders
export const actualSongPlaceHolder: PlayerSongInterface = {
   artist: "Kungs",
   image: process.env.PUBLIC_URL + "/songs/this-girl/this-girl.jpeg",
   song: process.env.PUBLIC_URL + "/songs/this-girl/this-girl.mp3",
   name: "This Girl",
};

//Data
export const songs: SongsInterface[] = [
   {
      song: { artist: "Kungs", image: process.env.PUBLIC_URL + "/songs/this-girl/this-girl.jpeg", song: process.env.PUBLIC_URL + "/songs/this-girl/this-girl.mp3", name: "This Girl" },
      style: {
         artistColor: "#fff",
         background: "#ffc4d3",
         titleColor: "#fff",
      },
   },
   {
      song: { artist: "Robin Schulz", image: process.env.PUBLIC_URL + "/songs/sugar/sugar.webp", song: process.env.PUBLIC_URL + "/songs/sugar/sugar.mp3", name: "Sugar" },
      style: {
         artistColor: "#f22e3e",
         background: "#fff9e6",
         titleColor: "#f22e3e",
      },
   },
];
