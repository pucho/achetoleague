import { Event, User, users, pointsRace1, pointsRace2 } from "./data";

export const addPointsToEvent = (event: Event) => {
  const race1WithoutPoints = [...event.race1];
  const race2WithoutPoints = [...event.race2];

  //create arrays with points from the positions of the passed racing event
  const race1WithPoints = race1WithoutPoints.map((user, index) => ({
    ...user,
    race1: pointsRace1[index],
  }));
  const race2WithPoints = race2WithoutPoints.map((user, index) => ({
    ...user,
    race2: pointsRace2[index],
  }));

  //merge both user lists to have race1 and race2 points on each user object.
  let mergedPoints = race1WithPoints.map((user, index) => {
    const pilot2ndRace = race2WithPoints.find((pilot) => pilot.id === user.id);
    return { ...user, ...pilot2ndRace };
    // return
  });

  return {
    name: event.name,
    results: mergedPoints.sort((a, b) => {
      if (a.race1 > b.race1) {
        return -1;
      } else {
        return 1;
      }
    }),
  };
};
