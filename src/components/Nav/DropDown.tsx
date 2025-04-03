"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Syne } from "next/font/google";

const syne = Syne({
  weight: ["800"],
  subsets: ["greek", "latin", "latin-ext"],
});

export default function DropDown() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const listItems = [
    { item: "About", id: 1, link: "#about" },
    { item: "Tech Stack", id: 2, link: "#tech-stack" },
    { item: "Projects", id: 3, link: "#projects" },
  ];

  return (
    <div className="md:hidden relative flex gap-6 flex-rowx items-center justify-between">
      <h1
        className={`${syne.className} text-left text-4xl hover:bg-dark p-2 hover:cursor-pointer hover:duration-150 hover:ease-in rounded-md text-primary tracking-widest`}>
        <Link href="#home">MENTAL DEV TECH</Link>
      </h1>
      {open ? (
        <div className="bg-darker absolute top-0 -right-8 h-screen text-3xl">
          <X
            size={40}
            onClick={handleOpen}
            className="absolute right-7 top-7 hover:bg-dark hover:cursor-pointer hover:duration-150 hover:ease-in"
          />
          <ul className="mt-20">
            {listItems.map((item) => (
              <li
                onClick={handleOpen}
                className="text-center p-10 w-full hover:bg-dark hover:cursor-pointer hover:duration-150 hover:ease-in"
                key={item.id}>
                <Link href={item.link}>{item.item}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <Menu onClick={handleOpen} size={40} className="cursor-pointer" />
      )}
    </div>
  );
}
