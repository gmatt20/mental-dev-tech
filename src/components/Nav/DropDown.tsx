"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Gugi } from "next/font/google";

const gugi = Gugi({
  weight: "400",
  subsets: ["sans"],
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
    { item: "About", id: 1 },
    { item: "Projects", id: 2 },
    { item: "Experience", id: 3 },
    { item: "Blog", id: 4 },
  ];

  return (
    <div className="md:hidden flex gap-6 flex-rowx items-center justify-between">
      <h1
        className={`text-left text-4xl hover:bg-hover hover:cursor-pointer hover:duration-150 hover:ease-in rounded-md active:bg-active text-primary ${gugi.className} tracking-widest`}>
        MENTAL DEV TECH
      </h1>
      {open ? (
        <div className="bg-darker absolute top-0 right-0 h-screen py-10 px-5 text-3xl ">
          <X
            size={40}
            onClick={handleOpen}
            className="absolute right-5 top-5 cursor-pointer"
          />
          <ul>
            {listItems.map((item) => (
              <li
                className="text-center my-5 py-2 px-3 hover:bg-hover hover:cursor-pointer hover:duration-150 hover:ease-in rounded-md active:bg-active"
                key={item.id}>
                {item.item}
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
