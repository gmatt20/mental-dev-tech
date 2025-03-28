import { ProjectData } from "@/data/ProjectData";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="mb-10">
      <h1 className="font-syne text-center text-5xl mb-10">PROJECTS</h1>
      <div className="grid grid-cols-2 grid-flow-row gap-10 w-screen max-md:grid-cols-1">
        {ProjectData.map((project, id) => (
          <div
            key={id}
            className="flex flex-col gap-10 items-center justify-center">
            <div className="bg-darker rounded-lg p-10 max-w-[80%] text-center h-[100%]">
              <Link
                href={project.link}
                rel="noopener noreferrer"
                target="_blank">
                <div>
                  <Image
                    src={project.url}
                    alt={project.alt}
                    className="rounded-lg max-w-[100%] mb-5"
                  />
                </div>
                <div>
                  <h1 className="text-xl">{project.title}</h1>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
