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
            <div className={styles.iconshape} key={Icon}>
              <div className={styles.icon}>{Icon.name}</div>
            </div>
          );
        })}
        <div className={styles.search}>Search</div>
        <div className={styles.setting_size}>x2</div>
        <div className={styles.setting_weight}>1.5</div>
      </main>
    </div>
  );
}
