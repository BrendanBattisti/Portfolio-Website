import Page from "../Page/Page";
import styles from "./projects.module.css";

export default function Projects({ projects }) {
  function ProjectPreview(data) {
    return (
      <div key={data.key} className={styles.previewContainer}>
        <div className={styles.previewText}>
          <div className={styles.projectHeader}>{data.title}</div>
        </div>
        <div className={styles.imageContainer}>
          <img className={styles.projectImg} src={data.image} alt="" />
        </div>
      </div>
    );
  }

  const content = (
    <div className={styles.container}>{projects.map(ProjectPreview)}</div>
  );
  // Other color: #ADEFD1FF
  return <Page content={content} name="Projects" backgroundColor="#00203FFF" />;
}
