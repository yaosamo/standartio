import IconsData from "../components/icons.json";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const size = 24;

export default function IconsList({ filteredIcons, ratio }) {
  return filteredIcons.map((Icon, i) => (
    <div className={styles.iconshape} key={i}>
      <Image
        src={Icon.url}
        alt={Icon.name}
        width={size * ratio}
        height={size * ratio}
      />
      <a className={styles.label}>{Icon.name}</a>
    </div>
  ));
}
