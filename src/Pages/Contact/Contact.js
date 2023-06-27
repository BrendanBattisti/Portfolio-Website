import Page from "../Page/Page";
import linkedIn from "../../img/Links/LI-In-Bug.png";
import github from "../../img/Links/github-mark-white.png";
import styles from "./contact.module.css";
import { useRef, useState } from "react";
export default function Contact() {
  const refRef = useRef(null);

  const [scroll, setScroll] = useState(0);

  window.addEventListener("scroll", () => {
    if (refRef.current != null) {
      const pos = refRef.current.getBoundingClientRect().top;
      if (pos < 500) {
        setScroll(pos);
      }
    }
  });

  const messageStyle = {
    opacity: (-1 / 500) * (scroll - 700),
  };

  const content = (
    <div className={styles.container} ref={refRef}>
      <div className={styles.message} style={messageStyle}>
        Check me out!
      </div>

      <div className={styles.row}>
        <a href="https://github.com/BrendanBattisti" target="_blank">
          <img src={github} />
        </a>
        <a
          href="https://www.linkedin.com/in/brendan-battisti-0a548785/"
          target="_blank"
        >
          <img src={linkedIn} />
        </a>
      </div>
    </div>
  );

  // Other color: #FCF6F5FF
  return <Page content={content} name="Contact" backgroundColor="#2BAE66FF" />;
}
