import { useEffect } from "react";

export const useClassTemporizer = (element: HTMLElement, time: number, classlist: string[]) => {
   let timeOutReset: NodeJS.Timeout | null = null;

   const startTemporizer = (timeToReset?: number) => {
      if (!element) return;

      if (!timeToReset) {
         timeToReset = time;
      }

      classlist.forEach((className) => {
         element.classList.remove(className);
      });

      timeOutReset = setTimeout(onTimeReset, timeToReset);
   };

   const onTimeReset = () => {
      classlist.forEach((className) => {
         element.classList.add(className);
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
