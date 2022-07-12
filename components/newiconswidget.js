import styles from "../styles/Home.module.css";
import Image from "next/image";
import React, { useState } from "react";
import IconsData from "../components/icons.json";

export function NewIconsPreview(props) {
  return (
    <div className={styles.ticker_newicon}>
      <Image
        src={props.Icon.url}
        width={24}
        height={24}
        aria-label="New Icon"
        alt={props.Icon.name}
      />
      <p>{props.Icon.name}</p>
    </div>
  );
}

export default function NewIconsWidget(props) {
  const NumberofnewIcons = 4;
  const NewIconsIndex = IconsData.length - NumberofnewIcons;
  let newIconsData = [];

  for (let i = NewIconsIndex; i < IconsData.length; i++) {
    newIconsData.push(<NewIconsPreview key={i} Icon={IconsData[i]} />);
  }

  return (
    <marquee className={styles.ticker}>
      <div className={styles.ticker_items_wrap}>
        <div className={styles.ticker_item}>New Icons Added / 添加了新图标</div>
        {newIconsData}
      </div>
    </marquee>
  );
}
