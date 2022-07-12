import { GoogleSpreadsheet } from "google-spreadsheet";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";

export default function EmptyResults(props) {
  const [disable, setDisable] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const doc = new GoogleSpreadsheet(process.env.NEXT_PUBLIC_SPREADSHEET_ID);

  async function write() {
    setDisable(true);
    try {
      await doc.useServiceAccountAuth({
        client_email: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
        private_key: process.env.NEXT_PUBLIC_GOOGLE_SERVICE_PRIVATE_KEY,
      });
      await doc.loadInfo();

      const sheet = doc.sheetsByIndex[0];
      await sheet.addRow({
        Requested: props.iconrequested,
        "Created at": Date(),
      });
      setSuccess(true);
    } catch (e) {
      console.log("Here's what's wrong lol:", e);
      setSuccess(false);
      setError(true);
    }
  }

  return (
    <div className={styles.nothingFound}>
      <h1>No icons found. Want to submit request? It’s just one click.</h1>
      <button
        className={styles.requestButton}
        onClick={write}
        disabled={disable}
      >
        <b>
          {!disable && "Please add " + props.iconrequested + " icon"}
          {disable && !success && !error && "Sending request"}
          {success && "Thank you, we got your request!"}
          {error && disable && "Couldn't send. Try again."}
        </b>
      </button>
    </div>
  );
}
