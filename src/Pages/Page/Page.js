import styles from "./page.module.css";

export default function Page({ content, name, backgroundColor }) {
  return (
    <section id={name} className={styles.page}>
      {content}
    </section>
  );
}
