import styles from "../styles/Home.module.css";
import React, { useState } from "react";

export default function NewIconsWidget(props) {
  return (
    <marquee className={styles.ticker}>
      <div className={styles.ticker_items_wrap}>
        <div className={styles.ticker_item}>New Icons Added / 添加了新图标</div>
      </div>
    </marquee>
  );
}
