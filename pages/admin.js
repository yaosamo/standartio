import styles from "../styles/Home.module.css";
import { useSession, signIn, signOut } from "next-auth/react";

function AdminUI() {
  const { data: session } = useSession();
  return (
    <div className={styles.admin}>
      <div className={styles.menu}>
        <a>Icons</a>
        <a>Figma</a>
        <a>About</a>
        <a>Logout</a>
        <div>
          <p>Signed in as {session.user.email}</p>
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      </div>
      <div className={styles.icons}>
        <p>2nd column</p>
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
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    </div>
  );
}
