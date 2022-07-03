import React from "react";
import styles from "./styles.module.scss";
import profileImg from "../../imgs/profile-img.jpg";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";

export const Header = () => {
   return (
      <>
         <div className={styles["header"]}>
            <div className={styles["social-cont"]}>
               <a target="_blank" href="https://www.instagram.com/luisropev/">
                  <SiInstagram className={styles["icon"]} />
               </a>
               <a target="_blank" href="https://www.linkedin.com/in/luis-roberto-peña-v-220066197/">
                  <BsLinkedin className={styles["icon"]} />
               </a>
               <a target="_blank" href="https://github.com/LuisRococo">
                  <BsGithub className={styles["icon"]} />
               </a>
            </div>
            <div className={styles["profile-info-cont"]}>
               <img className={styles["profile-img"]} src={profileImg} alt="" />
               <h2 className={styles["name"]}>Luis Roberto Peña</h2>
               <p className={styles["career"]}>Software Engineer</p>
            </div>
         </div>
      </>
   );
};
