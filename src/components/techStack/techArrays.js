// import { AiFillGithub } from "react-icons/ai";
import { DiCss3, DiDatabase, DiHtml5 } from "react-icons/di";
import {
  SiJavascript,
  SiBootstrap,
  SiFirebase,
  SiCsharp,
  SiNetlify,
  SiDotNet,
  SiPython,
  SiGit,
  // SiGatsby,
  // SiMaterialUi,
  SiJest,
  SiUnity,
  SiNextDotJs,
} from "react-icons/si";
import { FaReact, FaAws } from "react-icons/fa";
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
    name: "C#",
    icon: SiCsharp,
  },
  {
    name: "React",
    icon: FaReact,
  },
  {
    name: "SQL",
    icon: DiDatabase,
  },
  {
    name: "Figma",
    icon: FiFigma,
  },
  {
    name: "Bootstrap",
    icon: SiBootstrap,
  },
  // {
  //   name: "Material Ui",
  //   icon: SiMaterialUi,
  // },
  {
    name: "AWS",
    icon: FaAws,
  },
  {
    name: "Firebase",
    icon: SiFirebase,
  },
  {
    name: "Netlify",
    icon: SiNetlify,
  },
  {
    name: "Git",
    icon: SiGit,
  },
  // {
  //   name: "Github",
  //   icon: AiFillGithub,
  // },
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
