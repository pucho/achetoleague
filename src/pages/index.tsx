import {
  Link as ChakraLink,
  Text,
  Code,
  Icon,
  List,
  ListIcon,
  ListItem,
  Heading,
  Box,
} from "@chakra-ui/core";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";

import { events } from "../data";
import { addPointsToEvent } from "../utils";

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
              {results.map((pilot) => {
                return (
                  <div key={pilot.name}>
                    {pilot.name} r1: {pilot.race1} r2: {pilot.race2}
                  </div>
                );
              })}
            </Box>
          </div>
        );
      })}
    </Container>
  );
}

export default Index;
