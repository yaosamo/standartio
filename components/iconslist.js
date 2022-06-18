import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";

const ErrorMsg = (props) => {
  const [src, setSrc] = useState(""); // initial src will be empty

  useEffect(() => {
    const blob = new Blob([image], { type: "image/svg+xml" });
    const svg = URL.createObjectURL(blob);

    setSrc(svg); // after component is mount, src will change
  }, []);
};

const size = 24;

export default function IconsList({ filteredIcons, ratio }) {
  return filteredIcons.map((Icon, i) => (
    <a key={i} href={Icon.url}>
      <div className={styles.iconshape}>
        <Image
          className={styles.icon}
          src={Icon.url}
          alt={Icon.name}
          width={size * ratio}
          height={size * ratio}
        />
        <a className={styles.label}>{Icon.name}</a>
      </div>
    </a>
  ));
}
