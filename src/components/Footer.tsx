import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-darker max-md:flex-col flex justify-evenly items-center p-10">
      <div className="max-md:mb-10">
        <h1 className="text-xl uppercase font-syne text-left max-md:text-center">
          Matthew Garcia
        </h1>
      </div>
      <div className="max-md:mb-10">
        <ul className="gap-3 flex-col items-center justify-center flex ">
          <Link href="#home">
            <li className="text-center hover:bg-dark p-2 hover:cursor-pointer hover:duration-150 hover:ease-in rounded-md">
              HOME
            </li>
          </Link>
          <Link href="#about">
            <li className="text-center hover:bg-dark p-2 hover:cursor-pointer hover:duration-150 hover:ease-in rounded-md">
              ABOUT
            </li>
          </Link>
          <Link href="#tech-stack">
            <li className="text-center hover:bg-dark p-2 hover:cursor-pointer hover:duration-150 hover:ease-in rounded-md">
              TECH STACK
            </li>
          </Link>
          <Link href="#projects">
            <li className="text-center hover:bg-dark p-2 hover:cursor-pointer hover:duration-150 hover:ease-in rounded-md">
              PROJECTS
            </li>
          </Link>
        </ul>
      </div>
      <div className="flex items-center gap-5">
        <Link
          href="https://www.linkedin.com/in/mattg2765/"
          rel="noopener noreferrer"
          target="_blank">
          <BsLinkedin size={50} />
        </Link>
        <Link
          href="https://github.com/gmatt20"
          rel="noopener noreferrer"
          target="_blank">
          <FaGithubSquare size={58} />
        </Link>
      </div>
    </div>
  );
}
