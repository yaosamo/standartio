import styles from "../styles/Home.module.css";

export default function AboutWidget() {
  return (
    <span className={styles.about}>
      <p className={styles.title}>A word about Standartio</p>
      <p>
        How do you like new website? I’ll try to bring back some of the older
        icons. For now you can just{" "}
        <a
          className={styles.link}
          href="/standartio-archive.zip"
          download="Archived icons"
        >
          download them as a zip.
        </a>
        <br /> <br />
        If you’re new here, this is{" "}
        <a
          className={styles.link}
          href="https://twitter.com/yaosamo/"
          rel="noreferrer"
          target="_blank"
        >
          @yaosamo’s
        </a>{" "}
        project & Icons is one of my passions. Also absolutely no trackers in
        here. Oh and here’s the{" "}
        <a
          className={styles.link}
          href="https://github.com/yaosamo/standartio/blob/main/License_and_Privacy_Policy.md"
          rel="noreferrer"
          target="_blank"
        >
          license
        </a>{" "}
        (psst, it’s free for commercial projects)
      </p>
    </span>
  );
}
