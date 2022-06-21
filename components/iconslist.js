import styles from "../styles/Home.module.css";
import Image from "next/image";
import React, { useState } from "react";
import IconLogic from "../components/icon";

const size = 24;

export default function IconsList({ filteredIcons, ratio }) {
  return filteredIcons.map((Icon, i) => (
    <IconLogic Icon={Icon} key={i} Ratio={ratio} />
  ));
}
