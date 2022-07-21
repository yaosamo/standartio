import styles from "../styles/Home.module.css";
import IconsData from "../components/icons.json";
import { useSession, signIn, signOut } from "next-auth/react";
import IconElement from "../components/iconediting";

function IconsList() {
  const SortedLatestFirst = IconsData.reverse();
  return SortedLatestFirst.map((Icon, i) => (
    <IconElement Icon={Icon} key={i} />
  ));
}

function AdminUI() {
  const { data: session } = useSession();
  return (
    <div className={styles.admin}>
      <div className={styles.menu}>
        <a>Icons</a>
        <a className={styles.inactive}>Figma</a>
        <a className={styles.inactive}>About</a>
        <button onClick={() => signOut()}>
          <a className={styles.inactive}>Logout</a>
        </button>
        <div>
          <p>Signed in as {session.user.email}</p>
        </div>
      </div>
      <div className={styles.icons}>
        <button>Upload Beautiful Icons →</button>
        <IconsList />
      </div>
    </div>
  );
}

export default function Admin() {
  const { data: session } = useSession();

  if (session) {
    if (session.user.email === "yaosamo@gmail.com") {
      return <AdminUI session={session} />;
    }
    return (
      <div className={styles.admin}>
        <div className={styles.login}>
          <p>Well, hello! {session.user.name}.</p>
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.admin}>
      <div className={styles.login}>
        <p>Login for Yaosamo</p> <br />
        <button onClick={() => signIn("twitter")}>Sign in</button>
      </div>
    </div>
  );
}
