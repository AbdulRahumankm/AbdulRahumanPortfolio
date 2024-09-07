// src\constants\index.js
import {
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  nextjs,
  nodejs,
  react,
  redux,
  summiz,
  docs,
  tailwindcss,
  typescript,
  python,
  c,
  cas,
  postgresql,
  reactNative,
  firebase,
  bootstrap,
  hospital,
  expo,
  gmail,
  developerTools,
  
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },

  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },

  {
    imageUrl: postgresql,
    name: "PostgreSQL",
    type: "Database",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },

  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: reactNative,
    name: "React Native",
    type: "App Development",
  },
  {
    imageUrl: expo,
    name: "Expo-Go",
    type: "App Development",
  },
  {
    imageUrl: firebase,
    name: "Firebase",
    type: "Cloud Platform",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: bootstrap,
    name: "Bootstrap",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },

  {
    imageUrl: python,
    name: "python",
    type: "Programming Language",
  },
  {
    imageUrl: c,
    name: "C",
    type: "Programming Language",
  },
  {
    imageUrl: cas,
    name: "C#",
    type: "Programming Language",
  },
];

export const experiences = [
  {
    title: "JP College of Arts & Sciences",
    company_name: "Bachelor of Computer Applications",
    icon: developerTools,
    iconBg: "#accbe1",
    date: " 2021 - 2024",
    points: [
      "Computer Science Focus: The course focuses on computer applications, software development, and IT skills.Technical Skills: The program emphasizes computer fundamentals, database management, and networking.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "London AppBrewery",
    icon: developerTools,
    iconBg: "#accbe1",
    date: "2021 - 2022",
    points: [
      "My specialization is in Front-End Development.Attended the London App Brewery, where Dr. Angela Yu was my mentor.My second specialization is in frameworks and Database Management",
    ],
  },
  {
    title: "MERN Stack Developer",
    company_name: "London AppBrewery",
    icon: developerTools,
    iconBg: "#accbe1",
    date: " 2022",
    points: [
      "My specialization is in MongoDB & Reactjs.Implementing a Model-View-Controller architecture in Express.js to separate concerns and maintain a clean codebase.",
    ],
  },
  {
    title: "Data Structures and Algorithms",
    company_name: "ZTM Academy",
    icon: developerTools,
    iconBg: "#accbe1",
    date: " 2022",
    points: [
      "Data Structures and Algorithms (DSA) involve learning how data can be organized, stored, and manipulated efficiently, and how algorithms are used to solve computational problems. It covers topics like arrays, linked lists, trees, graphs, sorting, searching, and more, helping you write optimized and scalable code.",
    ],
  },
];

export const socialLinks = [
  /* Add Gmail  */

  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/AbdulRahumankm",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/abdulrahuman1204/",
  },
  /* {
    name: "Instagram",
    iconUrl: instagram,
    link: "https://www.instagram.com/rahuman_kmi/",
  }, */
];

export const projects = [
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Summarizer Application",
    description:
      "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
    link: "https://github.com/AbdulRahumankm/ai-summarize",
  },
  {
    iconUrl: docs,
    theme: "btn-back-yellow",
    name: "LiveDocs",
    description:
      "LiveDocs is a project that likely involves creating or managing live, interactive documentation for software, APIs, or other technical content. These types of projects are designed to provide users with dynamic, real-time documentation.",
    link: "https://github.com/AbdulRahumankm/livedocs",
  },
  {
    iconUrl: expo,
    theme: "btn-back-yellow",
    name: "Auro",
    description:
      "Auro is an innovative social media application built with React Native, designed for users to seamlessly share and discover videos. The app provides a platform where creativity meets community, allowing users to upload, view, and interact with a diverse range of video content.",
    link: "https://github.com/AbdulRahumankm/auro",
  },
  {
    iconUrl: hospital,
    theme: "btn-back-yellow",
    name: "CarePulse",
    description:
      "CarePulse is a comprehensive and innovative web application designed to streamline and enhance patient care management. This application offers a suite of tools and features tailored for healthcare providers to efficiently manage patient information, track health metrics, and ensure high-quality care delivery.",
    link: "https://github.com/AbdulRahumankm/CarePulse",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "Task Management App",
    description:
      "Task Management App is a powerful and intuitive tool designed to help individuals and teams stay organized and efficiently manage their tasks. Built with modern technologies, this app provides a seamless experience for tracking, organizing, and collaborating on tasks, ensuring that productivity and deadlines are met with ease.",
    link: "https://github.com/AbdulRahumankm/task_management",
  },
];
