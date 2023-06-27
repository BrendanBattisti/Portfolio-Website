import Page from "../Page/Page";
import styles from "./about.module.css";
import rit from "../../img/Links/RIT.jpg";

export default function About() {
  const content = (
    <div>
      <h1>My name is Brendan Battisti</h1>
      <div className={styles.ritRow}>
        <h2>
          I am a third year computer science student at the Rochester Insitute
          of Technology
        </h2>
        <img src={rit} className={styles.ritImage} />
      </div>
    </div>
  );
  return <Page content={content} name={"About"} />;
}
