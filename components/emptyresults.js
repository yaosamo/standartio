import { GoogleSpreadsheet } from "google-spreadsheet";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";

// Config variables
// process.env.NEXT_PUBLIC_GOOGLE_SERVICE_PRIVATE_KEY.replace(/\\n/g, "\n");
const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID;
const SHEET_ID = process.env.NEXT_PUBLIC_SHEET_ID;
const CLIENT_EMAIL = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL;
const PRIVATE_KEY = process.env.NEXT_PUBLIC_GOOGLE_SERVICE_PRIVATE_KEY;

export default function EmptyResults(props) {
  const [disable, setDisable] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const request = {
    Requested: props.iconrequested,
    "Created at": new Date(),
  };

  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

  const accessSheet = async () => {
    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_SERVICE_PRIVATE_KEY,
    });
    await doc.loadInfo();
    console.log("doc title", doc.title);
    const worksheet = doc.sheetsByIndex[0];
    const rows = await worksheet.getRows();
    rows.forEach((row) => {
      console.log(row.Title);
    });
  };

  function write() {
    accessSheet();
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
          {disable && !success && "Sending request"}
          {success && "Thank you, we got your request!"}
          {error && "Couldn't send. Try again."}
        </b>
      </button>
    </div>
  );
}
