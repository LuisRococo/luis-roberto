import { useEffect } from "react";

export const useClassTemporizer = (element: HTMLElement, time: number, classlist: string[], removeAdd: boolean = true) => {
   let timeOutReset: NodeJS.Timeout | null = null;

   const startTemporizer = (timeToReset?: number) => {
      if (!element) return;

      if (!timeToReset) {
         timeToReset = time;
      }

      if (timeOutReset) clearTimeout(timeOutReset);

      classlist.forEach((className) => {
         if (removeAdd) {
            element.classList.remove(className);
         } else {
            element.classList.add(className);
         }
      });

      timeOutReset = setTimeout(onTimeReset, timeToReset);
   };

   const onTimeReset = () => {
      classlist.forEach((className) => {
         if (removeAdd) {
            element.classList.add(className);
         } else {
            element.classList.remove(className);
         }
      });
   };

   useEffect(() => {
      return () => {
         if (timeOutReset) {
            clearTimeout(timeOutReset);
         }
      };
   });

   return startTemporizer;
};
