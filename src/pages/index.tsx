import { events } from "../data";
import { addPointsToEvent } from "../utils";
import EventRow from "../components/EventRow";

function Index() {
  const raceResults = events.map((race) => {
    return addPointsToEvent(race);
  });
  return (
    <div className="container mx-auto px-4 bg-gray-900">
      {raceResults.map(({ name, results, replays }) => {
        return (
          <div key={name} className="divide-y-2 divide-solid divide-gray-100">
            <h1 className="text-xl font-bold text-white">{name}</h1>
            <div className="flex flex-col">
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
                    <a
                      target="_blank"
                      href={replay}
                      key={replay}
                      className="text-white"
                    >
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
