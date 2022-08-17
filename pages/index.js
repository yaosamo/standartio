import Head from "next/head";
import styles from "../styles/Home.module.css";
import IconsList from "../components/iconslist";
import IconsData from "../components/icons.json";
import EmptyResults from "../components/emptyresults";
import YaosamoSearch from "../components/searchyaosamo";
import FigmaWidget from "../components/figmawidget";
import AboutWidget from "../components/aboutwidget";
import NewIconsWidget from "../components/newiconswidget";
import Script from "next/script";
import React, { useState } from "react";
import { supabase } from "../utils/supabaseClient";

export async function getStaticProps() {
  try {
    let { data, error, status } = await supabase.from("icons");

    if (error && status !== 406) {
      throw error;
    }

    if (data) {
      const iconsdata = data;
      return {
        props: {
          iconsdata,
        },
      };
    }
  } catch (error) {
    alert(error.message);
  }
}

export default function Home({ iconsdata }) {
  const [checked, setChecked] = useState(false);
  const handleSizeChange = () => {
    setChecked(!checked);
  };

  const [searchFieldValue, setSearchField] = useState("");

  const IconsSorted = []
    .concat(iconsdata)
    .sort((a, b) => (a.name > b.name ? 1 : -1));

  const filteredIcons = IconsSorted.filter((icon) => {
    return (
      icon.tags.toLowerCase().includes(searchFieldValue.toLowerCase()) ||
      icon.name.toLowerCase().includes(searchFieldValue.toLowerCase())
    );
  });

  const handleSearchChange = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Standartio - Free and Open Source Icons</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yaosamo" />
        <meta name="twitter:creator" content="@yaosamo" />
        <meta property="og:url" content="https://standart.io" />
        <meta property="og:title" content="Standartio" />
        <meta property="og:description" content="Free and open source icons" />
        <meta property="og:image" content="https://standart.io/Intro.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Standartio" />
        <meta name="description" content="Free and open source icons" />
        <link rel="icon" href="favicon.svg" />
        <link rel="mask-icon" href="favicon.svg" color="#000000;" />
      </Head>
      <Script
        type="module"
        src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
      ></Script>

      <main className={styles.main}>
        {/* Icons List */}
        <IconsList filteredIcons={filteredIcons} ratio={checked ? 2 : 1} />
        {/* Search Field */}
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
            spellCheck="false"
            title="Search"
            placeholder="Search"
            aria-label="Search"
            onChange={handleSearchChange}
          />
        </div>
        {/* x2 setting */}
        {!searchFieldValue && (
          <label className={styles.setting_size}>
            <input type="checkbox" onChange={handleSizeChange} />
            <span className={styles.indicator}>x2</span>
          </label>
        )}
        {/* Figma Widget */}
        {!searchFieldValue && <FigmaWidget />}
        {/* About Widget */}
        {!searchFieldValue && <AboutWidget />}
        {/* Search Result */}
        {filteredIcons < 1 && searchFieldValue != "yaosamo" && (
          <EmptyResults iconrequested={searchFieldValue} />
        )}
        {searchFieldValue === "yaosamo" && <YaosamoSearch />}
        {<NewIconsWidget />}
      </main>
    </div>
  );
}
