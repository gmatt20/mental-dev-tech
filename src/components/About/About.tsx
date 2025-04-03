"use client";

import Image from "next/image";
import UCR from "@/public/ucr-and-bell-tower.webp";
import SanFrancisco from "@/public/san-francisco.webp";
import Leap from "@/public/leap.webp";
import Journey from "@/public/journey.webp";
import { Syne } from "next/font/google";
import Link from "next/link";
import TrafficLights from "../ui/TrafficLights";
import { motion } from "motion/react";

const syne = Syne({
  weight: "800",
  subsets: ["sans"],
});

export default function About() {
  return (
    <div
      id="about"
      className="w-fit text-left text-lg leading-10 flex flex-col items-center lg:mx-20">
      <h1 className={`${syne.className} text-5xl mb-5 text-center`}>
        ABOUT ME
      </h1>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}>
        <div className="bg-darker p-8 rounded-lg mb-10">
          <TrafficLights />
          <div className="mt-5">
            <div className="mb-5">
              <h1 className="text-3xl leading-10 font-bold mb-10">
                Chapter 1: The Call to Build
              </h1>
              <div className="md:flex ">
                <p className="md:w-[50%] sm:mb-10 md:mr-10">
                  My journey into software development started while studying
                  psychology at the{" "}
                  <Link
                    href="https://www.ucr.edu/"
                    rel="noopener noreferrer"
                    target="_blank">
                    <p className="inline bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text">
                      University of California, Riverside
                    </p>
                  </Link>
                  . While exploring different subjects, I took my first formal
                  computer science course in C++, sparking my interest in
                  coding. Though I was initially focused on becoming a
                  psychologist, the creativity and logic of programming
                  captivated me.
                </p>
                <div className="w-[80%] md:w-[50%] lg:w-[40%] flex flex-col items-center bg-darker rounded-lg">
                  <Image
                    src={UCR}
                    alt="UC Riverside"
                    className="rounded-lg mx-0 mt-5"
                    width={500}
                    height={500}
                  />
                  <p className="text-xs w-[90%] mt-2">
                    Fun fact: I'm currently majoring in psychology but also
                    taking computer science courses to deepen my knowledge. It’s
                    an exciting way to merge my passion for human behavior with
                    my growing interest in tech!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}>
        <div className="bg-darker p-8 rounded-lg mb-10">
          <TrafficLights />
          <div className="mt-5">
            <div className="mb-5">
              <h1 className="text-3xl leading-10 font-bold mb-10">
                Chapter 2: Crossing the Threshold
              </h1>
              <div className="md:flex ">
                <p className="md:w-[50%] sm:mb-10 md:mr-10">
                  Although I didn’t pursue additional CS courses at first, I
                  began teaching myself HTML, CSS, and JavaScript as a hobby.
                  Everything changed in the summer of 2024 when I decided to
                  focus on programming full-time. I immersed myself in web
                  development, learning through freeCodeCamp, The Odin Project,
                  documentation, and YouTube tutorials. That summer, I realized
                  software engineering was my true passion.
                </p>
                <div className="w-[80%] md:w-[50%] lg:w-[40%] flex flex-col items-center bg-darker rounded-lg">
                  <Image
                    src={SanFrancisco}
                    alt="San Francisco"
                    className="rounded-lg mx-0 mt-5"
                    width={500}
                    height={500}
                  />
                  <p className="text-xs w-[90%] mt-2">
                    Fun fact: A road trip to San Francisco in 2024 solidified my
                    desire to pursue software engineering. It helped me realize
                    this was the field I wanted to dive into.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}>
        <div className="bg-darker p-8 rounded-lg mb-10">
          <TrafficLights />
          <div className="mt-5">
            <div className="mb-5">
              <h1 className="text-3xl leading-10 font-bold mb-10">
                Chapter 3: Taking a leap of faith
              </h1>
              <div className="md:flex ">
                <p className="md:w-[50%] sm:mb-10 md:mr-10">
                  Since then, I’ve completed more formal computer science
                  courses, including Object-Oriented Programming and Data
                  Structures and Algorithms in C++ at UCR, and am currently
                  pursuing the{" "}
                  <Link
                    href="https://www.coursera.org/professional-certificates/ibm-full-stack-cloud-developer"
                    rel="noopener noreferrer"
                    target="_blank">
                    <p className="inline bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text">
                      IBM Full Stack Developer Specialization on Coursera
                    </p>
                  </Link>
                  . I’m also involved in my university’s{" "}
                  <Link
                    href="https://acm.cs.ucr.edu/"
                    rel="noopener noreferrer"
                    target="_blank">
                    <p className="inline bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text">
                      ACM
                    </p>
                  </Link>
                  , where I collaborated on building a website for the{" "}
                  <Link
                    href="https://github.com/acm-ucr/tkd-website"
                    rel="noopener noreferrer"
                    target="_blank">
                    <p className="inline bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text">
                      Taekwondo Club at UCR
                    </p>
                  </Link>
                  . I also gained hands-on experience in collaborative software
                  development by participating in{" "}
                  <Link
                    href="https://cutiehack.com/"
                    rel="noopener noreferrer"
                    target="_blank">
                    <p className="inline bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text">
                      CutieHack
                    </p>
                  </Link>
                  , a hackathon hosted by my university.
                </p>
                <div className="w-[80%] md:w-[50%] lg:w-[40%] flex flex-col items-center bg-darker rounded-lg">
                  <Image
                    src={Leap}
                    alt="Lizard taking a leap of faith"
                    className="rounded-lg mx-0 mt-5"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}>
        <div className="bg-darker p-8 rounded-lg">
          <TrafficLights />
          <div className="mt-5">
            <div className="mb-5">
              <h1 className="text-3xl leading-10 font-bold mb-10">
                Chapter 4: Embracing the Destiny
              </h1>
              <div className="md:flex ">
                <p className="md:w-[50%] sm:mb-10 md:mr-10">
                  I aspire to become a frontend software engineer, thrive in a
                  collaborative engineering team, and build scalable
                  applications that make an impact. I love working with a team,
                  seeing projects evolve, and contributing to meaningful
                  software solutions.
                </p>
                <div className="w-[80%] md:w-[50%] lg:w-[40%] flex flex-col items-center bg-darker rounded-lg">
                  <Image
                    src={Journey}
                    alt="A road"
                    className="rounded-lg mx-0 mt-5"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
