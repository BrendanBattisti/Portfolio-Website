import Page from "../Page/Page";
import styles from "./projects.module.css";
export default function Projects() {
  function Project(data) {
    //return <div className={styles.projectContainer}>{data.title}</div>;
  }

  //const projectImages = require.context("../../img/Projects/", true);

  const projectData = [
    {
      title: "Portfolio Website",
      skills: ["React", "Web Developement", "Git"],
    },
  ];
  //console.log(projectImages);
  const projectList = projectData.map((data) => {
    //projectImages(`${data.title}.PNG`);
  });

  const content = (
    <div className={styles.container}>projectList.map(Project)</div>
  );
  // Other color: #ADEFD1FF
  return <Page content={content} name="Projects" backgroundColor="#00203FFF" />;
}
