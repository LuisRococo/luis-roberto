import React from "react";
import styles from "./footer.module.scss";
import globalStyles from "../../../global.module.scss";
import starImage from "../../../imgs/star.png";
import { SocialIcon } from "react-social-icons";
import { FaHandPointRight } from "react-icons/fa";

export const Footer = () => {
   return (
      <footer className={`${styles["footer"]} ${globalStyles["wrapper"]}`}>
         <div className={styles["name-cont"]}>
            <div className={styles["img-cont"]}>
               <img src={starImage} alt="" />
            </div>
         </div>
         <p className={styles["phrase"]}>Don't let the storm stop you comrade</p>

         <div className={styles["special-wrapper"]}>
            <a target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
               <div className={styles["special"]}>
                  <FaHandPointRight className={styles["icon"]} />
                  <p className={styles["special-text"]}>Click to see something special</p>
               </div>
            </a>
         </div>

         <hr className={`${globalStyles["sep"]} ${styles["sep-footer"]}`} />

         <div className={styles["icon-cont"]}>
            <div className={styles["icon-wrapper"]}>
               <SocialIcon target="_blank" url="https://www.instagram.com/luisropev/" />
            </div>
            <div className={styles["icon-wrapper"]}>
               <SocialIcon target="_blank" url="https://www.linkedin.com/in/luis-roberto-peña-v-220066197/" />
            </div>
            <div className={styles["icon-wrapper"]}>
               <SocialIcon target="_blank" url="https://github.com/LuisRococo" />
            </div>
         </div>
      </footer>
   );
};
