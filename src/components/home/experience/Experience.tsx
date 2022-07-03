import React from "react";
import styles from "./experiences.module.scss";
import globalStyles from "../../../global.module.scss";
import enrouteIcon from "../../../imgs/enroute-icon.jpeg";
import { experienceItem } from "./data";

export const Experience = () => {
   return (
      <div className={`${styles["experiences"]} ${globalStyles["wrapper"]}`}>
         <h2 className={globalStyles["section-title"]}>Experience</h2>
         <hr className={globalStyles["sep"]} />

         <div className={styles["items-cont"]}>
            {experienceItem.map((item, key) => {
               return (
                  <div key={`item-experience-${key}`} className={styles["item"]}>
                     <p className={styles["item-date"]}>{item.date}</p>
                     <div className={styles["item-card"]}>
                        <img className={styles["item-logo"]} src={item.image} alt="" />
                        <div className={styles["item-info"]}>
                           <p className={styles["item-company"]}>{item.company}</p>
                           <p className={styles["item-rol"]}>{item.position}</p>
                        </div>
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
   );
};
