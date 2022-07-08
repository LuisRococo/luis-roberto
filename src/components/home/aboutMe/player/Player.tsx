import React, { FC, useEffect, useRef, useState } from "react";
import { PlayerSongInterface, PlayerStyleInterface } from "./data";
import styles from "./player.module.scss";
import globalStyles from "../../../../global.module.scss";
import "react-h5-audio-player/src/styles.scss";
import { FaPause, FaPlay } from "react-icons/fa";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";

interface PlayerInterface {
   onReturn?: () => void;
   onNext?: () => void;
   actualSong?: PlayerSongInterface;
   style?: PlayerStyleInterface;
}

export const Player: FC<PlayerInterface> = ({ actualSong, onNext, onReturn, style }) => {
   const audioHeart = useRef<HTMLAudioElement>(null);
   const [isSleeping, setIsSleeping] = useState(true);
   const [isPlaying, setIsPlaying] = useState(false);
   const volume = 0.5;

   function playSong() {
      if (isPlaying) {
         audioHeart.current?.pause();
      } else {
         audioHeart.current?.play();
      }
      setIsSleeping(false);
      setIsPlaying(!isPlaying);
   }

   function shouldShowPlayIcon() {
      return isPlaying || isSleeping;
   }

   function shouldShowRotateAnim() {
      return isPlaying && !isSleeping;
   }

   function shouldCoverBePaused() {
      return !isPlaying;
   }

   useEffect(() => {
      if (audioHeart.current) {
         audioHeart.current.volume = volume;
      }
   }, []);

   useEffect(() => {
      const audioElement = audioHeart.current;
      audioElement?.pause();
      audioElement?.load();
      if (!isSleeping) {
         audioElement?.play();
         setIsPlaying(true);
      }
   }, [actualSong]);

   return (
      <div className={styles["player"]} style={style ? { backgroundColor: style.background } : {}}>
         <audio ref={audioHeart} className={styles["hidden"]} controls>
            <source src={actualSong?.song} />
         </audio>
         <div className={styles["header"]}>
            <p className={styles["title"]} style={style ? { color: style.titleColor } : {}}>
               {actualSong?.name}
            </p>
            <p className={styles["artist"]} style={style ? { color: style.artistColor } : {}}>
               {actualSong?.artist}
            </p>
         </div>
         <div className={styles["img-wrapper"]}>
            <img className={`${styles["img"]} ${shouldShowRotateAnim() ? styles["rotate-anim"] : ""} `} src={actualSong?.image} alt="" />
         </div>

         <div className={styles["control-cont"]}>
            <div className={styles["control-btn"]} onClick={onReturn}>
               <MdSkipPrevious />
            </div>
            <div onClick={playSong} className={styles["pause-btn"]}>
               {shouldShowPlayIcon() ? <FaPlay /> : <FaPause />}
            </div>
            <div className={styles["control-btn"]} onClick={onNext}>
               <MdSkipNext />
            </div>
         </div>
      </div>
   );
};
