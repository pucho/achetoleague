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
    <div className={`${styles.container} ${odd && "bg-gray-800"}`}>
      <Link href={`/user/${id}`}>
        <a className={`${styles.name} text-white`}>{name}</a>
      </Link>
      <div className="text-right text-white">{race1}</div>
      <div className="text-right text-white">{race2}</div>
      <div className="text-right text-white">{race1 + race2}</div>
    </div>
  );
};

export default EventRow;
