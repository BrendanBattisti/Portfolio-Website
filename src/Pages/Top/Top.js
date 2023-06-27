import styles from "./top.module.css";
import Page from "..//Page/Page";
import { useState, useEffect } from "react";

export default function Top() {
  const [name_text, setNameText] = useState("");
  const [activeLink, setActiveLink] = useState(-1);
  const linksList = ["About", "Experience", "Projects", "Contact"];

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    async function type() {
      const name_text = "Hi, I'm Brendan";

      var current = "";
      for (let i = 0; i < name_text.length; i++) {
        current = current + name_text[i];
        setNameText(current);
        await sleep(70);
      }

      await sleep(300);

      for (let i = 0; i <= linksList.length; i++) {
        setActiveLink(i);
        await sleep(170);
      }
    }
    type();
  }, []);

  const hidden = {
    visibility: "hidden",
    animation: "none",
  };

  const visible = {
    animationTimingFunction: "ease-in",
    animation: `${styles.fadeIn} 1s`,
  };

  function Link(name, index) {
    return (
      <div
        key={`link${index}`}
        style={index < activeLink ? visible : hidden}
        className={styles.link}
      >
        <a href={`#${name}`}>{name}</a>
      </div>
    );
  }

  const content = (
    <header>
      <div className={styles.title}>{name_text}</div>
      <div className={styles.links}>{linksList.map(Link)}</div>
    </header>
  );

  return <Page content={content} name={"top"} />;
}
