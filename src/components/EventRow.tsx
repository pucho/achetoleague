import Link from "next/link";

import { User } from "../data";

type Event = {
  pilot: User;
  odd?: boolean;
};
const EventRow = ({ pilot, odd }: Event) => {
  const { name, race1, race2, id } = pilot;
  return (
    <div
      className={`flex justify-between max-w-screen-sm ${odd && "bg-gray-800"}`}
    >
      <Link href={`/user/${id}`}>
        <a className={`font-bold w-2/5 text-white`}>{name}</a>
      </Link>
      <div className="text-right text-white w-1/5">{race1}</div>
      <div className="text-right text-white w-1/5">{race2}</div>
      <div className="text-right text-white w-1/5">{race1 + race2}</div>
    </div>
  );
};

export default EventRow;
