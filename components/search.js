import styles from "../styles/Home.module.css";
import IconsList from "../components/iconslist";
import React, { useState } from "react";

export default function Search({ IconsData }) {
  const [searchField, setSearchField] = useState("");

  const filteredIcons = IconsData.filter((icon) => {
    return icon.tags.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <main className={styles.main}>
      <IconsList filteredIcons={filteredIcons} />
      <div className={styles.search}>
        <input
          className={styles.search_input}
          jsaction="paste:puy29d;"
          maxLength="2048"
          name="q"
          type="text"
          aria-autocomplete="both"
          aria-haspopup="false"
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          autoFocus=""
          role="combobox"
          spellCheck="false"
          title="Search"
          placeholder="Search"
          aria-label="Search"
          onChange={handleChange}
        />
      </div>
      <label className={styles.setting_size}>
        <input type="checkbox" onChange={handleChange} />
        <span className={styles.indicator}>x2</span>
      </label>
    </main>
  );
}
