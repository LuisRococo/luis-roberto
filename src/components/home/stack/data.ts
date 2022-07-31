import { IconType } from "react-icons";
import { BsGithub } from "react-icons/bs";
import { FaDocker, FaReact } from "react-icons/fa";
import { SiHtml5, SiJavascript, SiMongodb, SiNodedotjs, SiSass, SiTypescript, SiVisualstudio, SiGnubash } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";

export interface StackElementInterface {
   Icon: IconType;
   name: string;
}

export const stackData: StackElementInterface[] = [
   { Icon: FaReact, name: "React" },
   { Icon: SiJavascript, name: "Javascript" },
   { Icon: SiTypescript, name: "Typescript" },
   { Icon: SiNodedotjs, name: "Express" },
   { Icon: BsGithub, name: "Github" },
   { Icon: GrMysql, name: "MySQL" },
   { Icon: SiMongodb, name: "MongoDB" },
   { Icon: SiSass, name: "SASS" },
   { Icon: SiHtml5, name: "HTML / CSS" },
   { Icon: SiVisualstudio, name: "VS Code" },
   { Icon: AiFillGithub, name: "Github / Git" },
   { Icon: FaDocker, name: "Docker" },
   { Icon: SiGnubash, name: "Bash" },
];
