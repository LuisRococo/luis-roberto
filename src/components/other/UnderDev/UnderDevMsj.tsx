import React from "react";
import styles from "./styles.module.scss";

export const UnderDevMsj = () => {
   return (
      <div className={styles["section"]}>
         <div className={styles["card"]}>
            <p className={styles["icon"]}>{"</>"}</p>
            <h3 className={styles["title"]}>Page Under Development 😁</h3>
         </div>
      </div>
   );
};
