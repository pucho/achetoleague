import { Heading, Box } from "@chakra-ui/core";
import Link from "next/link";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";

import { events, User } from "../data";
import { addPointsToEvent } from "../utils";
import EventRow from "../components/EventRow";

function Index() {
  const raceResults = events.map((race) => {
    return addPointsToEvent(race);
  });
  return (
    <Container>
      {raceResults.map(({ name, results }) => {
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
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1cZlWF0LtbXdFeTemfAzRFId3HyXhQeky/view?usp=sharing"
              >
                Replay Carrera 1
              </a>
            </Box>
          </div>
        );
      })}
    </Container>
  );
}

export default Index;
