import Image from "next/image";
import UCR from "@/public/ucr-and-bell-tower.webp";

export default function About(){
  return (
    <div className="w-screen px-8 text-left text-lg leading-10">
      <h1 className="text-3xl mb-5 text-center">About Me</h1>
      <p>
        My journey into software development began while studying psychology at
        the University of California, Riverside. During my exploration of
        different subjects, I took my first formal computer science course,
        where I learned C++ programming. The creativity and logic behind coding
        instantly fascinated me, but at the time, my focus was on becoming a
        psychologist.
      </p>
      <Image
        src={UCR}
        alt="picture of UC Riverside"
        className="rounded-lg mx-0 my-10"
        width={500}
        height={500}
      />
      <p>
        Despite not pursuing additional CS courses initially, I developed a
        passion for programming and began teaching myself HTML, CSS, and
        JavaScript as a hobby. However, everything changed in the summer of
        2024, when I decided to take programming seriously. I dove deep into web
        development, learning through freeCodeCamp, The Odin Project,
        documentation, and YouTube tutorials. That summer, I realized my true
        passion was in software engineering.
      </p>
      <p>
        Since then, I have taken more formal computer science courses, including
        Object-Oriented Programming in C++ at UCR, and I’m currently working
        toward the IBM Full Stack Developer Specialization on Coursera.
        Additionally, I’ve been actively involved in my university’s Association
        for Computing Machinery (ACM), where I collaborated with a team of
        developers to build a website for the Taekwondo Club @ UCR. I also
        participated in CutieHack, a hackathon hosted by my university, gaining
        hands-on experience in collaborative software development.
      </p>
      <p>
        I aspire to become a frontend software engineer and thrive in a
        collaborative engineering team where I can contribute, learn, and grow
        alongside other developers. I love working in a team setting, seeing
        projects evolve, and building scalable applications that make an impact.
      </p>
      <p>
        While my primary focus is frontend development, I am also delving into
        backend technologies to become a full-stack developer. My passion for
        programming keeps me coming back—I love the creative freedom of
        building, the constant learning process, and the problem-solving aspect
        of software engineering. There’s nothing more fulfilling than bringing
        ideas to life through code, and I’m excited to continue growing in this
        field.
      </p>
    </div>
  );
}