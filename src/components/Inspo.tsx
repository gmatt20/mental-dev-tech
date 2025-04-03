import Superman from "@/public/superman.webp";
import Image from "next/image";

export default function Inspo() {
  return (
    <div className="flex justify-center items-center flex-col my-10">
      <div className="w-full">
        <Image
          src={Superman}
          alt="Photo of superman"
          className="rounded-lg mx-0 max-w-[100%]"
        />
        <h1 className="text-xl leading-9 md:text-5xl">
          &quot;The only way to do great work is to love what you do.&quot;
        </h1>
        <p>- Steve Jobs</p>
      </div>
    </div>
  );
}
