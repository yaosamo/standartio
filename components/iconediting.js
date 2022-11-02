import styles from "../styles/Home.module.css";
import { useState } from "react";
import { supabase } from "../utils/supabaseClient";

export default function EditIcon({ Icon }) {
  const [loading, setLoading] = useState(true);

  const [iconid, setID] = useState(Icon.id);
  const [iconname, setName] = useState(Icon.name);
  const [iconurl, setUrl] = useState(Icon.url);
  const [icontags, setTags] = useState(Icon.tags);

  return (
    <>
      <form className={styles.editing}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          defaultValue={iconname}
        />
        <label>Tags</label>
        <input type="text" name="name" defaultValue={icontags} />
        <label>Update File</label>
        <input className={styles.upload} type="file" name="file upload" />
        <button
          onClick={() => updateIcon({ iconid, iconname, icontags, iconurl })}
        >
          Save →
        </button>
      </form>
    </>
  );
}

async function updateIcon({ iconid, iconname, icontags, iconurl }) {
  try {
    // setLoading(true);

    const updates = {
      id: iconid,
      name: iconname,
      tags: icontags,
      url: iconurl,
    };

    let { error } = await supabase.from("icons").upsert(updates);
    // getIcons();
    if (error) {
      throw error;
    }
  } catch (error) {
    alert(error.message);
  } finally {
    // setLoading(false);
  }
}
