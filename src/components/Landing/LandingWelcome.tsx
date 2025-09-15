"use client";

import TrafficLights from "@/components/ui/TrafficLights";
import { motion } from "motion/react";
import Image from "next/image";
import Ghibli from "@/public/ghibli.webp";

export default function LandingWelcome() {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}>
      <div className="my-20 -z-10 lg:mx-8 mx-5 bg-darker p-8 rounded-lg">
        <TrafficLights />
        <div className="mt-5 flex items-center flex-col md:flex-row">
          <Image className="rounded-full mr-5" src={Ghibli} width={300} height={100} alt="Avatar" />
          <div>
          <div className="mb-5">
            <h1 className="text-3xl leading-10 mb-2 font-bold max-md:text-xl max-md:leading-7">
              Building Intelligent Software for the AI Era
            </h1>
            <p>Rock and Code🤘</p>
          </div>
          <p className="text-left text-xl leading-10 max-md:text-sm max-md:leading-7">
            Hello! I&apos;m Matthew — an LLM productivity-centered software developer specializing in building intelligent applications powered by large language models and cutting-edge AI technologies. I thrive on turning ideas into practical tools that empower users, all while learning, experimenting, and staying curious.
          </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
