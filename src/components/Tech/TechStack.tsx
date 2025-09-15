"use client";

import { TechData } from "@/data/TechData";
import TrafficLights from "../ui/TrafficLights";
import { motion } from "motion/react";
import { Syne } from "next/font/google";

const syne = Syne({
  weight: ["800"],
  subsets: ["greek", "latin", "latin-ext"],
});

const STACK_ORDER = ["fullstack", "database", "ai", "tools", "compiled"];

export default function TechStack() {
  return (
    <div id="tech-stack" className="my-20 flex flex-col justify-center items-center">
      <h1 className={`${syne.className} text-5xl mb-20 text-center max-md:text-3xl`}>
        TECH STACK
      </h1>

      {STACK_ORDER.map((stackName) => {
        const techs = TechData.filter((tech) => tech.stack === stackName);
        return (
          <motion.div
            key={stackName}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            className="my-10 w-[80%] max-md:w-full mx-auto"
          >
            <div className="bg-darker p-8 rounded-lg flex flex-col">
              <TrafficLights />
              <h2
                className={`${syne.className} text-3xl text-pretty mb-5 text-center`}
              >
                {stackName.toUpperCase()}
              </h2>
              <div className="flex flex-wrap justify-center gap-10 max-md:gap-5 text-center p-5">
                {techs.map((tech, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <tech.component color={tech.color} className="p-2" size={70} />
                    <p>{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
