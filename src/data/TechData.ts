import {
  SiNextdotjs,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiPostman,
  SiTailwindcss,
  SiCplusplus,
  SiPython,
  SiGit,
  SiGithub,
} from "@icons-pack/react-simple-icons";

interface Tech {
  component: React.ElementType;
  name: string;
  color: string;
}

export const TechData : Tech[] = [
  {
    component: SiNextdotjs,
    name: "Next.js",
    color: "#ffffff",
  },
  {
    component: SiTypescript,
    name: "TypeScript",
    color: "#3178C6",
  },
  {
    component: SiHtml5,
    name: "HTML5",
    color: "#E34F26",
  },
  {
    component: SiCss,
    name: "CSS",
    color: "#663399",
  },
  {
    component: SiJavascript,
    name: "JavaScript",
    color: "#F7DF1E",
  },
  {
    component: SiExpress,
    name: "Express.js",
    color: "#ffffff",
  },
  {
    component: SiMongodb,
    name: "MongoDB",
    color: "#47A248",
  },
  {
    component: SiMongoose,
    name: "Mongoose",
    color: "#880000",
  },
  {
    component: SiPostman,
    name: "Postman",
    color: "#FF6C37",
  },
  {
    component: SiTailwindcss,
    name: "Tailwind CSS",
    color: "#06B6D4",
  },
  {
    component: SiCplusplus,
    name: "C++",
    color: "#00599C",
  },
  {
    component: SiPython,
    name: "Python",
    color: "#3776AB",
  },
  {
    component: SiGit,
    name: "Git",
    color: "#F05032",
  },
  {
    component: SiGithub,
    name: "GitHub",
    color: "#ffffff",
  },
];