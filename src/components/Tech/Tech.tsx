"use client";

import {
  SiNextdotjs,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTailwindcss,
  SiCplusplus,
  SiGit,
  SiGithub,
} from "@icons-pack/react-simple-icons";
import Slider from "react-infinite-logo-slider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "motion/react";

export default function Tech() {
  return (
    <div className="flex items-center justify-center mb-10 bg-darker p-14">
      {" "}
      <TooltipProvider delayDuration={100} skipDelayDuration={0}>
        <Slider
          width="100px"
          duration={30}
          pauseOnHover={true}
          blurBorders={false}
          blurBorderColor={"#fff"}>
          <Slider.Slide>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.div whileHover={{ scale: 1.2 }}>
                  <SiNextdotjs className="p-2" size={70} />
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Next.js</p>
              </TooltipContent>
            </Tooltip>
          </Slider.Slide>

          <Slider.Slide>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.div whileHover={{ scale: 1.2 }}>
                  <SiTypescript className="p-2" color="#3178C6" size={70} />
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>
                <p>TypeScript</p>
              </TooltipContent>
            </Tooltip>
          </Slider.Slide>

          <Slider.Slide>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.div whileHover={{ scale: 1.2 }}>
                  <SiHtml5 className="p-2" color="#E34F26" size={70} />
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>
                <p>HTML5</p>
              </TooltipContent>
            </Tooltip>
          </Slider.Slide>

          <Slider.Slide>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.div whileHover={{ scale: 1.2 }}>
                  <SiCss className="p-2" color="#663399" size={70} />
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>
                <p>CSS</p>
              </TooltipContent>
            </Tooltip>
          </Slider.Slide>

          <Slider.Slide>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.div whileHover={{ scale: 1.2 }}>
                  <SiJavascript className="p-2" color="#F7DF1E" size={70} />
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>
                <p>JavaScript</p>
              </TooltipContent>
            </Tooltip>
          </Slider.Slide>

          <Slider.Slide>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.div whileHover={{ scale: 1.2 }}>
                  <SiTailwindcss className="p-2" color="#06B6D4" size={70} />
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Tailwind CSS</p>
              </TooltipContent>
            </Tooltip>
          </Slider.Slide>

          <Slider.Slide>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.div whileHover={{ scale: 1.2 }}>
                  <SiCplusplus className="p-2" color="#00599C" size={70} />
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>
                <p>C++</p>
              </TooltipContent>
            </Tooltip>
          </Slider.Slide>

          <Slider.Slide>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.div whileHover={{ scale: 1.2 }}>
                  <SiGit className="p-2" color="#F05032" size={70} />
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Git</p>
              </TooltipContent>
            </Tooltip>
          </Slider.Slide>

          <Slider.Slide>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.div whileHover={{ scale: 1.2 }}>
                  <SiGithub className="p-2" size={70} />
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>
                <p>GitHub</p>
              </TooltipContent>
            </Tooltip>
          </Slider.Slide>
        </Slider>
      </TooltipProvider>
    </div>
  );
}
