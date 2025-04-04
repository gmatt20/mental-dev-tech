import sadLab from "@/public/sad-lab.webp";
import Image from "next/image";
import { Syne } from "next/font/google";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const syne = Syne({
  weight: ["800"],
  subsets: ["greek", "latin", "latin-ext"],
});

export default function notFound() {
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col">
        <Image alt="sad lab" src={sadLab} className="rounded-full w-[50%]" />
        <h1 className={`${syne.className} text-6xl mb-5`}>404 ERROR</h1>
        <p className="mb-5">Sad time for sad lab...</p>
        <Button variant="outline" className="text-black">
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </div>
  );
}
