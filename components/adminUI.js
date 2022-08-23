import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";
import Image from "next/image";

async function signout() {
  const { error } = await supabase.auth.signOut();
}

export default function AdminUI({ session }) {
  const [loading, setLoading] = useState(true);
  const [icons, setIcons] = useState([]);

  const IconsSorted = []
    .concat(icons)
    .sort((a, b) => (a.name > b.name ? 1 : -1));

  function IconsList() {
    return IconsSorted.map((Icon, i) => <IconElement Icon={Icon} key={i} />);
  }

  function IconElement({ Icon }) {
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

  function EditIcon({ Icon }) {
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
          <input
            type="text"
            name="name"
            onChange={(e) => setTags(e.target.value)}
            defaultValue={icontags}
          />
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

  useEffect(() => {
    getIcons();
  }, []);

  async function getIcons() {
    try {
      setLoading(true);
      let { data, error, status } = await supabase.from("icons");

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setIcons(data);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function updateIcon({ iconid, iconname, icontags, iconurl }) {
    try {
      setLoading(true);

      const updates = {
        id: iconid,
        name: iconname,
        tags: icontags,
        url: iconurl,
      };

      let { error } = await supabase.from("icons").upsert(updates);
      getIcons();
      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  function UploadIcons() {
    async function uploadNewIcon(event) {
      const url = "https://api.cloudinary.com/v1_1/demo/image/upload";
      const url2 = "https://api.cloudinary.com/v1_1/yaosamo/image/upload";

      try {
        setLoading(true);

        if (!event.target.files || event.target.files.length === 0) {
          throw new Error("You must select an image to upload.");
        }

        // take array of files
        // upload each file to  the storage
        // insert() new row for each icon in supabase

        const file = event.target.files;
        const formData = new FormData();
        formData.append("file", file[0]);
        formData.append("upload_preset", "standartio");

        // const fileExt = file.name.split(".").pop();
        // const fileName = `${Math.random()}.${fileExt}`;
        // const filePath = `${fileName}`;
        console.log("files:", file);
        const data = await fetch(url2, {
          method: "POST",
          body: formData,
        }).then((r) => r.json());
        // let { error: uploadError } = await supabase.storage
        //   .from("avatars")
        //   .upload(filePath, file);

        //   if (uploadError) {
        //     throw uploadError;
        //   }

        //   // onUpload(filePath);
        // } catch (error) {
        //   alert(error.message);
      } finally {
        setLoading(false);
      }
    }

    return (
      <>
        <input
          type="file"
          id="actual-btn"
          accept="image/*"
          onChange={uploadNewIcon}
          disabled={loading}
          multiple
          hidden
        />
        <label htmlFor="actual-btn">Upload Beautiful Icons →</label>
      </>
    );
  }

  return (
    <div className={styles.admin}>
      <div className={styles.menu}>
        <a>Icons</a>
        <a className={styles.inactive}>Figma</a>
        <a className={styles.inactive}>About</a>
        <button onClick={() => signout()}>
          <a className={styles.inactive}>Logout</a>
        </button>
      </div>
      <div className={styles.icons}>
        <button className={styles.upload}>
          {loading ? "Updating.." : <UploadIcons />}
        </button>
        <IconsList />
      </div>
    </div>
  );
}
