import { DiCss3, DiDatabase, DiHtml5 } from "react-icons/di";
import {
  SiJavascript,
  SiBootstrap,
  SiCsharp,
  SiAngular,
  SiDotNet,
  SiPython,
  SiGit,
  SiMaterialUi,
  SiJest,
  SiUnity,
  SiNextDotJs,
  SiTypescript,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";

const techNow = [
  {
    name: "HTML5",
    icon: DiHtml5,
  },
  {
    name: "CSS3",
    icon: DiCss3,
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "C#",
    icon: SiCsharp,
  },
  {
    name: "React",
    icon: FaReact,
  },
  {
    name: "Angular",
    icon: SiAngular,
  },
  {
    name: "SQL",
    icon: DiDatabase,
  },
  {
    name: "Bootstrap",
    icon: SiBootstrap,
  },
  {
    name: "Material Ui",
    icon: SiMaterialUi,
  },
  {
    name: "Git",
    icon: SiGit,
  },
  {
    name: "Figma",
    icon: FiFigma,
  },
];

const techSoon = [
  {
    name: "ASP.NET",
    icon: SiDotNet,
  },
  {
    name: "Jest",
    icon: SiJest,
  },
  //  {
  //   name: "Gatsby",
  //   icon: SiGatsby,
  // },

  {
    name: "Next JS",
    icon: SiNextDotJs,
  },
];

const techFuture = [
  {
    name: "Python",
    icon: SiPython,
  },
  {
    name: "Unity",
    icon: SiUnity,
  },
  {
    name: "React Native",
    icon: FaReact,
  },
];

export { techNow, techSoon, techFuture };
