//usable uuids
//
// 9ac46398-f344-4f59-8222-4da6680f70c8
// 1f2d520a-cf50-4831-9d09-fe5ef363db51
// 516b17c3-513e-42f1-ae51-6439a6ec7e87
// af53c2c5-b1f6-4bd4-b165-15e4819dd4af
// 085a4637-6bbd-4b57-b70d-6a840d8652e4
// 0d35765e-4a7a-4f01-b534-82d81a2dd5a6
// a42b2927-bf96-494e-bc93-35045807c983
// 133654c1-e029-4201-a7aa-08db993d227a
// dcb6352b-7249-4a8c-999f-84cb40ae1768

export type User = { name: string; id: string; race1?: number; race2?: number };
export type Event = {
  name: string;
  race1: User[];
  race2: User[];
  replays?: string[];
};

export const users: User[] = [
  { name: "pucho", id: "a25ca502-536a-4a12-a38b-373d64e35e09" },
  { name: "pelado", id: "ba9b5968-5cc0-42b4-a093-5766fff6c07c" },
  { name: "santicacu", id: "8a89fb3c-86da-4f5a-8d2e-9950c3bf8339" },
  { name: "mcsida", id: "f332ba3a-caa6-4b0c-af5e-728d30471eba" },
  { name: "uyrace", id: "8d403e4d-b053-4474-80e8-1e65af042425" },
  { name: "ro bochi", id: "769b8ed4-12e5-4e55-b3f9-9afae77a192f" },
  { name: "tisho", id: "d138a547-0f43-482b-a189-88346be799bf" },
  { name: "manije", id: "6652adb4-304e-44a0-aede-a95070529569" },
  { name: "etarra", id: "f44f1372-0872-44e4-a0b5-a9f518a86fec" },
  { name: "liderguitar", id: "616c1a7d-069c-4f89-97b9-317eba3668e5" },
  { name: "pinpon", id: "d12f3e23-deae-4b7f-a8e5-f49a195a2e5b" },
  { name: "ketu", id: "9ac46398-f344-4f59-8222-4da6680f70c8" },
];

const donington = {
  name: "Donington Park National",
  race1: [
    { name: "pucho", id: "a25ca502-536a-4a12-a38b-373d64e35e09" },
    { name: "pelado", id: "ba9b5968-5cc0-42b4-a093-5766fff6c07c" },
    { name: "uyrace", id: "8d403e4d-b053-4474-80e8-1e65af042425" },
    { name: "mcsida", id: "f332ba3a-caa6-4b0c-af5e-728d30471eba" },
    { name: "ro bochi", id: "769b8ed4-12e5-4e55-b3f9-9afae77a192f" },
    { name: "santicacu", id: "8a89fb3c-86da-4f5a-8d2e-9950c3bf8339" },
    { name: "manije", id: "6652adb4-304e-44a0-aede-a95070529569" },
    { name: "liderguitar", id: "616c1a7d-069c-4f89-97b9-317eba3668e5" },
  ],
  race2: [
    { name: "pucho", id: "a25ca502-536a-4a12-a38b-373d64e35e09" },
    { name: "mcsida", id: "f332ba3a-caa6-4b0c-af5e-728d30471eba" },
    { name: "pelado", id: "ba9b5968-5cc0-42b4-a093-5766fff6c07c" },
    { name: "uyrace", id: "8d403e4d-b053-4474-80e8-1e65af042425" },
    { name: "ro bochi", id: "769b8ed4-12e5-4e55-b3f9-9afae77a192f" },
    { name: "liderguitar", id: "616c1a7d-069c-4f89-97b9-317eba3668e5" },
    { name: "manije", id: "6652adb4-304e-44a0-aede-a95070529569" },
    { name: "santicacu", id: "8a89fb3c-86da-4f5a-8d2e-9950c3bf8339" },
  ],
  replays: [
    "https://drive.google.com/file/d/1cZlWF0LtbXdFeTemfAzRFId3HyXhQeky/view?usp=sharing",
    "https://drive.google.com/file/d/1cZlWF0LtbXdFeTemfAzRFId3HyXhQeky/view?usp=sharing",
  ],
};

const brandshatch = {
  name: "Brands Hatch GP",
  race1: [
    { name: "pucho", id: "a25ca502-536a-4a12-a38b-373d64e35e09" },
    { name: "pelado", id: "ba9b5968-5cc0-42b4-a093-5766fff6c07c" },
    { name: "mcsida", id: "f332ba3a-caa6-4b0c-af5e-728d30471eba" },
    { name: "santicacu", id: "8a89fb3c-86da-4f5a-8d2e-9950c3bf8339" },
    { name: "manije", id: "6652adb4-304e-44a0-aede-a95070529569" },
    { name: "ro bochi", id: "769b8ed4-12e5-4e55-b3f9-9afae77a192f" },
  ],
  race2: [
    { name: "pucho", id: "a25ca502-536a-4a12-a38b-373d64e35e09" },
    { name: "mcsida", id: "f332ba3a-caa6-4b0c-af5e-728d30471eba" },
    { name: "pelado", id: "ba9b5968-5cc0-42b4-a093-5766fff6c07c" },
    { name: "santicacu", id: "8a89fb3c-86da-4f5a-8d2e-9950c3bf8339" },
    { name: "manije", id: "6652adb4-304e-44a0-aede-a95070529569" },
    { name: "ro bochi", id: "769b8ed4-12e5-4e55-b3f9-9afae77a192f" },
  ],
  replays: [
    "https://drive.google.com/file/d/1cZlWF0LtbXdFeTemfAzRFId3HyXhQeky/view?usp=sharing",
    "https://drive.google.com/file/d/1cZlWF0LtbXdFeTemfAzRFId3HyXhQeky/view?usp=sharing",
  ],
};

const redbullring = {
  name: "Redbull Ring GP",
  race1: [
    { name: "etarra", id: "f44f1372-0872-44e4-a0b5-a9f518a86fec" },
    { name: "pelado", id: "ba9b5968-5cc0-42b4-a093-5766fff6c07c" },
    { name: "mcsida", id: "f332ba3a-caa6-4b0c-af5e-728d30471eba" },
    { name: "pucho", id: "a25ca502-536a-4a12-a38b-373d64e35e09" },
    { name: "pinpon", id: "d12f3e23-deae-4b7f-a8e5-f49a195a2e5b" },
    { name: "santicacu", id: "8a89fb3c-86da-4f5a-8d2e-9950c3bf8339" },
    { name: "liderguitar", id: "616c1a7d-069c-4f89-97b9-317eba3668e5" },
    { name: "ketu", id: "9ac46398-f344-4f59-8222-4da6680f70c8" },
    { name: "manije", id: "6652adb4-304e-44a0-aede-a95070529569" },
  ],
  race2: [
    { name: "pinpon", id: "d12f3e23-deae-4b7f-a8e5-f49a195a2e5b" },
    { name: "etarra", id: "f44f1372-0872-44e4-a0b5-a9f518a86fec" },
    { name: "pelado", id: "ba9b5968-5cc0-42b4-a093-5766fff6c07c" },
    { name: "santicacu", id: "8a89fb3c-86da-4f5a-8d2e-9950c3bf8339" },
    { name: "pucho", id: "a25ca502-536a-4a12-a38b-373d64e35e09" },
    { name: "mcsida", id: "f332ba3a-caa6-4b0c-af5e-728d30471eba" },
    { name: "manije", id: "6652adb4-304e-44a0-aede-a95070529569" },
    { name: "ketu", id: "9ac46398-f344-4f59-8222-4da6680f70c8" },
    { name: "liderguitar", id: "616c1a7d-069c-4f89-97b9-317eba3668e5" },
  ],
  replays: [
    "https://drive.google.com/file/d/1guLrFNAw6SKc2Ugx_ZC18ogUl7YuHAuG/view?usp=sharing",
    "https://drive.google.com/file/d/1guLrFNAw6SKc2Ugx_ZC18ogUl7YuHAuG/view?usp=sharing",
  ],
};

const okayama = {
  name: "Okayama GP",
  race1: [
    { name: "pucho", id: "a25ca502-536a-4a12-a38b-373d64e35e09" },
    { name: "etarra", id: "f44f1372-0872-44e4-a0b5-a9f518a86fec" },
    { name: "santicacu", id: "8a89fb3c-86da-4f5a-8d2e-9950c3bf8339" },
    { name: "pelado", id: "ba9b5968-5cc0-42b4-a093-5766fff6c07c" },
    { name: "mcsida", id: "f332ba3a-caa6-4b0c-af5e-728d30471eba" },
    { name: "ro bochi", id: "769b8ed4-12e5-4e55-b3f9-9afae77a192f" },
  ],
  race2: [
    { name: "pucho", id: "a25ca502-536a-4a12-a38b-373d64e35e09" },
    { name: "mcsida", id: "f332ba3a-caa6-4b0c-af5e-728d30471eba" },
    { name: "etarra", id: "f44f1372-0872-44e4-a0b5-a9f518a86fec" },
    { name: "pelado", id: "ba9b5968-5cc0-42b4-a093-5766fff6c07c" },
    { name: "santicacu", id: "8a89fb3c-86da-4f5a-8d2e-9950c3bf8339" },
    { name: "ro bochi", id: "769b8ed4-12e5-4e55-b3f9-9afae77a192f" },
  ],
  replays: [
    "https://drive.google.com/file/d/1guLrFNAw6SKc2Ugx_ZC18ogUl7YuHAuG/view?usp=sharing",
    "https://drive.google.com/file/d/1guLrFNAw6SKc2Ugx_ZC18ogUl7YuHAuG/view?usp=sharing",
  ],
};

//update after each round
export const events = [donington, brandshatch, redbullring, okayama];

type raceType = "race1" | "race2";
type raceResults = User[];
export const pointsRace1 = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1, 0, 0];
export const pointsRace2 = [15, 12, 10, 8, 6, 4, 2, 1, 0, 0, 0, 0];
