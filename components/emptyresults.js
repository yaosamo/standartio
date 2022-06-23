import styles from "../styles/Home.module.css";
import React, { useState } from "react";

export default function EmptyResults(props) {
  const [disable, setDisable] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const request = {
    Requested: props.iconrequested,
    "Created at": new Date(),
  };

  function write() {
    // Add one line to the sheet
    setDisable(true);

    fetch(
      "https://sheet.best/api/sheets/6af17142-ce25-4892-8aee-efcdf8445f4a",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      }
    )
      .then((r) => r.json())
      .then((request) => {
        // The response comes here
        setSuccess(true);
      })
      .catch((error) => {
        // Errors are reported there
        console.log(error);
        setDisable(false);
        setError(true);
      });
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
