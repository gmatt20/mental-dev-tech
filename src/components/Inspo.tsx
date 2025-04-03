import Superman from "@/public/superman.webp";
import Image from "next/image";

export default function Inspo(){
  return (
    <div className="w-screen flex justify-center items-center flex-col mb-10">
      <div className="w-[80%]">
        <Image
          src={Superman}
          alt="Photo of superman"
          className="rounded-lg mx-0"
          width={1000}
          height={1000}
        />
        <h1 className="text-2xl md:text-5xl">
          &quot;The only way to do great work is to love what you do.&quot;
        </h1>
        <p>- Steve Jobs</p>
      </div>
    </div>
  );
}