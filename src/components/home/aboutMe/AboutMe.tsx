import React, { useState } from "react";
import globalStyles from "../../../global.module.scss";
import styles from "./about.module.scss";
import { Likes } from "./likes/Likes";
import { actualSongPlaceHolder, PlayerSongInterface, songs } from "./player/data";
import { Player } from "./player/Player";

export const AboutMe = () => {
   const [songIndex, setSongIndex] = useState(0);

   function nextSong() {
      const nextIndex: number = Math.min(songIndex + 1, songs.length - 1);
      setSongIndex(nextIndex);
   }

   function previousSong() {
      const nextIndex: number = Math.max(songIndex - 1, 0);
      setSongIndex(nextIndex);
   }

   return (
      <div className={`${styles["about"]} ${globalStyles["wrapper"]}`}>
         <div className={styles["sec-1"]}>
            <div>
               <h3 className={styles["about-title"]}>About</h3>
               <p className={styles["about-text"]}>I am a software Engineer that finds peace with companions and coding. </p>
            </div>

            <Likes />
         </div>
         <div className={styles["sec-2"]}>
            <Player onReturn={previousSong} onNext={nextSong} style={songs[songIndex].style} actualSong={songs[songIndex].song} />
         </div>
      </div>
   );
};
