import Nav from "../components/Nav/Nav";
import Landing from "../components/Landing/Landing";
import Tech from "@/components/Tech/Tech";
import About from "../components/About/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Landing />
      <Tech />
      <About />
      {/* <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer /> */}
    </>
  );
}
