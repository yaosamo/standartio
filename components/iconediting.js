import styles from "../styles/Home.module.css";
import Image from "next/image";
import React, { useState } from "react";
import fs from "fs";

export async function getStaticProps() {
  const fileNames = fs.readFile("../components/icons.json", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}

function HandleChange(event) {
  console.log(event);
}

function EditIcon({ Icon }) {
  return (
    <>
      <form className={styles.editing}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={(e) => HandleChange(e.target.value)}
          defaultValue={Icon.name}
        />
        <label>Tags</label>
        <input type="text" name="name" defaultValue={Icon.tags} />
        <label>Update File</label>
        <input className={styles.upload} type="file" name="file upload" />
        <button>Save →</button>
      </form>
    </>
  );
}

export default function IconElement({ Icon, i }) {
  const [editing, setEdit] = useState(false);

  function IsEditing() {
    setEdit(!editing);
  }

  return (
    <>
      <a
        onClick={() => {
          IsEditing();
        }}
        key={i}
        download={Icon.name}
      >
        <div className={styles.iconshape}>
          <Image
            aria-label="Download Icon"
            className={styles.iconAnimated}
            src={Icon.url}
            alt={Icon.name}
            width={24}
            height={24}
          />
          <p className={styles.label}>{Icon.name}</p>
        </div>
      </a>
      {editing && <EditIcon Icon={Icon} />}
    </>
  );
}
