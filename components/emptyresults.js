import styles from "../styles/Home.module.css";
import { GoogleSpreadsheet } from "google-spreadsheet";
import React, { useState } from "react";

// process.env.GOOGLE_SERVICE_PRIVATE_KEY.replace(/\\n/g, "\n");
// Config variables
const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID;
const SHEET_ID = process.env.NEXT_PUBLIC_APP_SHEET_ID;
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

  function write() {
    setDisable(true);

    const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

    const appendSpreadsheet = async (row) => {
      try {
        await doc.useServiceAccountAuth({
          client_email: CLIENT_EMAIL,
          private_key: PRIVATE_KEY,
        });
        // loads document properties and worksheets
        await doc.loadInfo();

        const sheet = doc.sheetsById[SHEET_ID];
        const result = await sheet.addRow(row);
      } catch (e) {
        console.error("Error: ", e);
        setError(true);
      }
      setSuccess(true);
    };

    const newRow = { Requested: "new name", Value: "new value" };

    appendSpreadsheet(newRow);
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
