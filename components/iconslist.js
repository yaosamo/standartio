import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";

const size = 24;

export default function IconsList({ filteredIcons, ratio }) {
  return filteredIcons.map((Icon, i) => (
    <a href={Icon.url} filename="image.svg" key={i} download={Icon.name}>
      <div className={styles.iconshape}>
        <Image
          aria-label="Download Icon"
          className={styles.icon}
          src={Icon.url}
          alt={Icon.name}
          width={size * ratio}
          height={size * ratio}
        />
        <p className={styles.label}>{Icon.name}</p>
      </div>
    </a>
  ));
}
