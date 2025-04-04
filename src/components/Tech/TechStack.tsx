"use client";

import { TechData } from "@/data/TechData";
import TrafficLights from "../ui/TrafficLights";
import { motion } from "motion/react";
import { Syne } from "next/font/google";

const syne = Syne({
  weight: ["800"],
  subsets: ["greek", "latin", "latin-ext"],
});

interface Tech {
  component: React.ElementType;
  name: string;
  color: string;
}

const renderTechStack = (techArr: Tech[]) => {
  return techArr.map((tech, id: number) => (
    <div className="flex flex-col items-center" key={id}>
      <tech.component color={tech.color} className="p-2" size={70} />
      <p>{tech.name}</p>
    </div>
  ));
};

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
  const filteredLearning = TechData.filter(
    (tech) => tech.name === "C++" || tech.name == "Python"
  );

  const techCategories = [
    { title: "FRONTEND", data: filteredFrontend },
    { title: "BACKEND", data: filteredBackend },
    { title: "VERSION CONTROL", data: filteredVersionControl },
    { title: "LEARNING", data: filteredLearning },
  ];

  return (
    <div
      id="tech-stack"
      className="my-20 flex flex-col justify-center items-center">
      <div>
        <h1
          className={`${syne.className} text-5xl mb-20 text-center max-md:text-3xl`}>
          MY TECH STACK
        </h1>
        {techCategories.map((category, id) => (
          <motion.div
            key={id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}>
            <div className="bg-darker p-8 rounded-lg my-5 w-[80%] max-md:w-full mx-auto">
              <div className="flex flex-col">
                <TrafficLights />
                <div className="mt-5">
                  <h1
                    className={`${syne.className} max-md:text-xl text-3xl text-pretty mb-5 text-center`}>
                    {category.title}
                  </h1>
                  <div className="col-span-3 flex flex-wrap justify-center gap-10 max-md:gap-5 max-md:p-5 text-center p-10 -center ">
                    {renderTechStack(category.data)}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
