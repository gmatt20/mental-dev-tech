import { Syne } from "next/font/google";
import { TechData } from "@/data/TechData";
const syne = Syne({
  weight: "800",
  subsets: ["sans"],
});

const renderTechStack = (techArr) => {
  return techArr.map((tech, id) => (
    <div key={id}>
      <tech.component color={tech.color} className="p-2" size={70} />
      <p>{tech.name}</p>
    </div>
  ));
}

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
  const filteredLearning = TechData.filter((tech) => tech.name === "C++" || tech.name == "Python");
  
  const techCategories = [
    { title: "FRONTEND", data: filteredFrontend },
    { title: "BACKEND (CURRENTLY LEARNING)", data: filteredBackend },
    { title: "VERSION CONTROL", data: filteredVersionControl },
    { title: "LEARNING", data: filteredLearning },
  ];

  return (
    <div className="my-10 flex flex-col justify-center items-center">
      <div>
        <h1 className={`${syne.className} text-5xl mb-10 text-center`}>
          MY TECH STACK
        </h1>
        {techCategories.map((category, id) => (
          <div key={id}>
            <div className="bg-darker flex flex-col items-center py-10 rounded-lg my-5 w-[80%] mx-auto">
              <h1
                className={`${syne.className} max-md:text-xl text-3xl text-pretty mb-5 text-center`}>
                {category.title}
              </h1>
              <div className="grid grid-flow-col max-md:grid-rows-2 gap-5 place-items-center text-center">
                {renderTechStack(category.data)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
