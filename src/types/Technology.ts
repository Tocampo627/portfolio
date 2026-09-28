export type Technology = {
  id: string;
  name: string;
  logo: string;
};

export type TechGroup = {
  category: string;
  technologies: Technology[];
};