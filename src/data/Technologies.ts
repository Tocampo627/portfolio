import type { TechGroup } from "../types/Technology";

const techLogo = (fileName: string) =>
  `${import.meta.env.BASE_URL}techStack/${fileName}`;

export const techStack: TechGroup[] = [
  {
    category: "Languages",
    technologies: [
      {
        id: "java",
        name: "Java",
        logo: techLogo("Java.svg"),
      },
      {
        id: "javascript",
        name: "JavaScript",
        logo: techLogo("JavaScript.svg"),
      },
      {
        id: "typescript",
        name: "TypeScript",
        logo: techLogo("TypeScript.svg"),
      },
      {
        id: "sql",
        name: "SQL",
        logo: techLogo("SQL.svg"),
      },
      {
        id: "html",
        name: "HTML",
        logo: techLogo("HTML.svg"),
      },
      {
        id: "css",
        name: "CSS",
        logo: techLogo("Css.svg"),
      },
    ],
  },

  {
    category: "Frameworks & Libraries",
    technologies: [
      {
        id: "spring-boot",
        name: "Spring Boot",
        logo: techLogo("SpringBoot.svg"),
      },
      {
        id: "react",
        name: "React",
        logo: techLogo("React_Project.svg"),
      },
      {
        id: "angular",
        name: "Angular",
        logo:techLogo("Angular.svg"),
      },
      {
        id: "vite",
        name: "Vite",
        logo: techLogo("Vite.svg"),
      },
    ],
  },

  {
    category: "Tools, Cloud & Data",
    technologies: [
      {
        id: "postgresql",
        name: "PostgreSQL",
        logo: techLogo("Postgres.svg"),
      },
      {
        id: "docker",
        name: "Docker",
        logo: techLogo("Docker.svg"),
      },
      {
        id: "git",
        name: "Git",
        logo: techLogo("Git.svg"),
      },
      {
        id: "github",
        name: "GitHub",
        logo: techLogo("GitHub.svg"),
      },
      {
        id: "github-actions",
        name: "GitHub Actions",
        logo: techLogo("GitHubActions.svg"),
      },
      {
        id: "postman",
        name: "Postman",
        logo: techLogo("Postman.svg"),
      },
      {
        id: "gcp",
        name: "Google Cloud",
        logo: techLogo("GCP.svg"),
      },
      {
        id: "aws",
        name: "AWS",
        logo: techLogo("Aws.svg"),
      },
    ],
  },
];