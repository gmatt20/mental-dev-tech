"use client";

import Image from "next/image";
import computer from "@/public/computer.webp";
import { Gugi, Courier_Prime } from "next/font/google";
import { TypeAnimation } from "react-type-animation";

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
    <div className="w-screen flex flex-col items-center">
      <Image src={computer} width={500} height={500} alt="Mr. Iby" />
      <TypeAnimation
        sequence={["FRONTEND DEVELOPER"]}
        wrapper="span"
        className={`${courierPrime.className} text-5xl text-primary`}
      />
      <p className="text-center">
        Hi, I’m Matthew, a passionate software developer specializing in
        frontend web development. With over a year of experience, I create
        beautiful, user-friendly, and responsive websites. I focus on building
        high-quality front-end experiences that help bring ideas to life.
      </p>
    </div>
  );
}
