export type User = { name: string; id: number; race1?: number; race2?: number };
export type Event = { name: string; race1: User[]; race2: User[] };

export const users: User[] = [
  { name: "pucho", id: 101 },
  { name: "pelado", id: 102 },
  { name: "santicacu", id: 103 },
  { name: "mcsida", id: 104 },
  { name: "uyrace", id: 105 },
  { name: "ro bochi", id: 106 },
  { name: "tisho", id: 107 },
  { name: "manije", id: 108 },
  { name: "etarra", id: 109 },
  { name: "liderguitar", id: 110 },
];

const donington = {
  name: "Donington Park National",
  race1: [
    { name: "pucho", id: 101 },
    { name: "pelado", id: 102 },
    { name: "uyrace", id: 105 },
    { name: "mcsida", id: 104 },
    { name: "ro bochi", id: 106 },
    { name: "santicacu", id: 103 },
    { name: "manije", id: 108 },
    { name: "liderguitar", id: 110 },
  ],
  race2: [
    { name: "pucho", id: 101 },
    { name: "mcsida", id: 104 },
    { name: "pelado", id: 102 },
    { name: "uyrace", id: 105 },
    { name: "ro bochi", id: 106 },
    { name: "liderguitar", id: 110 },
    { name: "manije", id: 108 },
    { name: "santicacu", id: 103 },
  ],
};

//not run yet
const brandshatch = {
  name: "Brands Hatch GP",
  race1: [
    { name: "pucho", id: 101 },
    { name: "pelado", id: 102 },
    { name: "uyrace", id: 105 },
    { name: "mcsida", id: 104 },
    { name: "ro bochi", id: 106 },
    { name: "santicacu", id: 103 },
    { name: "manije", id: 108 },
    { name: "liderguitar", id: 110 },
  ],
  race2: [
    { name: "pucho", id: 101 },
    { name: "mcsida", id: 104 },
    { name: "pelado", id: 102 },
    { name: "uyrace", id: 105 },
    { name: "ro bochi", id: 106 },
    { name: "liderguitar", id: 110 },
    { name: "manije", id: 108 },
    { name: "santicacu", id: 103 },
  ],
};

//update after each round
export const events = [donington];

type raceType = "race1" | "race2";
type raceResults = User[];
export const pointsRace1 = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1, 0, 0];
export const pointsRace2 = [15, 12, 10, 8, 6, 4, 2, 1, 0, 0, 0, 0];
