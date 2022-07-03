import React from "react";
import styles from "./styles.module.scss";
import globalStyles from "../../../global.module.scss";
import { stackData } from "./data";

export const Stack = () => {
   return (
      <div className={styles["stack"]}>
         <h3 className={globalStyles["section-title"]}>Tools</h3>
         <hr className={globalStyles["sep"]} />
         <div className={styles["stack-cont"]}>
            {stackData.map((data, key) => {
               return (
                  <div key={`stack-item-${key}`} className={styles["stack-element-wrapper"]}>
                     <div className={styles["stack-icon-wrapper"]}>
                        <data.Icon className={styles["stack-icon"]} />
                     </div>
                     <p className={styles["stack-name"]}>{data.name}</p>
                  </div>
               );
            })}
         </div>
      </div>
   );
};
