import Page from "../Page/Page";
import styles from "./projects.module.css";
export default function Projects({ projects }) {
  function ProjectPreview(data) {
    return (
      <a href={`${data.path}`}>
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

  const content = (
    <div className={styles.container}>{projects.map(ProjectPreview)}</div>
  );
  // Other color: #ADEFD1FF
  return <Page content={content} name="Projects" backgroundColor="#00203FFF" />;
}
