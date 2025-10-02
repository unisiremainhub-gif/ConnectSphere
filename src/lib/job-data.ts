// import type { LucideIcon } from 'lucide-react';
// import { Code2, Palette, Database, BrainCircuit, KanbanSquare } from 'lucide-react';

// export interface JobOpening {
//   id: string;
//   slug: string;
//   title: string;
//   icon: LucideIcon;
//   location: string;
//   employmentType: 'Full-time' | 'Part-time' | 'Contract';
//   category: string; // e.g., Engineering, Design, Product
//   description: string; // This will now contain the multi-line structured content
//   responsibilities: string[];
//   qualifications: string[];
//   status: 'Open' | 'Closed';
// }

// export const jobOpenings: JobOpening[] = [
//   {
//     id: 'product-manager-05',
//     slug: 'product-manager',
//     title: 'Product Manager',
//     icon: KanbanSquare,
//     location: 'Remote (Global)',
//     employmentType: 'Full-time',
//     category: 'Product',
//     description: `💡 About the Role:
// We are seeking an experienced Product Manager to own the vision, strategy, and execution of key product areas within CollabForge. You will work closely with engineering, design, and user feedback to deliver features that empower our users to connect, collaborate, and create effectively.

// 🛠️ Tech Stack (familiarity beneficial):
// Agile methodologies (Scrum/Kanban), JIRA/Confluence (or similar), Analytics tools (e.g., Mixpanel, Google Analytics), Figma/Sketch for design collaboration, Basic understanding of web technologies.

// 🚀 Status:
// We are actively hiring for this role! If you are passionate about building impactful platforms and fostering innovation, we encourage you to apply.`,
//     responsibilities: [
//       'Define and champion the product vision, strategy, and roadmap for your features.',
//       'Conduct user research, market analysis, and competitive analysis to identify opportunities.',
//       'Translate product strategy into detailed requirements, user stories, and prototypes.',
//       'Work closely with engineering and design teams throughout the product lifecycle.',
//       'Prioritize features and manage the product backlog effectively.',
//       'Define and analyze metrics that inform the success of products.',
//       'Communicate product plans, benefits, and results to a spectrum of audiences.',
//     ],
//     qualifications: [
//       'Proven experience as a Product Manager or similar role in a tech-driven environment.',
//       'Demonstrated success defining and launching successful products.',
//       'Strong understanding of agile development methodologies.',
//       'Excellent analytical and problem-solving skills, with a data-driven approach.',
//       'Ability to work effectively with cross-functional teams.',
//       'Exceptional communication and interpersonal skills.',
//       'Experience with user research and A/B testing is a plus.',
//       'Technical background or strong understanding of software development principles is beneficial.',
//     ],
//     status: 'Open',
//   },
//   {
//     id: 'python-developer-01',
//     slug: 'python-developer',
//     title: 'Python Developer',
//     icon: Code2,
//     location: 'Remote (Global)',
//     employmentType: 'Full-time',
//     category: 'Engineering',
//     description: `💡 About the Role:
// This role was crucial for developing and maintaining robust backend services and APIs using Python. The ideal candidate collaborated with cross-functional teams to design and implement new features, focusing on scalability and performance.

// 🛠️ Tech Stack (previously required):
// Python, Django/Flask, REST APIs, PostgreSQL/MongoDB, Docker, Git.

// 👥 Status:
// We're not accepting applications for this role currently, but feel free to join our waitlist or follow us for future openings.`,
//     responsibilities: [
//       'Design, build, and maintain efficient, reusable, and reliable Python code.',
//       'Integrate user-facing elements developed by front-end developers with server-side logic.',
//       'Implement security and data protection solutions.',
//       'Optimize applications for maximum speed and scalability.',
//       'Collaborate with other team members and stakeholders.',
//     ],
//     qualifications: [
//       'Proven experience as a Python Developer.',
//       'Expertise in at least one popular Python framework (like Django, Flask, or FastAPI).',
//       'Familiarity with front-end technologies (like JavaScript, HTML5, and CSS3).',
//       'Understanding of databases and SQL/NoSQL.',
//       'Knowledge of version control tools (e.g., Git).',
//       'Excellent problem-solving skills.',
//     ],
//     status: 'Closed',
//   },
//   {
//     id: 'frontend-developer-02',
//     slug: 'frontend-developer',
//     title: 'Frontend Developer',
//     icon: Palette,
//     location: 'Remote (Global)',
//     employmentType: 'Full-time',
//     category: 'Engineering',
//     description: `💡 About the Role:
// This role focused on building beautiful and responsive interfaces that shape the user experience of our early-stage platform. The ideal candidate brought creative problem-solving and a passion for clean, modern frontend design.

// 🛠️ Tech Stack (previously required):
// React.js, Next.js, Tailwind CSS, REST APIs & JSON, Git & GitHub.

// 👥 Status:
// We are actively hiring for this role! Join our dynamic team.`,
//     responsibilities: [
//       'Develop new user-facing features using React.js/Next.js.',
//       'Build reusable components and front-end libraries for future use.',
//       'Translate designs and wireframes into high-quality code.',
//       'Optimize components for maximum performance across a vast array of web-capable devices and browsers.',
//       'Collaborate with backend developers to integrate APIs.',
//     ],
//     qualifications: [
//       'Proficient in JavaScript, including DOM manipulation and the JavaScript object model.',
//       'Thorough understanding of React.js and its core principles.',
//       'Experience with popular React.js workflows (such as Redux or Zustand).',
//       'Familiarity with Next.js is a strong plus.',
//       'Knowledge of modern authorization mechanisms, such as JSON Web Token.',
//       'Experience with common front-end development tools such as Babel, Webpack, NPM, etc.',
//     ],
//     status: 'Open',
//   },
//   {
//     id: 'backend-developer-03',
//     slug: 'backend-developer',
//     title: 'Backend Developer',
//     icon: Database,
//     location: 'Remote (Global)',
//     employmentType: 'Full-time',
//     category: 'Engineering',
//     description: `💡 About the Role:
// This role is key in designing, developing, and scaling our platform's backend infrastructure. The focus is on database management, server logic, API integrations, and ensuring a reliable, efficient system for our growing user base.

// 🛠️ Tech Stack (required):
// Node.js/Python/Go, PostgreSQL/MongoDB, RESTful/GraphQL APIs, Microservices, Docker/Kubernetes, AWS/GCP/Azure, Git.

// 👥 Status:
// We are actively hiring for this role! If you're passionate about building scalable systems, apply now.`,
//     responsibilities: [
//       'Design and implement scalable backend systems and APIs.',
//       'Manage database schemas and data migrations.',
//       'Ensure the security and integrity of backend services.',
//       'Optimize application for speed and scalability.',
//       'Write clean, maintainable, and testable code.',
//       'Troubleshoot and debug complex issues.',
//     ],
//     qualifications: [
//       'Proven experience as a Backend Developer (e.g., Node.js, Python, Go, Java).',
//       'Strong understanding of database technologies (e.g., PostgreSQL, MongoDB).',
//       'Experience with API design and development (RESTful, GraphQL).',
//       'Knowledge of microservices architecture and containerization (Docker, Kubernetes).',
//       'Familiarity with cloud platforms (AWS, GCP, Azure).',
//       'Proficiency in version control (Git).',
//     ],
//     status: 'Open',
//   },
//   {
//     id: 'ai-ml-engineer-04',
//     slug: 'ai-ml-engineer',
//     title: 'AI/ML Engineer',
//     icon: BrainCircuit,
//     location: 'Remote (Global)',
//     employmentType: 'Full-time',
//     category: 'AI/ML',
//     description: `💡 About the Role:
// This role involved developing and deploying machine learning models to enhance core platform features like matching and recommendations. The engineer researched and implemented AI techniques to solve complex problems and improve user engagement.

// 🛠️ Tech Stack (previously required):
// Python, TensorFlow/PyTorch, Scikit-learn, Pandas, NumPy, MLOps tools, SQL/NoSQL, Cloud ML Platforms (GCP AI Platform, AWS SageMaker), Git.

// 👥 Status:
// We're not accepting applications for this role currently, but feel free to join our waitlist or follow us for future openings.`,
//     responsibilities: [
//       'Design, train, and deploy machine learning models.',
//       'Collect and preprocess large datasets for model training.',
//       'Evaluate and improve model performance.',
//       'Integrate ML models into production systems.',
//       'Stay up-to-date with the latest advancements in AI/ML.',
//       'Collaborate with product and engineering teams to define AI-driven features.',
//     ],
//     qualifications: [
//       'Proven experience as an AI/ML Engineer or similar role.',
//       'Strong understanding of machine learning algorithms and statistical modeling.',
//       'Proficiency in Python and relevant ML libraries (e.g., TensorFlow, PyTorch, scikit-learn).',
//       'Experience with MLOps practices and tools.',
//       'Familiarity with data processing and feature engineering.',
//       'Experience with deploying models to cloud environments.',
//     ],
//     status: 'Closed',
//   },
// ];

import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Palette,
  Database,
  BrainCircuit,
  KanbanSquare,
} from "lucide-react";

export interface JobOpening {
  id: string;
  slug: string;
  title: string;
  icon: LucideIcon;
  location: string;
  employmentType: "Full-time" | "Part-time" | "Contract";
  category: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  status: "Open" | "Closed";
}

export const jobOpenings: JobOpening[] = [
  {
    id: "product-manager-05",
    slug: "product-manager",
    title: "Product Manager",
    icon: KanbanSquare,
    location: "Remote (Global)",
    employmentType: "Full-time",
    category: "Product",
    description: `💡 About the Role:
We are seeking an experienced Product Manager to own the vision, strategy, and execution of key product areas within CollabForge. You will work closely with engineering, design, and user feedback to deliver features that empower our users to connect, collaborate, and create effectively.

🛠️ Tech Stack (familiarity beneficial):
Agile methodologies (Scrum/Kanban), JIRA/Confluence (or similar), Analytics tools (e.g., Mixpanel, Google Analytics), Figma/Sketch for design collaboration, Basic understanding of web technologies.

💰 Compensation Note:
This position can be paid or unpaid, depending on the number of applications we receive and our current hiring scenario.

🚀 Status:
We are actively hiring for this role! If you are passionate about building impactful platforms and fostering innovation, we encourage you to apply.`,
    responsibilities: [
      "Define and champion the product vision, strategy, and roadmap for your features.",
      "Conduct user research, market analysis, and competitive analysis to identify opportunities.",
      "Translate product strategy into detailed requirements, user stories, and prototypes.",
      "Work closely with engineering and design teams throughout the product lifecycle.",
      "Prioritize features and manage the product backlog effectively.",
      "Define and analyze metrics that inform the success of products.",
      "Communicate product plans, benefits, and results to a spectrum of audiences.",
    ],
    qualifications: [
      "Proven experience as a Product Manager or similar role in a tech-driven environment.",
      "Demonstrated success defining and launching successful products.",
      "Strong understanding of agile development methodologies.",
      "Excellent analytical and problem-solving skills, with a data-driven approach.",
      "Ability to work effectively with cross-functional teams.",
      "Exceptional communication and interpersonal skills.",
      "Experience with user research and A/B testing is a plus.",
      "Technical background or strong understanding of software development principles is beneficial.",
    ],
    status: "Open",
  },
  {
    id: "python-developer-01",
    slug: "python-developer",
    title: "Python Developer",
    icon: Code2,
    location: "Remote (Global)",
    employmentType: "Full-time",
    category: "Engineering",
    description: `💡 About the Role:
This role was crucial for developing and maintaining robust backend services and APIs using Python. The ideal candidate collaborated with cross-functional teams to design and implement new features, focusing on scalability and performance.

🛠️ Tech Stack (previously required):
Python, Django/Flask, REST APIs, PostgreSQL/MongoDB, Docker, Git.

💰 Compensation Note:
This position can be paid or unpaid, depending on the number of applications we receive and our current hiring scenario.

👥 Status:
We're not accepting applications for this role currently, but feel free to join our waitlist or follow us for future openings.`,
    responsibilities: [
      "Design, build, and maintain efficient, reusable, and reliable Python code.",
      "Integrate user-facing elements developed by front-end developers with server-side logic.",
      "Implement security and data protection solutions.",
      "Optimize applications for maximum speed and scalability.",
      "Collaborate with other team members and stakeholders.",
    ],
    qualifications: [
      "Proven experience as a Python Developer.",
      "Expertise in at least one popular Python framework (like Django, Flask, or FastAPI).",
      "Familiarity with front-end technologies (like JavaScript, HTML5, and CSS3).",
      "Understanding of databases and SQL/NoSQL.",
      "Knowledge of version control tools (e.g., Git).",
      "Excellent problem-solving skills.",
    ],
    status: "Closed",
  },
  {
    id: "frontend-developer-02",
    slug: "frontend-developer",
    title: "Frontend Developer",
    icon: Palette,
    location: "Remote (Global)",
    employmentType: "Full-time",
    category: "Engineering",
    description: `💡 About the Role:
This role focuses on building beautiful and responsive interfaces that shape the user experience of our platform. The ideal candidate brings creative problem-solving and a passion for clean, modern frontend design.

🛠️ Tech Stack:
React.js, Next.js, Tailwind CSS, REST APIs & JSON, Git & GitHub.

💰 Compensation Note:
This position can be paid or unpaid, depending on the number of applications we receive and our current hiring scenario.

👥 Status:
We are actively hiring for this role! Join our dynamic team.`,
    responsibilities: [
      "Develop new user-facing features using React.js/Next.js.",
      "Build reusable components and front-end libraries for future use.",
      "Translate designs and wireframes into high-quality code.",
      "Optimize components for maximum performance across a vast array of web-capable devices and browsers.",
      "Collaborate with backend developers to integrate APIs.",
    ],
    qualifications: [
      "Proficient in JavaScript, including DOM manipulation and the JavaScript object model.",
      "Thorough understanding of React.js and its core principles.",
      "Experience with popular React.js workflows (such as Redux or Zustand).",
      "Familiarity with Next.js is a strong plus.",
      "Knowledge of modern authorization mechanisms, such as JSON Web Token.",
      "Experience with common front-end development tools such as Babel, Webpack, NPM, etc.",
    ],
    status: "Open",
  },
  {
    id: "backend-developer-03",
    slug: "backend-developer",
    title: "Backend Developer",
    icon: Database,
    location: "Remote (Global)",
    employmentType: "Full-time",
    category: "Engineering",
    description: `💡 About the Role:
This role is key in designing, developing, and scaling our platform's backend infrastructure. The focus is on database management, server logic, API integrations, and ensuring a reliable, efficient system for our growing user base.

🛠️ Tech Stack:
Node.js/Python/Go, PostgreSQL/MongoDB, RESTful/GraphQL APIs, Microservices, Docker/Kubernetes, AWS/GCP/Azure, Git.

💰 Compensation Note:
This position can be paid or unpaid, depending on the number of applications we receive and our current hiring scenario.

👥 Status:
We are actively hiring for this role! If you're passionate about building scalable systems, apply now.`,
    responsibilities: [
      "Design and implement scalable backend systems and APIs.",
      "Manage database schemas and data migrations.",
      "Ensure the security and integrity of backend services.",
      "Optimize application for speed and scalability.",
      "Write clean, maintainable, and testable code.",
      "Troubleshoot and debug complex issues.",
    ],
    qualifications: [
      "Proven experience as a Backend Developer (e.g., Node.js, Python, Go, Java).",
      "Strong understanding of database technologies (e.g., PostgreSQL, MongoDB).",
      "Experience with API design and development (RESTful, GraphQL).",
      "Knowledge of microservices architecture and containerization (Docker, Kubernetes).",
      "Familiarity with cloud platforms (AWS, GCP, Azure).",
      "Proficiency in version control (Git).",
    ],
    status: "Open",
  },
  {
    id: "ai-ml-engineer-04",
    slug: "ai-ml-engineer",
    title: "AI/ML Engineer",
    icon: BrainCircuit,
    location: "Remote (Global)",
    employmentType: "Full-time",
    category: "AI/ML",
    description: `💡 About the Role:
This role involved developing and deploying machine learning models to enhance core platform features like matching and recommendations. The engineer researched and implemented AI techniques to solve complex problems and improve user engagement.

🛠️ Tech Stack (previously required):
Python, TensorFlow/PyTorch, Scikit-learn, Pandas, NumPy, MLOps tools, SQL/NoSQL, Cloud ML Platforms (GCP AI Platform, AWS SageMaker), Git.

💰 Compensation Note:
This position can be paid or unpaid, depending on the number of applications we receive and our current hiring scenario.

👥 Status:
We're not accepting applications for this role currently, but feel free to join our waitlist or follow us for future openings.`,
    responsibilities: [
      "Design, train, and deploy machine learning models.",
      "Collect and preprocess large datasets for model training.",
      "Evaluate and improve model performance.",
      "Integrate ML models into production systems.",
      "Stay up-to-date with the latest advancements in AI/ML.",
      "Collaborate with product and engineering teams to define AI-driven features.",
    ],
    qualifications: [
      "Proven experience as an AI/ML Engineer or similar role.",
      "Strong understanding of machine learning algorithms and statistical modeling.",
      "Proficiency in Python and relevant ML libraries (e.g., TensorFlow, PyTorch, scikit-learn).",
      "Experience with MLOps practices and tools.",
      "Familiarity with data processing and feature engineering.",
      "Experience with deploying models to cloud environments.",
    ],
    status: "Closed",
  },
];
