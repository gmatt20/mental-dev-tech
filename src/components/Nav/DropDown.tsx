"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
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

  return (
    <div className="md:hidden flex gap-6 flex-rowx items-center justify-between">
      <h1
        className={`text-left text-4xl hover:bg-hover hover:cursor-pointer hover:duration-150 hover:ease-in rounded-md active:bg-active text-primary ${gugi.className} tracking-widest`}>
        MENTAL DEV TECH
      </h1>
      {open ? (
        <div>
          <h1>hi</h1>
        </div>
    ) : <Menu onClick={handleOpen} size={40} />}
    </div>
  );
}
