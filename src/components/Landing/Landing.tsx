"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import LosAngeles from "@/public/los-angeles.webp";
import { Syne } from "next/font/google";

const syne = Syne({
  weight: ["800"],
  subsets: ["greek", "latin", "latin-ext"],
});

export default function Landing() {
  return (
    <div className="max-w-screen flex flex-col lg:flex-row-reverse items-center px-8 py-20 h-screen ">
      <div className="absolute inset-0 w-full h-full ">
        <Image
          src={LosAngeles}
          alt="Los Angeles"
          className="w-full h-full absolute top-9 object-cover mix-blend-color-dodge"
        />
        <div className="absolute -z-0 flex flex-col items-center justify-center top-0 bottom-0 left-0 right-0 max-md:top-40 px-10 gap-5">
          <TypeAnimation
            sequence={[500, "MATTHEW GARCIA"]}
            wrapper="span"
            className={`${syne.className} text-6xl max-md:text-3xl text-text text-center font-extrabold`}
            speed={60}
            cursor={false}
          />
          <TypeAnimation
            sequence={[1500, "FRONTEND DEVELOPER"]}
            wrapper="span"
            className={`${syne.className} text-4xl max-md:text-xl text-primary text-center font-extrabold`}
            speed={60}
            cursor={false}
          />
          <TypeAnimation
            sequence={[2500, "Los Angeles, California"]}
            wrapper="span"
            className={`${syne.className} text-2xl max-md:text-lg text-white text-center`}
            speed={40}
            cursor={false}
          />
        </div>
      </div>
    </div>
  );
}
