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
        <ul className="gap-6 flex-col items-center justify-center flex ">
          <li className="text-center hover:bg-hover hover:cursor-pointer hover:duration-150 hover:ease-in rounded-md active:bg-active">
            HOME
          </li>
          <li className="text-center hover:bg-hover hover:cursor-pointer hover:duration-150 hover:ease-in rounded-md active:bg-active">
            ABOUT
          </li>
          <li className="text-center hover:bg-hover hover:cursor-pointer hover:duration-150 hover:ease-in rounded-md active:bg-active">
            PROJECTS
          </li>
          <li className="text-center hover:bg-hover hover:cursor-pointer hover:duration-150 hover:ease-in rounded-md active:bg-active">
            BLOG
          </li>
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
