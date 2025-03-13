import Image from "next/image";
import computer from "@/public/computer.webp";
import Link from "next/link";
export default function Landing() {
  return (
    <div className="w-screen">
      <Image src={computer} width={500} height={500} alt="Mr. Iby" />
      <h1>Frontend Developer</h1>
      <p>
        Hi, I’m Matthew, a passionate software developer specializing in
        frontend web development. With over a year of experience, I create
        beautiful, user-friendly, and responsive websites. I focus on building
        high-quality front-end experiences that help bring ideas to life.
      </p>
    </div>
  );
}
