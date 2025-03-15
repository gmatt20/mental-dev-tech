import { Syne } from "next/font/google";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiPostman,
  SiTailwindcss,
  SiCplusplus,
  SiGit,
  SiGithub,
} from "@icons-pack/react-simple-icons";
import { TechData } from "@/data/TechData";
import Tech from "./Tech";
const syne = Syne({
  weight: "800",
  subsets: ["sans"],
});

export default function TechStack() {
  const filteredFrontend = TechData.filter(
    (tech) =>
      tech.name === "Next.js" ||
      tech.name === "TypeScript" ||
      tech.name === "Tailwind CSS"
  );
  const filteredBackend = TechData.filter(
    (tech) =>
      tech.name === "JavaScript" ||
      tech.name === "Express.js" ||
      tech.name === "MongoDB" ||
      tech.name === "Mongoose" ||
      tech.name === "Postman"
  );
  const filteredVersionControl = TechData.filter(
    (tech) => tech.name === "Git" || tech.name === "GitHub"
  );
  const filteredLearningCs = TechData.filter((tech) => tech.name === "C++");

  return (
    <div className="my-10">
      <h1 className={`${syne.className} text-5xl mb-5 text-center`}>
        MY TECH STACK
      </h1>
      <div className="bg-darker flex flex-col items-center py-10 rounded-lg my-5">
        <h1 className={`${syne.className} text-5xl mb-5 text-center`}>
          FRONTEND
        </h1>
        <div className="grid grid-cols-3 gap-5 place-items-center text-center">
          {filteredFrontend.map((tech, id) => (
            <div key={id}>
              <tech.component color={tech.color} className="p-2" size={70} />
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-darker flex flex-col items-center py-10 rounded-lg my-5">
        <h1 className={`${syne.className} text-5xl mb-5 text-center`}>
          BACKEND (CURRENTLY LEARNING)
        </h1>
        <div className="grid grid-cols-3 gap-5 place-items-center text-center">
          {filteredBackend.map((tech, id) => (
            <div key={id}>
              <tech.component color={tech.color} className="p-2" size={70} />
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-darker flex flex-col items-center py-10 rounded-lg my-5">
        <h1 className={`${syne.className} text-5xl mb-5 text-center`}>
          VERSION CONTROL
        </h1>
        <div className="grid grid-cols-3 gap-5 place-items-center text-center">
          {filteredVersionControl.map((tech, id) => (
            <div key={id}>
              <tech.component color={tech.color} className="p-2" size={70} />
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-darker flex flex-col items-center py-10 rounded-lg my-5">
        <h1 className={`${syne.className} text-5xl mb-5 text-center`}>
          LEARNING CS
        </h1>
        <div className="grid grid-cols-3 gap-5 place-items-center text-center">
          {filteredLearningCs.map((tech, id) => (
            <div key={id}>
              <tech.component color={tech.color} className="p-2" size={70} />
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
