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

export default function Tech() {
  return (
    <div className="flex items-center justify-center mb-10 bg-darker p-10">
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
              <TooltipTrigger>
                <SiNextdotjs size={50} />
              </TooltipTrigger>
              <TooltipContent>
                <p>Next.js</p>
              </TooltipContent>
            </Tooltip>
          </Slider.Slide>

          <Slider.Slide>
            <Tooltip>
              <TooltipTrigger>
                <SiTypescript color="#3178C6" size={50} />
              </TooltipTrigger>
              <TooltipContent>
                <p>TypeScript</p>
              </TooltipContent>
            </Tooltip>
          </Slider.Slide>

          <Slider.Slide>
            <Tooltip>
              <TooltipTrigger>
                <SiHtml5 color="#E34F26" size={50} />
              </TooltipTrigger>
              <TooltipContent>
                <p>HTML5</p>
              </TooltipContent>
            </Tooltip>
          </Slider.Slide>

          <Slider.Slide>
            <Tooltip>
              <TooltipTrigger>
                <SiCss color="#663399" size={50} />
              </TooltipTrigger>
              <TooltipContent>
                <p>CSS</p>
              </TooltipContent>
            </Tooltip>
          </Slider.Slide>

          <Slider.Slide>
            <Tooltip>
              <TooltipTrigger>
                <SiJavascript color="#F7DF1E" size={50} />
              </TooltipTrigger>
              <TooltipContent>
                <p>JavaScript</p>
              </TooltipContent>
            </Tooltip>
          </Slider.Slide>

          <Slider.Slide>
            <Tooltip>
              <TooltipTrigger>
                <SiTailwindcss color="#06B6D4" size={50} />
              </TooltipTrigger>
              <TooltipContent>
                <p>Tailwind CSS</p>
              </TooltipContent>
            </Tooltip>
          </Slider.Slide>

          <Slider.Slide>
            <Tooltip>
              <TooltipTrigger>
                <SiCplusplus color="#00599C" size={50} />
              </TooltipTrigger>
              <TooltipContent>
                <p>C++</p>
              </TooltipContent>
            </Tooltip>
          </Slider.Slide>

          <Slider.Slide>
            <Tooltip>
              <TooltipTrigger>
                <SiGit color="#F05032" size={50} />
              </TooltipTrigger>
              <TooltipContent>
                <p>Git</p>
              </TooltipContent>
            </Tooltip>
          </Slider.Slide>

          <Slider.Slide>
            <Tooltip>
              <TooltipTrigger>
                <SiGithub size={50} />
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
