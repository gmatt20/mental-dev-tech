import Landing from "@/components/Landing/Landing";
import LandingWelcome from "@/components/Landing/LandingWelcome";
import Tech from "@/components/Tech/Tech";
import TechStack from "@/components/Tech/TechStack";
import Projects from "@/components/Projects";
import Inspo from "@/components/Inspo";

export default function Home() {
  return (
    <div id="home" className="w-screen">
      <Landing />
      <LandingWelcome />
      <Tech />
      <Projects />
      <TechStack />
      <Inspo />
    </div>
  );
}
