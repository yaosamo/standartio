import React, { useState } from "react";
import IconStructure from "../components/icon";

const size = 24;

export default function IconsList({ filteredIcons, ratio }) {
  return filteredIcons.map((Icon, i) => (
    <IconStructure Icon={Icon} key={i} Ratio={ratio} />
  ));
}
