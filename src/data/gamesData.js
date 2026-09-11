import banner01 from "../assets/games/banner-01.jpeg";
import banner02 from "../assets/games/banner-02.avif";
import banner03 from "../assets/games/banner-03.avif";
import banner04 from "../assets/games/banner-04.avif";
import banner05 from "../assets/games/banner-05.avif";
import banner06 from "../assets/games/banner-06.avif";
import banner07 from "../assets/games/banner-07.avif";
import banner08 from "../assets/games/banner-08.avif";
import banner09 from "../assets/games/banner-09.avif";
import banner10 from "../assets/games/banner-10.avif";
import banner11 from "../assets/games/banner-11.avif";
import banner12 from "../assets/games/banner-12.avif";
import banner13 from "../assets/games/banner-13.avif";

export const games = [
  {
    id: "blade-master",
    name: "Blade Master",
    image: banner01,
    playable: false,
    description: "Aim, throw and hit the perfect target.",
  },
  {
    id: "nutcraft",
    name: "Nutcraft",
    image: banner02,
    playable: false,
    description: "A fast and playful challenge.",
  },
  {
    id: "bowlexa",
    name: "Bowlexa",
    image: banner03,
    playable: false,
    description: "Take your best shot and score.",
  },
  {
    id: "block-crush",
    name: "Block Crush",
    image: banner04,
    playable: false,
    description: "Crush blocks and build your score.",
  },
  {
    id: "slice-storm",
    name: "Slice Storm",
    image: banner05,
    playable: false,
    description: "React quickly and slice your way through.",
  },
  {
    id: "cosmo-warrior",
    name: "Cosmo Warrior",
    image: banner06,
    playable: false,
    description: "Defend the galaxy and survive.",
  },
  {
    id: "toilet-tactics",
    name: "Toilet Tactics",
    image: banner07,
    playable: false,
    description: "A quirky tactical challenge.",
  },
  {
    id: "word-hunt",
    name: "Word Hunt",
    image: banner08,
    playable: true,
    description: "Find hidden words before the timer ends.",
  },
  {
    id: "bubble-blast",
    name: "Bubble Blast",
    image: banner09,
    playable: false,
    description: "Match and blast bubbles.",
  },
  {
    id: "merge-master",
    name: "Merge Master",
    image: banner10,
    playable: true,
    description: "Merge matching tiles and reach the highest score.",
  },
  {
    id: "wormzy",
    name: "Wormzy",
    image: banner11,
    playable: false,
    description: "Guide your worm and collect points.",
  },
  {
    id: "aqua-fill",
    name: "Aqua Fill",
    image: banner12,
    playable: false,
    description: "Fill the board with smart moves.",
  },
  {
    id: "realm-clash",
    name: "Realm Clash",
    image: banner13,
    playable: false,
    description: "Enter the realm and face the challenge.",
  },
];

export const playableGameIds = [
  "word-hunt",
  "merge-master",
];

export const ENTRY_COST = 20;