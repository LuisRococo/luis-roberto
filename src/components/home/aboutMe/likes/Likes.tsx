import React from "react";
import styles from "./likes.module.scss";
import globalStyles from "../../../../global.module.scss";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { itemData } from "./data";

export const Likes = () => {
   return (
      <div className={styles["likes"]}>
         <h3 className={styles["title"]}>Thing I like</h3>
         <hr className={globalStyles["sep"]} />

         {itemData.map((item, key) => {
            return (
               <div key={`likes-item-${key}`} className={styles["item"]}>
                  <div className={styles["icon-wrapper"]}>
                     <BsFillBookmarkHeartFill className={styles["icon"]} />
                  </div>
                  <p className={styles["text"]}>{item}</p>
               </div>
            );
         })}
      </div>
   );
};
