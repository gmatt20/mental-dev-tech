"use client";

import TrafficLights from "@/components/ui/TrafficLights";
import { motion } from "motion/react";

export default function LandingWelcome() {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}>
      <div className="my-20 -z-10 lg:mx-60 bg-darker p-8 rounded-lg">
        <TrafficLights />
        <div className="mt-5">
          <div className="mb-5">
            <h1 className="text-3xl leading-10 mb-2 font-bold max-md:text-xl max-md:leading-7">
              &quot;What keeps bringing me back to software development is the
              love and thrill of building software.&quot;
            </h1>
            <p>- Matthew Garcia</p>
          </div>
          <p className="text-left text-xl leading-10 max-md:text-sm max-md:leading-7">
            Hello! I’m Matthew, a software developer specializing in frontend
            web development. I focus on building beautiful, responsive, and
            user-friendly interfaces that not only look great but feel amazing
            to use.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
