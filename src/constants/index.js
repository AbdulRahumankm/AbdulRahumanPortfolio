import { logo } from "../assets/images";
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
  tailwindcss,
  typescript,
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
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Front-End Developer",
    company_name: "Asort Technologies",
    icon: logo,
    iconBg: "#accbe1",
    date: "March 2021 - April 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const socialLinks = [
 
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
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "LiveDocs",
    description:
      "LiveDocs is a project that likely involves creating or managing live, interactive documentation for software, APIs, or other technical content. These types of projects are designed to provide users with dynamic, real-time documentation.",
    link: "https://github.com/AbdulRahumankm/livedocs",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "Auro",
    description:
      "Auro is an innovative social media application built with React Native, designed for users to seamlessly share and discover videos. The app provides a platform where creativity meets community, allowing users to upload, view, and interact with a diverse range of video content.",
    link: "https://github.com/AbdulRahumankm/auro",
  },
  {
    iconUrl: summiz,
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
