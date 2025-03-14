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
    <div className="w-screen flex flex-col lg:flex-row-reverse items-center px-8 py-20 ">
      <Image src={computer} width={400} height={400} alt="Mr. Iby" />
      <div>
        <TypeAnimation
          sequence={["FRONTEND DEVELOPER"]}
          wrapper="span"
          className={`${courierPrime.className} text-6xl text-primary text-center`}
        />
        <p className="text-left text-2xl leading-10">
          Hi, I’m Matthew, a passionate software developer based in Los Angeles,
          California. I specialize in frontend web development. With over a year
          of experience, I create beautiful, user-friendly, and responsive
          websites.
        </p>
      </div>
    </div>
  );
}
