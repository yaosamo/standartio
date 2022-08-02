import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";
import IconElement from "./iconediting";

export default function AdminUI({ session }) {
  const [loading, setLoading] = useState(true);
  const [icons, setIcons] = useState([]);
  const [iconname, setIconname] = useState(null);
  const [iconurl, setIconurl] = useState(null);
  const [icontags, setIcontags] = useState(null);

  let iconUI = icons.map((Icon, i) => <IconElement Icon={Icon} key={i} />);

  function IconsList({ icons }) {
    return icons.map((Icon, i) => <IconElement Icon={Icon} key={i} />);
  }

  useEffect(() => {
    getIcons();
  }, [session]);

  async function getIcons() {
    try {
      setLoading(true);
      let { data, error, status } = await supabase.from("icons");

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setIcons(icons.concat(data));
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({ username, website, avatar_url }) {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      const updates = {
        id: user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date(),
      };

      let { error } = await supabase.from("profiles").upsert(updates, {
        returning: "minimal", // Don't return the value after inserting
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.admin}>
      <div className={styles.menu}>
        <a>Icons</a>
        <a className={styles.inactive}>Figma</a>
        <a className={styles.inactive}>About</a>
        <button onClick={() => signOut()}>
          <a className={styles.inactive}>Logout</a>
        </button>
      </div>
      <div className={styles.icons}>
        <button className={styles.upload}>Upload Beautiful Icons →</button>
        <IconsList icons={icons} />
      </div>
    </div>
  );
}
