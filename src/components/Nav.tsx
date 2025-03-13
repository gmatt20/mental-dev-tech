import React from "react";
import { Gugi } from "next/font/google";

interface List {
  item: string;
  id: number;
}

const listItems: List[] = [
  { item: "About", id: 1 },
  { item: "Projects", id: 2 },
  { item: "MENTAL DEV TECH", id: 3 },
  { item: "Experience", id: 4 },
  { item: "Blog", id: 5 },
];

const gugi = Gugi({
  weight: "400",
  subsets: ["sans"],
});

const Nav: React.FC = () => {
  return (
    <nav className="w-screen px-8 py-5">
      <ul className="hidden gap-6 flex-rowx items-center justify-center md:flex">
        {listItems.map((item) => (
          <li
            className={` ${
              item.id === 3
                ? `text-center text-4xl hover:bg-hover hover:cursor-pointer hover:duration-150 hover:ease-in  rounded-md active:bg-active px-3 py-2 text-primary ${gugi.className} tracking-widest`
                : "text-center hover:bg-hover hover:cursor-pointer hover:duration-150 hover:ease-in px-3 py-2 rounded-md active:bg-active"
            }`}
            key={item.id}>
            {item.item}
          </li>
        ))}
      </ul>
      <div className="md:hidden flex gap-6 flex-rowx items-center justify-center">
        <h1
          className={`text-center text-4xl hover:bg-hover hover:cursor-pointer hover:duration-150 hover:ease-in  rounded-md active:bg-active px-3 py-2 text-primary ${gugi.className} tracking-widest`}>
          MENTAL DEV TECH
        </h1>
        <div></div>
      </div>
    </nav>
  );
};

export default Nav;
