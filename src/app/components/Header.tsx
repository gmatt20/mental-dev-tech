import { Gugi } from "next/font/google";
import Nav from "./Nav"

const gugi = Gugi({
  weight: "400",
  subsets: ["sans"],
});

export default function Header() {
  return (
    <header className="flex justify-between items-center px-16">
      <div className={gugi.className}>
        <h1 className="text-4xl text-center">MENTAL DEV TECH</h1>
      </div>
      <Nav />
    </header>
  );
}
