"use client";

import Image from "next/image";
import computer from "@/public/computer.webp";
import { Gugi, Courier_Prime } from "next/font/google";
import { TypeAnimation } from "react-type-animation";
import LosAngeles from "@/public/los-angeles.webp";

const gugi = Gugi({
  weight: "400",
  subsets: ["sans"],
});
const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-courier-prime",
  display: "swap",
});

export default function Landing() {
  return (
    <div className="w-screen flex flex-col lg:flex-row-reverse items-center px-8 py-20">
      <div className="absolute inset-0 w-full h-full ">
        <Image
          src={LosAngeles}
          alt="Los Angeles"
          className="w-full absolute top-9 h-80 object-cover mix-blend-color-dodge"
        />

        {/* <Image src={computer} width={400} height={400} alt="Mr. Iby" /> */}
        <div className="absolute -z-0 flex flex-col items-center justify-center top-48 left-0 right-0 max-md:top-40">
          <TypeAnimation
            sequence={[800, "FRONTEND DEVELOPER"]}
            wrapper="span"
            className={`${courierPrime.className} text-6xl text-primary text-center`}
            speed={60}
            cursor={false}
          />
          <TypeAnimation
            sequence={[1500, "Los Angeles, California"]}
            wrapper="span"
            className={`${courierPrime.className} text-2xl text-white text-center`}
            speed={40}
            cursor={false}
          />
        </div>
      </div>
      <div className="mt-80 -z-10 mx-5 lg:mx-20">
        <p className="text-left text-2xl leading-10 bg-darker p-8 rounded-lg">
          Hi, I’m Matthew, a passionate software developer based in Los Angeles,
          California. I specialize in frontend web development. With over a year
          of experience, I create beautiful, user-friendly, and responsive
          websites.
        </p>
      </div>
    </div>
  );
}
