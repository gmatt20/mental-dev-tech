import Landing from "@/components/Landing/Landing";
import LandingWelcome from "@/components/Landing/LandingWelcome";
import Tech from "@/components/Tech/Tech";
import About from "@/components/About/About";
import TechStack from "@/components/Tech/TechStack";
import Projects from "@/components/Projects";
import Inspo from "@/components/Inspo";

export default function Home() {
  return (
    <div id="home">
      <Landing />
      <LandingWelcome />
      <Tech />
      <About />
      <TechStack />
      <Projects />
      <Inspo />
    </div>
  );
}
