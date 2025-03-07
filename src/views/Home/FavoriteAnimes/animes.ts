import darker_than_black from "./imgs/darker_than_black.avif";
import monogatari from "./imgs/monogatari.avif";
import monster from "./imgs/monster.avif";
import oshi_no_ko from "./imgs/oshi_no_ko.avif";
import classroom_of_the_elite from "./imgs/classroom_of_the_elite.avif";

export const ANIMES = [
  {
    id: crypto.randomUUID(),
    name: "Darker than Black",
    img: darker_than_black,
  },
  {
    id: crypto.randomUUID(),
    name: "Monogatari",
    img: monogatari,
  },
  {
    id: crypto.randomUUID(),
    name: "Monster",
    img: monster,
  },
  {
    id: crypto.randomUUID(),
    name: "Oshi no Ko",
    img: oshi_no_ko,
  },
  {
    id: crypto.randomUUID(),
    name: "Classroom of the Elite",
    img: classroom_of_the_elite,
  },
];
