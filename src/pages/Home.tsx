import React from "react";
import { Experience } from "../components/home/experience/Experience";
import { Header } from "../components/home/Header";
import { Phrase } from "../components/home/phrase/Phrase";
import { Stack } from "../components/home/stack/Stack";
import { UnderDevMsj } from "../components/other/UnderDev/UnderDevMsj";

export const Home = () => {
   return (
      <div>
         <Header />
         <Stack />
         <Experience />
         <UnderDevMsj />
         {/* <Phrase /> */}
      </div>
   );
};
