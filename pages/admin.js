import styles from "../styles/Home.module.css";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Admin() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.name} {console.log(session)} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      <p>Not signed in </p> <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
