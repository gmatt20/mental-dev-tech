import { StaticImageData } from "next/image";
import mockWeb from "@/public/mockWeb.webp";
import notes from "@/public/notes.webp";
import odin from "@/public/odin.webp";
import origMDT from "@/public/origMDT.webp";
import psycWeb from "@/public/psycWeb.webp";
import rpool from "@/public/rpool.webp";
import tkd from "@/public/tkd.webp";

interface Project {
  url: StaticImageData;
  link: string;
  title: string;
  alt: string;
}

export const ProjectData: Project[] = [
  {
    url: mockWeb,
    link: "https://gmatt20.github.io/mock-website1/",
    title: "Professional Mock Website",
    alt: "Picture of mock website",
  },
  {
    url: notes,
    link: "https://github.com/gmatt20/notes-application",
    title: "Fullstack Notes Application (coming soon)",
    alt: "Picture of full stack notes web application coming soon",
  },
  {
    url: odin,
    link: "https://gmatt20.github.io/odin-landing-page/",
    title: "Odin Landing Page",
    alt: "Picture of Odin Landing Page",
  },
  {
    url: origMDT,
    link: "https://gmatt20.github.io/personal-website/",
    title: "Mental Dev Tech Original Website",
    alt: "Picture of first Mental Dev Tech website",
  },
  {
    url: psycWeb,
    link: "https://gmatt20.github.io/psychologist-mock-website1/",
    title: "Professional Mock Psychologist Website",
    alt: "Picture of mock psychologist website",
  },
  {
    url: rpool,
    link: "https://r-pool.vercel.app/",
    title: "R'Pool: Cutiehack Collaborative MVP Application",
    alt: "Picture of Cutiehack MVP collaborated with a team",
  },
  {
    url: tkd,
    link: "https://tkd.ucrhighlanders.org/",
    title: "TKD @ UCR Website",
    alt: "Picture of The Taekwondo @ UCR Website",
  },
];
