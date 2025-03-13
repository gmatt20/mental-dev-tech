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
    <nav className="w-screen">
      <ul className="flex gap-6 flex-rowx items-center justify-center">
        {listItems.map((item) => (
          <li
            className={` ${
              item.id === 3
                ? `text-center text-4xl hover:bg-hover hover:cursor-pointer hover:duration-150 hover:ease-in  rounded-md active:bg-active px-3 py-2 text-primary ${gugi.className}`
                : "text-center hover:bg-hover hover:cursor-pointer hover:duration-150 hover:ease-in px-3 py-2 rounded-md active:bg-active"
            }`}
            key={item.id}>
            {item.item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
