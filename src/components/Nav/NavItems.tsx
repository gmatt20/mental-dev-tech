import React from "react";
import Link from "next/link";
import { Syne } from "next/font/google";

const syne = Syne({
  weight: ["800"],
  subsets: ["greek", "latin", "latin-ext"],
});

interface List {
  item: string;
  id: number;
  link: string;
}

const listItems: List[] = [
  { item: "Projects", id: 1, link: "#projects" },
  { item: "Tech Stack", id: 2, link: "#tech-stack" },
  { item: "About", id: 3, link: "#about" },
];

const NavItems: React.FC = () => {
  return (
    <div className="hidden gap-6 flex-row items-center justify-between md:flex">
      <div>
        <h1 className={`${syne.className} text-left mr-5 p-2 text-3xl hover:bg-dark hover:cursor-pointer hover:duration-150 hover:ease-in  rounded-md text-primary tracking-widest`}>
          <Link href="#home">MENTAL DEV TECH</Link>
        </h1>
      </div>
      <ul className="hidden gap-6 flex-row items-center justify-between md:flex ">
        {listItems.map((item) => (
          <div key={item.id}>
            <li
              className={
                "text-center hover:bg-dark p-2 hover:cursor-pointer hover:duration-150 hover:ease-in rounded-md"
              }>
              <Link href={item.link}>{item.item}</Link>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default NavItems;
