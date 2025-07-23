import projects from "../../Data/Projects.json";
import Project from "../Components/Project";
import Section from "../Components/Section";
const Portfolio = () => {
  return (
    <Section id="portfolio">
      <h2>Portfolio</h2>
      <div className="grid grid-cols-2">
        {projects.map((project) => Project(project))}
      </div>
    </Section>
  );
};
export default Portfolio;
