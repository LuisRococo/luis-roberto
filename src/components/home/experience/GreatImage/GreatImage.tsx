import React from "react";
import styles from "./greatImage.module.scss";

export const GreatImage = () => {
   return (
      <div className={styles["great-image"]}>
         <div className={styles["cover"]}>
            <h3 className={styles["text-main"]}>Don't Stop</h3>
            <p className={styles["text-second"]}>Start the Hacking !</p>
         </div>
      </div>
   );
};
