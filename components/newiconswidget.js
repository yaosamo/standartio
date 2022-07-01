import styles from "../styles/Home.module.css";

export default function NewIconsWidget(props) {
  return (
    <div className={styles.ticker}>
      <div className={styles.ticker_items_wrap}>
        <div className={styles.ticker_item}>New Icons</div>
        <div className={styles.ticker_item}>New Icons 2</div>
        <div className={styles.ticker_item}>New Icons 3</div>
      </div>
    </div>
  );
}
