"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Syne } from "next/font/google";
import { AnimatePresence, motion } from "motion/react";

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
    { item: "Projects", id: 1, link: "#projects" },
    { item: "Tech Stack", id: 2, link: "#tech-stack" },
    { item: "About", id: 3, link: "#about" },
  ];

  return (
    <div className="md:hidden relative flex gap-6 flex-rowx items-center justify-between">
      <h1
        className={`${syne.className} text-left text-xl hover:bg-dark p-2 hover:cursor-pointer hover:duration-150 hover:ease-in rounded-md text-primary tracking-widest`}>
        <Link href="#home">MDT</Link>
      </h1>
      {open ? (
        <AnimatePresence>
          <motion.div
            initial={{ x: 300 }}
            animate={{
              x: 0,
              transition: { type: "spring", stiffness: 100, damping: 20 },
            }}
            exit={{
              x: 300,
              transition: { type: "spring", stiffness: 100, damping: 20 },
            }}
            key="modal"
            className="bg-darker absolute top-0 -right-8 h-screen text-3xl">
            <X
              size={40}
              onClick={handleOpen}
              className="absolute right-8 top-1 hover:bg-dark hover:cursor-pointer hover:duration-150 hover:ease-in"
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
          </motion.div>
        </AnimatePresence>
      ) : (
        <AnimatePresence>
          <Menu
            onClick={handleOpen}
            size={40}
            className="cursor-pointer hover:bg-dark hover:cursor-pointer hover:duration-150 hover:ease-in"
          />
        </AnimatePresence>
      )}
    </div>
  );
}
