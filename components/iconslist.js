import IconsData from "../components/icons.json";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const size = 24;

export default function IconsList({ filteredIcons }) {
  return filteredIcons.map((Icon, i) => (
    <div className={styles.iconshape} key={i}>
      <Image src={Icon.url} alt={Icon.name} width={size} height={size} />
      <a className={styles.label}>{Icon.name}</a>
    </div>
  ));
}
