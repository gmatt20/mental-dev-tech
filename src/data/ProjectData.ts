import { StaticImageData } from "next/image";
import bravo from "@/public/bravo.jpg"
import lexicon from "@/public/lexicon.webp"
import tkd from "@/public/tkd.webp";
import acm from "@/public/acm.webp";
import aisc from "@/public/aisc.webp";

interface Project {
  url: StaticImageData;
  link: string;
  title: string;
  alt: string;
}

export const ProjectData: Project[] = [
  {
    url: bravo,
    link: "https://github.com/gmatt20/bravo-public",
    title: "AI-Powered Schedule Optimization Web App",
    alt: "Picture of the AI-Powered Schedule Optimization Web App"
  },
  {
    url: lexicon,
    link: "https://github.com/gmatt20/lexicon",
    title: "Lexicon - LLM Personality",
    alt: "Picture of Lexicon"
  },
  {
    url: tkd,
    link: "https://tkd.ucrhighlanders.org/",
    title: "TKD @ UCR Website",
    alt: "Picture of The Taekwondo @ UCR Website",
  },
  {
    url: acm,
    link: "https://acm.cs.ucr.edu/",
    title: "ACM @ UCR",
    alt: "Picture of the ACM @ UCR Website"
  },
  {
    url: aisc,
    link: "https://aisc.ucrhighlanders.org/",
    title: "AI Student Collective @ UCR",
    alt: "Picture of the AI Student Collective @ UCR Website"
  },
];
