import React from "react";
import { Gugi, Syne } from "next/font/google";
import Link from "next/link";

interface List {
  item: string;
  id: number;
  link: string;
}

const listItems: List[] = [
  { item: "About", id: 1, link: "#about" },
  { item: "Tech Stack", id: 2, link: "#tech-stack" },
  { item: "Projects", id: 3, link: "#projects" },
];

const gugi = Gugi({
  weight: "400",
  subsets: ["sans"],
});
const syne = Syne({
  weight: "800",
  subsets: ["sans"],
});

const NavItems: React.FC = () => {
  return (
    <div className="hidden gap-6 flex-row items-center justify-between md:flex">
      <div>
        <h1 className="text-left mr-5 p-2 text-3xl hover:bg-dark hover:cursor-pointer hover:duration-150 hover:ease-in  rounded-md text-primary font-syne tracking-widest">
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
