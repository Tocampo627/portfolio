export interface ProjectInterface {
  id: number;
  name: string;
  description: string;
  link: string;
  sourceCodeLink: string;
  image: string;
  techToolIds: number[];
}

export const myProjects: ProjectInterface[] = [
  {
    id: 1,
    name: "A Classic Game Of Hang Man",
    description:
      "This project marked the early stages of my journey as a developer. Guided by an exceptional mentor, Robert Shaw, I smoothly navigated through the project's creation. It was during this experience that I realized programming might be a career path I'd like to explore further.",
    link: "https://tocampo627.github.io/legendary-engine/public/index.html",
    sourceCodeLink: "https://github.com/Tocampo627/legendary-engine",
    image: "./projectImages/placeholder.svg",
    techToolIds: [3, 6, 7, 9, 11],
  },
  {
    id: 2,
    name: "A Classic Game Of Rock Paper Scissors",
    description:
      "During my self-taught journey, I developed another project, a Classic Game of Rock Paper Scissors, using vanilla JavaScript.",
    link: "https://tocampo627.github.io/rockPaperScissors/public/index.html",
    sourceCodeLink: "https://github.com/Tocampo627/rockPaperScissors",
    image: "./projectImages/placeholder.svg",
    techToolIds: [3, 6, 7, 9, 11],
  },
  {
    id: 3,
    name: "Restaurant Menu Manager",
    description:
      "The RestaurantMenuManager is a Java-based application designed for efficient management of restaurant menus. It features a Graphical User Interface (GUI) for easy interaction. This project showcases the practical application of Java Swing for creating user interfaces, and it demonstrates skills in event handling and interface design. The application allows staff to add, delete, and modify menu items seamlessly, highlighting a user-centric approach to software development.",
    link: "https://github.com/Tocampo627/RestuarantMenu-Manager",
    sourceCodeLink: "https://github.com/Tocampo627/RestuarantMenu-Manager",
    image: "./projectImages/placeholder.svg",
    techToolIds: [10, 16],
  },
  {
    id: 4,
    name: "College Finder (Front End)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    link: "https://tocampo627.github.io/College-Finder-FrontEnd/",
    sourceCodeLink: "",
    image: "./projectImages/placeholder.svg",
    techToolIds: [1, 2, 3, 6, 7, 9, 11, 13, 17],
  },
  {
    id: 5,
    name: "Hang Man 2.0",
    description: "Game Description",
    link: "https://tocampo627.github.io/hang-man-2.0/",
    sourceCodeLink: "",
    image: "./projectImages/placeholder.svg",
    techToolIds: [3, 6, 7, 8, 9, 11, 14, 17, 18],
  },
  {
    id: 6,
    name: "My Portfolio",
    description: "Game Description",
    link: "https://tocampo627.github.io/portfolio/",
    sourceCodeLink: "",
    image: "./projectImages/placeholder.svg",
    techToolIds: [3, 6, 7, 8, 9, 11, 14, 17, 18],
  },
  {
    id: 7,
    name: "College Finder (Back End)",
    description: "",
    link: "https://github.com/Tocampo627/College-Finder-Backend",
    sourceCodeLink: "https://github.com/Tocampo627/College-Finder-Backend",
    image: "./projectImages/placeholder.svg",
    techToolIds: [1, 6, 7, 10, 13, 15, 16],
  },
  // {
  //   id: 7,
  //   name: "Salty Paws Doggy Daycare",
  //   description: "Game Description",
  //   link: "",
  //   image: "./projectImages/placeholder.svg",
  //   techToolIds: [1, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18],
  // },
];
