import { User } from "../data";

type Event = {
  pilot: User;
  odd?: boolean;
};
import styles from "./EventRow.module.css";
const EventRow = ({ pilot, odd }: Event) => {
  const { name, race1, race2 } = pilot;
  return (
    <div className={`${styles.container} ${odd && styles.odd}`}>
      <div className={styles.name}>{name}</div>
      <div className={styles.racePoints}>{race1}</div>
      <div className={styles.racePoints}>{race2}</div>
      <div className={styles.racePoints}>{race1 + race2}</div>
    </div>
  );
};

export default EventRow;
