"use client";

import { TechData } from "@/data/TechData";
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
    <div className="-mx-10 flex items-center justify-center mb-10 bg-darker p-14 overflow-hidden overflow-x-hidden">
      {" "}
      <TooltipProvider delayDuration={100} skipDelayDuration={0}>
        <Slider
          width="100px"
          duration={30}
          pauseOnHover={true}
          blurBorders={false}
          blurBorderColor={"#fff"}>
          {TechData.map((tech, id) => (
            <Slider.Slide key={id}>
              <Tooltip>
                <TooltipTrigger>
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <tech.component
                      className="p-2"
                      color={tech.color}
                      size={70}
                    />
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{tech.name}</p>
                </TooltipContent>
              </Tooltip>
            </Slider.Slide>
          ))}
        </Slider>
      </TooltipProvider>
    </div>
  );
}
