import { ProjectData } from "@/data/ProjectData";
import Link from "next/link";
import Image from "next/image";

export default function Projects(){
  

  return (
    <div>
      <h1 className="font-syne">PROJECTS</h1>
      {ProjectData.map((project, id) => (
        <div key={id}>
          <div>
            <Image src={project.url} alt={project.alt} />
          </div>
          <div>
            <h1></h1>
          </div>
        </div>
      ))}
    </div>
  );
}