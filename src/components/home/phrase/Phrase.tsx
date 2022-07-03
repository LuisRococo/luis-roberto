import React from "react";
import styles from "./styles.module.scss";

export const Phrase = () => {
   return (
      <div className={styles["phrase-cont"]}>
         <p className={styles["phrase"]}>Even if the storm is cold and dark, keep moving so both can see the sunlight again</p>
      </div>
   );
};
