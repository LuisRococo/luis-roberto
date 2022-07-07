import React, { FC } from "react";
import { playerSongInterface } from "./data";
import styles from "./player.module.scss";
import globalStyles from "../../../../global.module.scss";

interface PlayerInterface {
   onReturn: () => {};
   onNext: () => {};
   actualSong: playerSongInterface;
}

export const Player: FC = () => {
   return <div className={styles["player"]}></div>;
};
