import styles from "../styles/Home.module.css";

export default function NewIconsWidget(props) {
  return (
    <div className={styles.ticker}>
      <div className={styles.ticker_items_wrap}>
        <item>New Icons</item>
        <item>New Icons 2</item>
        <item>New Icons 3</item>
        <item>New Icons 4</item>
        <item>New Icons 5</item>
        <item>New Icons 6</item>
        <item>New Icons 7</item>
      </div>
    </div>
  );
}
