import React, { FC, useEffect, useRef, useState } from "react";
import { PlayerSongInterface, PlayerStyleInterface } from "./data";
import styles from "./player.module.scss";
import globalStyles from "../../../../global.module.scss";
import "react-h5-audio-player/src/styles.scss";
import { FaPause, FaPlay } from "react-icons/fa";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { useClassTemporizer } from "../../../../hooks/classTemporizer";

interface PlayerInterface {
   onReturn?: () => void;
   onNext?: () => void;
   actualSong?: PlayerSongInterface;
   style?: PlayerStyleInterface;
}

export const Player: FC<PlayerInterface> = ({ actualSong, onNext, onReturn, style }) => {
   const audioHeart = useRef<HTMLAudioElement>(null);
   const songCover = useRef<any>(null);
   const [isSleeping, setIsSleeping] = useState(true);
   const [isPlaying, setIsPlaying] = useState(false);
   const resetCoverAnimation = useClassTemporizer(songCover.current, 200, [styles["rotate-anim"]]);
   const fadeInCover = useClassTemporizer(songCover.current, 200, [styles["opacity-0"]], false);
   const volume = 0.7;

   function onSongEnd() {
      setIsPlaying(false);
   }

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
      return !isPlaying || isSleeping;
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
      audioElement?.load();
      resetCoverAnimation();
      fadeInCover();
      if (!isSleeping && isPlaying) {
         audioElement?.play();
         setIsPlaying(true);
      }
   }, [actualSong]);

   return (
      <div className={styles["player"]} style={style ? { backgroundColor: style.background } : {}}>
         <audio onEnded={onSongEnd} ref={audioHeart} className={styles["hidden"]} controls>
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
            <img
               ref={songCover}
               className={`${styles["img"]} ${styles["rotate-anim"]}`}
               style={shouldCoverBePaused() ? { animationPlayState: "paused" } : {}}
               src={actualSong?.image}
               alt=""
            />
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
