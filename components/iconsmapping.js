import IconsData from "../components/icons.json";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const size = 24;

export default function Icons(props) {
  IconsData.sort((a, b) => a.name > b.name);

  return IconsData.map(function (Icon) {
    return (
      <div className={styles.iconshape} key={Icon.name}>
        <Image
          src={Icon.url}
          alt={Icon.name}
          width={size * props.ratio}
          height={size * props.ratio}
        />
        <a className={styles.label}>{Icon.name}</a>
      </div>
    );
  });
}
