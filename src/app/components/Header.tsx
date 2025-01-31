import { Gugi } from "next/font/google";
import Nav from "./Nav";

const gugi = Gugi({
  weight: "400",
  subsets: ["sans"],
});

export default function Header() {
  return (
    <header className="flex justify-between items-center mx-16 my-5">
      <div className={gugi.className}>
        <h1 className="text-4xl text-left hover:bg-hover hover:cursor-pointer hover:duration-150 hover:ease-in  rounded-md active:bg-active px-3 py-2">
          MENTAL DEV TECH
        </h1>
      </div>
      <Nav />
    </header>
  );
}
