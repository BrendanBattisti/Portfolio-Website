import Top from "./Pages/Top/Top.js";
import Background from "./Pages/Background/Background";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Projects from "./Pages/Projects/Projects";
export default function Home({ projectData }) {
  return (
    <>
      <Background />
      <Top />
      <About />
      <Projects projects={projectData} />
      <Contact />
    </>
  );
}
