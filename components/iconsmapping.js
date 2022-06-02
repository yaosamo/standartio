import IconsData from "../components/icons.json";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const size = 24;

export default function Icons(props) {
  const IconsSorted = []
    .concat(IconsData)
    .sort((a, b) => (a.name > b.name ? 1 : -1));

  return IconsSorted.map((Icon, i) => (
    <div className={styles.iconshape} key={i}>
      <Image
        src={Icon.url}
        alt={Icon.name}
        width={size * props.ratio}
        height={size * props.ratio}
      />
      <a className={styles.label}>{Icon.name}</a>
    </div>
  ));
}
