import Page from "../Page/Page";
import styles from "./about.module.css";
import rit from "../../img/Links/RIT.jpg";
import { useRef, useState } from "react";
export default function About() {
  const refRef = useRef(null);

  const [scroll, setScroll] = useState(0);

  window.addEventListener("scroll", () => {
    if (refRef.current != null) {
      const pos = refRef.current.getBoundingClientRect().top;
      if (pos < 500 && scroll !== pos) {
        setScroll(pos);
      }
      console.log(pos);
    }
  });

  const nameStyle = {
    opacity: (-1 / 200) * (scroll - 450),
    left: Math.min(-0.5 * Math.max(scroll - 200, 0), 0),
  };

  const schoolStyle = {
    opacity: (-1 / 200) * (scroll - 300),
    left: Math.min(-0.5 * Math.max(scroll - 50, 0), 0),
  };

  const logoStyle = {
    opacity: (-1 / 200) * (scroll - 300),
    right: Math.min(-0.5 * Math.max(scroll - 50, 0), 0),
  };

  const passionStyle = {
    opacity: (-1 / 200) * (scroll - 200),
    left: Math.min(-0.5 * Math.max(scroll, 0), 0),
  };

  const content = (
    <div ref={refRef} className={styles.container}>
      <h1 style={nameStyle}>My name is Brendan Battisti</h1>
      <div className={styles.ritRow}>
        <h2 style={schoolStyle}>
          I'm a third year computer science student at the Rochester Insitute of
          Technology
        </h2>
        <img src={rit} className={styles.ritImage} style={logoStyle} />
      </div>
      <h2 style={passionStyle}>
        I have always been passionate about doing interesting technical
        projects, whether it was automating doing my German homework in middle
        school, or building a virtual assistant to automate tasks in my home.
      </h2>
    </div>
  );
  return <Page content={content} name={"About"} />;
}
