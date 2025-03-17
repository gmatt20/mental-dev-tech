import Landing from "@/components/Landing/Landing";
import Tech from "@/components/Tech/Tech";
import About from "@/components/About/About";
import TechStack from "@/components/Tech/TechStack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <>
      <Landing />
      <div className="my-20 -z-10 lg:mx-20">
        <p className="text-left text-2xl leading-10 bg-darker p-8 rounded-lg">
          Hi, I’m Matthew, a passionate software developer based in Los Angeles,
          California. I specialize in frontend web development. With over a year
          of experience, I create beautiful, user-friendly, and responsive
          websites.
        </p>
      </div>
      <Tech />
      <About />
      <TechStack />
      <Projects />
      <Experience />
    </>
  );
}
