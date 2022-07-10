import { useEffect } from "react";

export const useClassTemporizer = (element: HTMLElement, time: number, classlist: string[], reAddClassMode: boolean = true) => {
   let timeOutReset: NodeJS.Timeout | null = null;

   const removeClass = (className: string) => {
      element.classList.remove(className);
   };

   const addClass = (className: string) => {
      element.classList.add(className);
   };

   const startTemporizer = (timeToReset?: number) => {
      if (!element) return;

      if (!timeToReset) {
         timeToReset = time;
      }

      if (timeOutReset) clearTimeout(timeOutReset);
      const actionToClass = reAddClassMode ? removeClass : addClass;

      classlist.forEach(actionToClass);

      timeOutReset = setTimeout(onTimeReset, timeToReset);
   };

   const onTimeReset = () => {
      if (timeOutReset) clearTimeout(timeOutReset);
      const actionToClass = reAddClassMode ? addClass : removeClass;
      classlist.forEach(actionToClass);
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
