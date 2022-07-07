import React from "react";
import styles from "./likes.module.scss";
import globalStyles from "../../../../global.module.scss";
import { BsFillBookmarkHeartFill } from "react-icons/bs";

export const Likes = () => {
   return (
      <div className={styles["likes"]}>
         <h3 className={styles["title"]}>Thing I like</h3>
         <hr className={globalStyles["sep"]} />

         {[...new Array(5)].map((element, key) => {
            return (
               <div key={`likes-item-${key}`} className={styles["item"]}>
                  <BsFillBookmarkHeartFill className={styles["icon"]} />
                  <p className={styles["text"]}>Me gustan los chihuahuas</p>
               </div>
            );
         })}
      </div>
   );
};
