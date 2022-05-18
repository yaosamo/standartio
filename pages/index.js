import Head from "next/head";
import styles from "../styles/Home.module.css";
import Icons from "../components/icons.json";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Standartio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {Icons.map(function (Icon) {
          return (
            <div className={styles.iconshape} key={Icon.name}>
              <div className={styles.icon}>{Icon.name}</div>
            </div>
          );
        })}
        <div className={styles.search}>
          <input
            className={styles.search_input}
            jsaction="paste:puy29d;"
            maxLength="2048"
            name="q"
            type="text"
            aria-autocomplete="both"
            aria-haspopup="false"
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
            autoFocus=""
            role="combobox"
            spellCheck="false"
            title="Search"
            placeholder="Search"
            aria-label="Search"
            data-ved=""
          />
        </div>
        <div className={styles.setting_size}>x2</div>
        <div className={styles.setting_weight}>1.5</div>
      </main>
    </div>
  );
}
