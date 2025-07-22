import projects from "../../Data/Projects.json";
import Project from "../Components/Project";
import Section from "../Components/Section";
const Portfolio = () => {
  return (
    <Section id="portfolio">
      <h2>Portfolio</h2>
      {projects.map((project) => Project(project))}
    </Section>
  );
};
export default Portfolio;
