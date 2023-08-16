import styles from "./timerCard.module.scss";

const TimerCard = (props) => {
  return (
    <div className={styles.cardConttainer}>
      <div className={`${styles.label} ${styles.counts}`}>{props.time}</div>
      <p className={styles.label}>{props.title}</p>
    </div>
  );
};

export default TimerCard;
