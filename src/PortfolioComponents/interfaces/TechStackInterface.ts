export interface TechStackInterface {
  id: number;
  toolName: string;
  category: string;
  image: string;
  level: number;
  description: string;
}

export const techStack: TechStackInterface[] = [
  {
    id: 1,
    toolName: "AWS",
    category: "Cloud",
    image: "./techStack/Aws.svg",
    level: 2,
    description:
      "In my professional and personal projects, I have gained valuable experience with AWS services, including Elastic Beanstalk, EC2 instances, IAM groups, and RDS. My journey with AWS began with deploying applications using Elastic Beanstalk, offering me a practical understanding of cloud-based application management. I have configured and managed EC2 instances, gaining insights into scalable computing. My use of IAM groups has provided me with foundational knowledge in managing access and security within AWS. Additionally, my work with RDS has given me a hands-on approach to database management in the cloud. With a self-assessed proficiency level of 2/5, I recognize the vastness of AWS and am eager to deepen my expertise in this area.",
  },
  {
    id: 2,
    toolName: "Angular",
    category: "Frontend",
    image: "./techStack/Angular.svg",
    level: 1,
    description:
      "Previously utilized Angular in front-end development for projects like 'College Finder' and 'Quiz Monster,' harnessing its framework to create dynamic and responsive user interfaces. While my proficiency was notable during these projects, my recent focus on React has shifted my expertise. As a result, my current comfort level with Angular is at 1/5, acknowledging the need for a refresher to update and refine my skills in this area. This shift reflects my adaptability and willingness to evolve with changing project requirements and technology trends.",
  },
  {
    id: 3,
    toolName: "CSS",
    category: "Frontend",
    image: "./techStack/Css.svg",
    level: 2,
    description:
      "Initially, my relationship with CSS was challenging, as I prioritized other languages in my development journey. However, recognizing the critical role of CSS in web development, especially for styling and responsiveness, I have recently dedicated more effort to enhancing my skills in raw CSS. Moving away from frameworks like Bootstrap and Chakra, I'm focusing on deepening my understanding of pure CSS. This renewed focus has involved working diligently on making my applications more responsive and mobile-friendly. Although I'm currently at a comfort level of 2/5, my ongoing practice and commitment to mastering CSS is a testament to my adaptability and willingness to tackle areas outside my comfort zone, with a goal of continuous improvement in frontend development.",
  },
  {
    id: 4,
    toolName: "Docker",
    category: "Tools",
    image: "./techStack/Docker.svg",
    level: 1,
    description:
      "I utilized Docker to orchestrate a multi-container application, gaining an understanding of containerization and microservices architecture.The network was configured to facilitate communication between these services. While my role was more focused on the broader setup rather than the intricate details of Docker, this experience provided me with foundational knowledge in container orchestration and the practical use of Docker Compose in developing and deploying multi-component applications. Given the guided nature of this activity, I would currently rate my Docker skills as introductory, with a keen interest in expanding my expertise in this area.",
  },
  {
    id: 5,
    toolName: "GCP",
    category: "Cloud",
    image: "./techStack/GCP.svg",
    level: 2,
    description:
      "In my role at Macy's project with Cognizant, I utilized GCP tools like BigQuery and Spanner for automating report generation and ensuring data consistency, significantly improving reporting efficiency. Additionally, I leveraged GCP's logging capabilities for monitoring applications in production, essential for real-time issue detection and resolution. This experience provided me with a foundational understanding of GCP’s data services and operational monitoring. With a self-assessed proficiency of 2/5, my hands-on engagement with GCP highlights my ability to utilize its core functionalities effectively, while acknowledging the scope for further skill development in its comprehensive cloud services.",
  },
  {
    id: 6,
    toolName: "Git",
    category: "Tools",
    image: "./techStack/Git.svg",
    level: 3,
    description: "Used Git for version control and source code management across all projects. Ensured efficient team collaboration and code integrity by maintaining a streamlined workflow for code changes and updates.",
  },
  {
    id: 7,
    toolName: "GitHub",
    category: "Tools",
    image: "./techStack/GitHub.svg",
    level: 3,
    description: "blah",
  },
  {
    id: 8,
    toolName: "GitHub Actions",
    category: "Tools",
    image: "./techStack/GitHubActions.svg",
    level: 2,
    description: "blah",
  },
  {
    id: 9,
    toolName: "HTML",
    category: "Frontend",
    image: "./techStack/HTML.svg",
    level: 3,
    description: "HTML was the starting point of my coding journey, marking the beginning of my self-taught exploration into web development. Through the years, I have continuously integrated HTML with modern frameworks such as Angular and React, leveraging it to structure web content effectively. This experience has been crucial in ensuring my applications are built on a robust, semantic HTML base. Given my consistent application and understanding of HTML in various projects, I rate my proficiency at 3/5. This rating reflects a solid grasp of the language's fundamentals, combined with an awareness of the ongoing learning opportunities that HTML offers, especially as it evolves and integrates with advanced web technologies.",
  },
  {
    id: 10,
    toolName: "Java",
    category: "Backend",
    image: "./techStack/Java.svg",
    level: 3,
    description: "blah",
  },
  {
    id: 11,
    toolName: "JavaScript",
    category: "Frontend",
    image: "./techStack/JavaScript.svg",
    level: 2,
    description: "blah",
  },
  {
    id: 12,
    toolName: "Postgres",
    category: "Backend",
    image: "./techStack/Postgres.svg",
    level: 1,
    description: "blah",
  },
  {
    id: 13,
    toolName: "Postman",
    category: "Tools",
    image: "./techStack/Postman.svg",
    level: 2,
    description: "blah",
  },
  {
    id: 14,
    toolName: "React",
    category: "Frontend",
    image: "./techStack/React_Project.svg",
    level: 1,
    description: "blah",
  },
  {
    id: 15,
    toolName: "Spring Boot",
    category: "Backend",
    image: "./techStack/SpringBoot.svg",
    level: 3,
    description: "blah",
  },
  {
    id: 16,
    toolName: "SQL",
    category: "Backend",
    image: "./techStack/SQL.svg",
    level: 3,
    description: "blah",
  },
  {
    id: 17,
    toolName: "TypeScript",
    category: "Frontend",
    image: "./techStack/TypeScript.svg",
    level: 2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum commodo nisi, ac faucibus lorem suscipit eget. Sed vitae orci fermentum, ullamcorper libero a, congue nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce sit amet est auctor, fermentum ante at, aliquet sem. Vivamus imperdiet, quam sed auctor mollis, dui ex consequat est, eget tincidunt magna ex a ante. Integer non nisi ac nibh sollicitudin tristique. Morbi in risus vitae lectus convallis congue at vitae eros.",
  },
  {
    id: 18,
    toolName: "Vite",
    category: "Frontend",
    image: "./techStack/Vite.svg",
    level: 1,
    description: "blah",
  },
];
