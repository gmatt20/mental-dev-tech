"use client";

import { ProjectData } from "@/data/ProjectData";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Syne } from "next/font/google";

const syne = Syne({
  weight: ["800"],
  subsets: ["greek", "latin", "latin-ext"],
});

export default function Projects() {
  return (
    <div id="projects" className="mb-10 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1 } }}>
        <h1
          className={`${syne.className} text-center text-5xl max-md:text-3xl mb-10`}>
          PROJECTS
        </h1>
        <div className="grid grid-cols-2 grid-flow-row gap-10 w-[100%] max-md:grid-cols-1">
          {ProjectData.map((project, id: number) => (
            <div
              key={id}
              className="flex flex-col gap-10 items-center justify-center">
              <div className="bg-darker rounded-lg p-10 max-md:p-6 w-[80%]max-md:w-full text-center h-[100%]">
                <Link
                  href={project.link}
                  rel="noopener noreferrer"
                  target="_blank">
                  <div>
                    <Image
                      src={project.url}
                      alt={project.alt}
                      className="rounded-lg max-w-[100%] mb-5"
                    />
                  </div>
                  <div>
                    <h1 className="text-xl max-md:text-base">
                      {project.title}
                    </h1>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
