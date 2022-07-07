import React from "react";
import globalStyles from "../../../global.module.scss";
import styles from "./about.module.scss";
import { Likes } from "./likes/Likes";

export const AboutMe = () => {
   return (
      <div className={`${styles["about"]} ${globalStyles["wrapper"]}`}>
         <div className={styles["sec-1"]}>
            <div>
               <h3 className={styles["about-title"]}>About</h3>
               <p className={styles["about-text"]}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur.{" "}
               </p>
            </div>

            <Likes />
         </div>
         <div className={styles["sec-2"]}></div>
      </div>
   );
};
