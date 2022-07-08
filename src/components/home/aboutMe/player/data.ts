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
      song: {
         artist: "Kungs",
         image: process.env.PUBLIC_URL + "/songs/this-girl/this-girl.jpeg",
         song: process.env.PUBLIC_URL + "/songs/this-girl/this-girl.mp3",
         name: "This Girl",
      },
      style: {
         artistColor: "#000",
         background: "#fff",
         titleColor: "#000",
      },
   },
   {
      song: {
         artist: "Robin Schulz",
         image: process.env.PUBLIC_URL + "/songs/sugar/sugar.webp",
         song: process.env.PUBLIC_URL + "/songs/sugar/sugar.mp3",
         name: "Sugar",
      },
      style: {
         artistColor: "#444",
         background: "#FFF6E7",
         titleColor: "#000",
      },
   },
];
