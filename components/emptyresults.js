import styles from "../styles/Home.module.css";

export default function EmptyResults(props) {
  const request = {
    Requested: props.iconrequested,
    "Created at": new Date(),
  };

  function write() {
    // Add one line to the sheet
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
        console.log(request);
      })
      .catch((error) => {
        // Errors are reported there
        console.log(error);
      });
  }
  return (
    <div className={styles.nothingFound}>
      <h1>No icons found </h1>
      <p>Or maybe you want to submit request? It’s just one click.</p>
      <button className={styles.requestButton} onClick={write}>
        Please add <b>{props.iconrequested}</b> icon
      </button>
    </div>
  );
}
