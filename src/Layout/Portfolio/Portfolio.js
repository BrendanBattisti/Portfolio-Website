import projects from "../../Data/Projects.json";
import Project from "../Components/Project";
import Section from "../Components/Section";

const Portfolio = () => {
  return (
    <Section id="portfolio">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary-400 font-medium text-lg mb-4">My Work</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent mx-auto rounded-full"></div>
          <p className="text-subtext text-lg mt-6 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills
            in web development, design, and problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Project {...project} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Portfolio;
