import {
  SiNextdotjs,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTailwindcss,
  SiCplusplus,
  SiGit,
  SiGithub
} from "@icons-pack/react-simple-icons";

export default function Tech() {
  return (
    <div className="flex items-center justify-center gap-5 bg-light">
      <SiNextdotjs color="#000000" size={50} />
      <SiTypescript color="#3178C6" size={50} />
      <SiHtml5 color="#E34F26" size={50} />
      <SiCss color="#663399" size={50} />
      <SiJavascript color="#F7DF1E" size={50} />
      <SiTailwindcss color="#06B6D4" size={50} />
      <SiCplusplus color="#00599C" size={50} />
      <SiGit color="#F05032" size={50} />
      <SiGithub color="#181717" size={50} />
    </div>
  );
}
