import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function SearchYaosamo() {
  return (
    <>
      <p>Wow you have found a secret!</p>
      <Link href={"/admin"}>Open Admin Panel</Link>
    </>
  );
}
