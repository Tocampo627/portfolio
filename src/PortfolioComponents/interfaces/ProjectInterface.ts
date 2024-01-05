export interface ProjectInterface {
  id: number;
  name: string;
  description: string;
  link: string;
  image: string;
  techToolIds: number[];
}

export const myProjects: ProjectInterface[] = [
  {
    id: 1,
    name: "A Classic Game Of Hang Man",
    description: "Game Description",
    link: "https://tocampo627.github.io/legendary-engine/public/index.html",
    image: "./projectImages/placeholder.svg",
    techToolIds: [3, 6, 7, 9, 11],
  },
  {
    id: 2,
    name: "A Classic Game Of Rock Paper Scissors",
    description: "Game Description",
    link: "https://tocampo627.github.io/rockPaperScissors/public/index.html",
    image: "./projectImages/placeholder.svg",
    techToolIds: [3, 6, 7, 9, 11],
  },
  {
    id: 3,
    name: "Restaurant Menu Manager",
    description: "Game Description",
    link: "https://github.com/Tocampo627/RestuarantMenu-Manager",
    image: "./projectImages/placeholder.svg",
    techToolIds: [10, 16],
  },
  {
    id: 4,
    name: "College Finder",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    link: "https://tocampo627.github.io/College-Finder-FrontEnd/",
    image: "./projectImages/placeholder.svg",
    techToolIds: [1, 2, 3, 6, 7, 9, 10, 11, 13, 15, 16, 17],
  },
  {
    id: 5,
    name: "Hang Man 2.0",
    description: "Game Description",
    link: "https://tocampo627.github.io/hang-man-2.0/",
    image: "./projectImages/placeholder.svg",
    techToolIds: [3, 6, 7, 8, 9, 11, 14, 17, 18],
  },
  {
    id: 6,
    name: "My Portfolio",
    description: "Game Description",
    link: "https://tocampo627.github.io/portfolio/",
    image: "./projectImages/placeholder.svg",
    techToolIds: [3, 6, 7, 8, 9, 11, 14, 17, 18],
  },
  {
    id: 7,
    name: "Salty Paws Doggy Daycare",
    description: "Game Description",
    link: "",
    image: "./projectImages/placeholder.svg",
    techToolIds: [1, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18],
  },
];
