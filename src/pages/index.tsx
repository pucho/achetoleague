import Link from "next/link";

import { events, User } from "../data";
import { addPointsToEvent } from "../utils";
import EventRow from "../components/EventRow";

function Index() {
  const raceResults = events.map((race) => {
    return addPointsToEvent(race);
  });
  return (
    <div>
      {raceResults.map(({ name, results, replays }) => {
        return (
          <div key={name}>
            <h1>{name}</h1>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {results.map((pilot, index) => {
                return (
                  <EventRow
                    pilot={pilot}
                    key={pilot.name}
                    odd={index % 2 === 0 ? false : true}
                  />
                );
              })}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                {replays.map((replay, index) => {
                  return (
                    <a target="_blank" href={replay} key={replay}>
                      {`Replay Carrera ${index + 1}`}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Index;
