export interface TechStackInterface {
  id: number;
  toolName: string;
  category: string;
  image: string;
  level: number;
  description: string;
  projectIds: number[];
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
      projectIds:[4],
  },
  {
    id: 2,
    toolName: "Angular",
    category: "Frontend",
    image: "./techStack/Angular.svg",
    level: 1,
    description:
      "Previously utilized Angular in front-end development for projects like 'College Finder' and 'Quiz Monster,' harnessing its framework to create dynamic and responsive user interfaces. While my proficiency was notable during these projects, my recent focus on React has shifted my expertise. As a result, my current comfort level with Angular is at 1/5, acknowledging the need for a refresher to update and refine my skills in this area. This shift reflects my adaptability and willingness to evolve with changing project requirements and technology trends.",
      projectIds:[4],
  },
  {
    id: 3,
    toolName: "CSS",
    category: "Frontend",
    image: "./techStack/Css.svg",
    level: 2,
    description:
      "Initially, my relationship with CSS was challenging, as I prioritized other languages in my development journey. However, recognizing the critical role of CSS in web development, especially for styling and responsiveness, I have recently dedicated more effort to enhancing my skills in raw CSS. Moving away from frameworks like Bootstrap and Chakra, I'm focusing on deepening my understanding of pure CSS. This renewed focus has involved working diligently on making my applications more responsive and mobile-friendly. Although I'm currently at a comfort level of 2/5, my ongoing practice and commitment to mastering CSS is a testament to my adaptability and willingness to tackle areas outside my comfort zone, with a goal of continuous improvement in frontend development.",
      projectIds:[1,2,4,5,6],
  },
  {
    id: 4,
    toolName: "Docker",
    category: "Tools",
    image: "./techStack/Docker.svg",
    level: 1,
    description:
      "I utilized Docker to orchestrate a multi-container application, gaining an understanding of containerization and microservices architecture.The network was configured to facilitate communication between these services. While my role was more focused on the broader setup rather than the intricate details of Docker, this experience provided me with foundational knowledge in container orchestration and the practical use of Docker Compose in developing and deploying multi-component applications. Given the guided nature of this activity, I would currently rate my Docker skills as introductory, with a keen interest in expanding my expertise in this area.",
      projectIds:[7],
  },
  {
    id: 5,
    toolName: "GCP",
    category: "Cloud",
    image: "./techStack/GCP.svg",
    level: 2,
    description:
      "In my role at Macy's project with Cognizant, I utilized GCP tools like BigQuery and Spanner for automating report generation and ensuring data consistency, significantly improving reporting efficiency. Additionally, I leveraged GCP's logging capabilities for monitoring applications in production, essential for real-time issue detection and resolution. This experience provided me with a foundational understanding of GCP’s data services and operational monitoring. With a self-assessed proficiency of 2/5, my hands-on engagement with GCP highlights my ability to utilize its core functionalities effectively, while acknowledging the scope for further skill development in its comprehensive cloud services.",
      projectIds:[],
  },
  {
    id: 6,
    toolName: "Git",
    category: "Tools",
    image: "./techStack/Git.svg",
    level: 3,
    description:
      "Used Git for version control and source code management across all projects. Ensured efficient team collaboration and code integrity by maintaining a streamlined workflow for code changes and updates.",
      projectIds:[1,2,4,5,6,7],
  },
  {
    id: 7,
    toolName: "GitHub",
    category: "Tools",
    image: "./techStack/GitHub.svg",
    level: 3,
    description:
      "GitHub has been an integral tool in all of my personal projects, serving as the backbone for version control and code collaboration. It has enabled me to efficiently manage my project repositories, track changes, and maintain a history of my work. My consistent use of GitHub demonstrates my commitment to best practices in software development, including frequent commits, clear documentation, and effective collaboration. The platform has also been instrumental in exploring open-source projects and understanding diverse coding styles and approaches.",
      projectIds:[1,2,3,4,5,6,7],

  },
  {
    id: 8,
    toolName: "GitHub Actions",
    category: "Tools",
    image: "./techStack/GitHubActions.svg",
    level: 2,
    description:
      "In my personal projects, I've utilized GitHub Actions to facilitate CI/CD processes, focusing on streamlining both backend and frontend workflows. My involvement includes orchestrating automated deployments to Elastic Beanstalk and PostgreSQL services for backend updates, and implementing continuous integration for both backend and frontend upon pull requests. These workflows encompass Maven for build and test routines, Node.js for frontend consistency checks, and Slack integrations for deployment and build status notifications. While I've made significant strides in employing GitHub Actions, I rate my proficiency as a developing 2/5, reflecting my ongoing journey to deepen my understanding in this expansive and dynamic area.",
      projectIds:[5,6,7],

  },
  {
    id: 9,
    toolName: "HTML",
    category: "Frontend",
    image: "./techStack/HTML.svg",
    level: 3,
    description:
      "HTML was the starting point of my coding journey, marking the beginning of my self-taught exploration into web development. Through the years, I have continuously integrated HTML with modern frameworks such as Angular and React, leveraging it to structure web content effectively. This experience has been crucial in ensuring my applications are built on a robust, semantic HTML base. Given my consistent application and understanding of HTML in various projects, I rate my proficiency at 3/5. This rating reflects a solid grasp of the language's fundamentals, combined with an awareness of the ongoing learning opportunities that HTML offers, especially as it evolves and integrates with advanced web technologies.",
      projectIds:[1,2,4,5,6,7],

  },
  {
    id: 10,
    toolName: "Java",
    category: "Backend",
    image: "./techStack/Java.svg",
    level: 3,
    description:
      "Java holds a special place in my skillset, not only as a language I deeply enjoy but also as a tool that I've effectively leveraged in various aspects of backend development. My experience with Java is multifaceted, ranging from writing backend APIs to developing scripts for automated data reporting and processing. The stream API has been a key feature in my projects, allowing me to write more efficient and readable code, especially for complex data processing tasks. My fondness for Java is rooted in its capability to handle intricate tasks with precision, a quality I have embraced and utilized extensively in my professional work. Reflecting on my journey with Java, I give myself a 3/5 confort level, acknowledging my solid foundation while recognizing the vast potential for further growth and mastery in this ever-evolving language.",
      projectIds:[10,4,7],

  },
  {
    id: 11,
    toolName: "JavaScript",
    category: "Frontend",
    image: "./techStack/JavaScript.svg",
    level: 2,
    description:
      "In my professional and personal projects, JavaScript has been a key component, particularly in front-end development. I have applied JavaScript to create interactive and dynamic user interfaces, ensuring a seamless user experience. My journey with JavaScript has spanned various applications, from enhancing web page functionalities to integrating with frameworks like Angular and React. Currently, I rate my proficiency with JavaScript at 2/5. This reflects my solid understanding of the fundamentals and successful application in projects, coupled with a keen interest in advancing my skills further. I am particularly eager to explore more of JavaScript's advanced features and capabilities, recognizing the language's potential to greatly enhance web application development.",
      projectIds:[1,2,4,5,6,7],

  },
  {
    id: 12,
    toolName: "PostgreSQL",
    category: "Backend",
    image: "./techStack/Postgres.svg",
    level: 1,
    description:
      "In my personal projects, I have employed PostgreSQL as my primary database, running it within Docker containers. This setup has provided me with hands-on experience in database containerization, offering an efficient and consistent development environment. My use of PostgreSQL involved setting up and managing the database server in a containerized environment, configuring it for data persistence, and ensuring seamless integration with my application's backend. Through this experience, I gained insights into database management, schema design, and the optimization of SQL queries for performance and scalability. Considering my current level of engagement and understanding, I would cautiously rate my proficiency with PostgreSQL at a beginner to intermediate level. I am committed to deepening my knowledge and skills in database administration and optimization with PostgreSQL.",
      projectIds:[7],

  },
  {
    id: 13,
    toolName: "Postman",
    category: "Tools",
    image: "./techStack/Postman.svg",
    level: 3,
    description:
      "In my development work, Postman has been an essential tool for testing and interacting with APIs. I've utilized it extensively to test backend endpoints, ensuring the functionality and reliability of my APIs. For instance, in my 'College Finder' project, I used Postman to call the U.S. Department of Education API, which was crucial for understanding the data structure and payload to effectively handle it in the frontend. Additionally, my use of Postman includes testing CRUD operations and triggering APIs in different environments, allowing me to verify and fine-tune the behavior of my applications under various conditions. Given my focused yet comprehensive use of Postman, I would rate my proficiency as a solid 3/5. While I am proficient in the core functionalities of Postman, I acknowledge there may be more advanced features of the tool that I have yet to explore.",
      projectIds:[4,7],

  },
  {
    id: 14,
    toolName: "React",
    category: "Frontend",
    image: "./techStack/React_Project.svg",
    level: 1,
    description:
      "In my journey to expand my front-end development skills, I have embarked on personal projects using React, despite not having professional experience with it yet. My engagement with React includes developing a full-stack application and transforming my vanilla JavaScript project, 'A Classic Game of Hangman,' into a more advanced version utilizing React's capabilities. This experience allowed me to understand the core concepts of React, such as component-based architecture, state management, and the use of JSX for UI rendering. My hands-on practice with React has been instrumental in grasping its potential for building dynamic and responsive web applications. I rate my current proficiency with React at an initial 1/5, acknowledging my foundational understanding and eagerness to further develop skills in this powerful library.",
      projectIds:[5,6,7],

  },
  {
    id: 15,
    toolName: "Spring Boot",
    category: "Backend",
    image: "./techStack/SpringBoot.svg",
    level: 2,
    description:
      "In my professional work, I have employed Spring Boot for developing backend APIs, appreciating its ability to simplify and accelerate the backend development process. My experience with Spring Boot includes setting up RESTful services, integrating with databases using Spring Data JPA, and applying Spring Security for authentication and authorization processes. These projects have given me a practical understanding of Spring Boot's dependency injection, auto-configuration, and its comprehensive suite of tools for efficient backend development. While I am comfortable with the fundamental aspects of Spring Boot, I am continually learning to leverage its full potential in creating robust and scalable APIs. Considering my current experience, I would rate my proficiency in Spring Boot as a developing 2/5, recognizing my solid foundation and the vast array of features and best practices I am still exploring.",
      projectIds:[4,7],

  },
  {
    id: 16,
    toolName: "SQL",
    category: "Backend",
    image: "./techStack/SQL.svg",
    level: 2,
    description: "In both my professional and personal projects, I have consistently utilized SQL to interact with various database systems, including Google Cloud Spanner, BigQuery, and PostgreSQL. My engagement with SQL spans a range of tasks, from writing and optimizing queries for data management to implementing essential database operations like creating tables and handling records. This experience has provided me with an understanding of SQL's core functionalities and its universal syntax, while also exposing me to the unique features of different databases. My proficiency in formulating standard SQL queries and executing database operations is a result of this combined personal and professional use. I am comfortable with SQL basics and am actively expanding my knowledge to include more advanced techniques and optimization strategies. Reflecting on this breadth of experience, I rate my SQL skills as a developing 2/5, acknowledging my foundational knowledge and my commitment to further enhancing my SQL expertise in diverse database environments.",
    projectIds:[3,4],

  },
  {
    id: 17,
    toolName: "TypeScript",
    category: "Frontend",
    image: "./techStack/TypeScript.svg",
    level: 2,
    description:
      "Professionally, I have utilized TypeScript in conjunction with Angular, leveraging its strong typing to enhance application reliability and maintainability. This experience has allowed me to appreciate the robustness TypeScript brings to JavaScript-based projects, particularly in terms of error reduction and improved code quality. More recently, I have been expanding my TypeScript skills by applying them to React development, further broadening my understanding of its applications in different frameworks. My journey with TypeScript is an ongoing process of learning and adaptation. Considering my professional use and current learning curve, I would rate my TypeScript proficiency as a developing 2/5. This rating reflects my foundational understanding and the progressive steps I am taking to integrate TypeScript more deeply into my front-end development work.",
      projectIds:[4,5,6,7],

  },
  {
    id: 18,
    toolName: "Vite",
    category: "Frontend",
    image: "./techStack/Vite.svg",
    level: 1,
    description: "In my recent projects, I have begun exploring the capabilities of Vite, primarily using it to bootstrap and develop React TypeScript projects. My experience with Vite includes setting up new projects, taking advantage of its fast build times and efficient hot module replacement for an improved development experience. I have also utilized Vite for deploying some of these projects to GitHub Pages, familiarizing myself with its build and deployment processes. While my engagement with Vite is currently limited to these specific applications, it has provided me with a practical understanding of its role in modern web development workflows. Given this focused use, I would assess my proficiency with Vite as an initial 1/5, recognizing my foundational experience and the potential to further explore and leverage its full range of features in future projects.",
    projectIds:[5,6,7],
  },
  
];
