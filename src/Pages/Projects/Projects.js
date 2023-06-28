import Page from "../Page/Page";
import styles from "./projects.module.css";
export default function Projects() {
  function Project(data) {
    return (
      <a href={data.link}>
        <div className={styles.projectContainer}>
          {data.title}
          <img src={data.image} />
          <div>{data.skills.map(Skill)}</div>
        </div>
      </a>
    );
  }

  function Skill(data) {
    return <div>{data}</div>;
  }

  const projectImages = require.context("../../img/Projects/", true);

  const projectData = [
    {
      title: "Portfolio Website",
      image: "portfoliowebsite.png",
      skills: ["React"],
      link: "https://brendanbattisti.github.io/Portfolio-Website/",
    },
    {
      title: "Dutch/English Classifier",
      image: "portfoliowebsite.png",
      skills: [
        "Python",
        "Machine Learning",
        "Natural Language Processing",
        "Web Scraping",
      ],
      link: "https://brendanbattisti.github.io/Portfolio-Website/",
    },
    {
      title: "Web Dashboard",
      image: "portfoliowebsite.png",
      skills: ["Python", "React", "Web Developement", "Node.js"],
      link: "https://brendanbattisti.github.io/Portfolio-Website/",
    },

    {
      title: "Beef Estore",
      image: "portfoliowebsite.png",
      skills: ["Java Spring", "Angular", "Scrum"],
      link: "https://brendanbattisti.github.io/Portfolio-Website/",
    },
  ];

  console.log(projectImages.keys());
  const projectList = projectData.map((data) => {
    const new_data = data;
    new_data.image = projectImages(`./${data.image}`);
    return new_data;
  });

  const content = (
    <div className={styles.container}>{projectList.map(Project)}</div>
  );
  // Other color: #ADEFD1FF
  return <Page content={content} name="Projects" backgroundColor="#00203FFF" />;
}
