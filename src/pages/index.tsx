import { Heading, Box, Flex } from "@chakra-ui/core";
import Link from "next/link";

import { Container } from "../components/Container";

import { events, User } from "../data";
import { addPointsToEvent } from "../utils";
import EventRow from "../components/EventRow";

function Index() {
  const raceResults = events.map((race) => {
    return addPointsToEvent(race);
  });
  return (
    <Container>
      {raceResults.map(({ name, results, replays }) => {
        return (
          <div key={name}>
            <Heading>{name}</Heading>
            <Box style={{ display: "flex", flexDirection: "column" }}>
              {results.map((pilot, index) => {
                return (
                  <EventRow
                    pilot={pilot}
                    key={pilot.name}
                    odd={index % 2 === 0 ? false : true}
                  />
                );
              })}
              <Flex direction="row" justifyContent="space-around">
                {replays.map((replay, index) => {
                  return (
                    <a target="_blank" href={replay} key={replay}>
                      {`Replay Carrera ${index + 1}`}
                    </a>
                  );
                })}
              </Flex>
            </Box>
          </div>
        );
      })}
    </Container>
  );
}

export default Index;
