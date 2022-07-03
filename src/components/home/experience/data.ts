import enrouteIcon from "../../../imgs/enroute-icon.jpeg";

export interface ExperienceItemInterface {
   image: string;
   date: string;
   company: string;
   position: string;
}

export const experienceItem: ExperienceItemInterface[] = [
   {
      company: "Enroute Systems",
      date: "2022 - Present",
      position: "Full-Stack developer",
      image: enrouteIcon,
   },
];
