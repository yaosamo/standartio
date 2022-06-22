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
    <p>
      No icons found, maybe try other search or want to submit request for an
      icon just click <button onClick={write}>here</button>
    </p>
  );
}
