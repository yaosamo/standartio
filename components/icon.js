import styles from "../styles/Home.module.css";
import Image from "next/image";
import React, { useState } from "react";

const size = 24;

export default function IconLogic({ Icon, i, Ratio }) {
  const [isAnimating, setIsAnimating] = useState(false);

  function handleMouseEnter() {
    setIsAnimating(true);
  }

  function endAnimation() {
    setIsAnimating(false);
  }

  return (
    <a href={Icon.url} filename={Icon.name} key={i} download={Icon.name}>
      <div className={styles.iconshape} onMouseEnter={() => handleMouseEnter()}>
        <Image
          aria-label="Download Icon"
          className={isAnimating ? styles.iconAnimated : ""}
          src={Icon.url}
          alt={Icon.name}
          width={size * Ratio}
          height={size * Ratio}
          onAnimationEnd={() => endAnimation()}
        />
        <p className={styles.label}>{Icon.name}</p>
      </div>
    </a>
  );
}
