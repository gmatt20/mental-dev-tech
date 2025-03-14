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
      <div className="my-20 mx-10 -z-10 lg:mx-20">
        <p className="text-left text-2xl leading-10 bg-darker p-8 rounded-lg">
          Hi, I’m Matthew, a passionate software developer based in Los Angeles,
          California. I specialize in frontend web development. With over a year
          of experience, I create beautiful, user-friendly, and responsive
          websites.
        </p>
      </div>
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
