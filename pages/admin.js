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
        <p>that's 2nd column</p>
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
          <p>
            Well, hello! {session.user.name}. This is admin panel for Yaosamo.
            You're not Yaosamo, can't show it to you but here's a pineapple 🍍
          </p>
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.admin}>
      <div className={styles.login}>
        <p>
          Yaosamo is it you? Sign in please. If you're not yaosamo, you can sign
          in but it won't do anything :) Have a wonderful day!
        </p>{" "}
        <br />
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    </div>
  );
}
