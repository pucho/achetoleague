import Link from "next/link";

import { User } from "../data";

type Event = {
  pilot: User;
  odd?: boolean;
};
import styles from "./EventRow.module.css";
const EventRow = ({ pilot, odd }: Event) => {
  const { name, race1, race2, id } = pilot;
  return (
    <div className={`${styles.container} ${odd && styles.odd}`}>
      <Link href={`/user/${id}`}>
        <a className={styles.name}>{name}</a>
      </Link>
      <div className={styles.racePoints}>{race1}</div>
      <div className={styles.racePoints}>{race2}</div>
      <div className={styles.racePoints}>{race1 + race2}</div>
    </div>
  );
};

export default EventRow;
