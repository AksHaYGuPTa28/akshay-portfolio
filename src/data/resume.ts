export const profile = {
  name: "Akshay Gupta",
  titles: ["AI Engineer", "Full-Stack Software Engineer"],
  phone: "+91-8384041540",
  email: "inbox.akshaygupta@gmail.com",
  linkedin: "https://www.linkedin.com/in/akshay-gupta-7a433a122/",
  github: "https://github.com/AksHaYGuPTa28",
  location: "Gurugram, India",
  summary:
    "AI Engineer and Senior Software Engineer with 5+ years building scalable, production-grade web applications and AI-powered systems. Experienced designing and shipping Retrieval-Augmented Generation (RAG) pipelines, LLM-integrated applications, and agentic tooling using the OpenAI, Claude, and Gemini APIs, alongside a strong full-stack foundation in React, Node.js, and microfrontend architecture. Skilled at using AI-assisted development tools (Cursor, Claude Code, GitHub Copilot, ChatGPT, Gemini) to accelerate delivery, improve code quality, and rapidly prototype across the stack.",
};

export const stats = [
  { label: "Years of experience", value: "5+" },
  { label: "Engineers led", value: "4" },
  { label: "Hotels API latency cut", value: "42%" },
  { label: "API success rate", value: "99.9%" },
];

export const skillGroups = [
  {
    title: "AI & LLMs",
    skills: [
      "OpenAI API",
      "Claude API",
      "Gemini API",
      "RAG",
      "Prompt Engineering",
      "Function Calling",
      "Structured Outputs",
      "Streaming Responses",
      "Agentic Workflows",
    ],
  },
  {
    title: "RAG & Vector Search",
    skills: [
      "LangChain",
      "Embeddings",
      "Pinecone",
      "pgvector",
      "Semantic Search",
      "Chunking Strategies",
      "Reranking",
      "Hallucination Mitigation",
    ],
  },
  {
    title: "AI Dev Tools",
    skills: ["Cursor", "Claude Code", "GitHub Copilot", "ChatGPT", "Gemini"],
  },
  {
    title: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React.js", "Next.js", "Angular", "Redux", "Node.js", "Express.js", "NestJS"],
  },
  {
    title: "Cloud & Serverless",
    skills: ["AWS Lambda", "API Gateway", "DynamoDB", "Docker", "Docker Compose"],
  },
  {
    title: "Databases & ORMs",
    skills: ["PostgreSQL", "DynamoDB", "Prisma"],
  },
  {
    title: "Testing & Dev Tools",
    skills: ["Jest", "React Testing Library", "Git", "Postman", "Chrome DevTools"],
  },
  {
    title: "Deployment",
    skills: ["Vercel", "Netlify", "Heroku", "CPanel"],
  },
  {
    title: "Practices & Architecture",
    skills: [
      "Agile/Scrum",
      "REST API Design",
      "Microfrontend Architecture",
      "Component-driven Design",
      "ATOMIC Design",
    ],
  },
];

export const experience = [
  {
    role: "Senior Software Engineer",
    company: "Coforge (Client: IndiGo Airlines)",
    location: "Gurugram",
    period: "Sep 2024 – Present",
    highlights: [
      "Led the development of hotel cross-sell strips across Web Check-in and Itinerary for IndiGo's hotel booking micro frontend, driving a 31% increase in hotel visibility and 7% growth in cross-bookings.",
      "Designed and built the Sightseeing API from scratch, integrating 500+ activities across 100+ destinations in collaboration with the external partner, Vernost.",
      "Owned and optimized the Hotels API, reducing response time by 42% and improving API success rate to 99.9%.",
      "Led a team of 4 engineers, driving feature delivery, code reviews, and sprint execution for the hotel booking workstream.",
      "Integrated AI-assisted development tools (Cursor, Claude Code) into the team's workflow, speeding up feature delivery and code review turnaround.",
    ],
  },
  {
    role: "Software Developer (Freelance)",
    company: "Remote",
    location: "Remote",
    period: "May 2024 – Sep 2024",
    highlights: [
      "Built modern, responsive UIs and insightful dashboards for a fintech using React, Redux, and Tailwind, optimizing performance via lazy loading and reduced bundle size.",
    ],
  },
  {
    role: "Software Engineer",
    company: "VoerEir",
    location: "Hybrid – Noida",
    period: "Feb 2022 – May 2024",
    highlights: [
      "Solely led the migration of Touchstone (VoerEir's flagship product) from Angular to React, driving architecture decisions, dependency upgrades, and component migration from legacy codebase to production.",
      "Built a reusable component library and centralized application state using Redux, improving code consistency, maintainability, and scalability.",
      "Developed REST APIs using Node.js and integrated third-party services to support frontend features, while optimizing API performance and reliability.",
    ],
  },
  {
    role: "Software Development Engineer",
    company: "Loopin HQ",
    location: "Hybrid – Bangalore",
    period: "Jun 2021 – Feb 2022",
    highlights: [
      "Developed a calendar-centric productivity platform using React, enabling efficient scheduling and team collaboration, working directly with the CTO to align product design with business goals.",
    ],
  },
  {
    role: "React Developer",
    company: "Videtorrium India",
    location: "Remote – Delhi",
    period: "Jul 2020 – Jun 2021",
    highlights: [
      "Developed user interfaces for platforms like Unlock.fit and deployed full-stack applications on Heroku, Vercel, Netlify, and CPanel, gaining hands-on DevOps exposure.",
    ],
  },
];

export const projects = [
  {
    name: "RAG-Based Enterprise Document Q&A Assistant",
    year: "2026",
    tech: ["Python", "LangChain", "OpenAI API", "Claude API", "Pinecone/pgvector", "React", "Node.js"],
    points: [
      "Architected an end-to-end RAG pipeline (ingestion, chunking, embedding, retrieval) enabling natural-language Q&A over large internal document sets, using OpenAI/Claude embeddings with hybrid search and reranking to improve answer relevance.",
      "Designed prompt templates and grounding strategies (context injection, source citations, guardrails) to reduce hallucinations and improve factual accuracy of generated answers.",
      "Built a streaming chat interface in React/Next.js with function calling and structured JSON outputs, cutting manual document search time for end users.",
    ],
    github: "https://github.com/AksHaYGuPTa28/rag-doc-qa",
  },
  {
    name: "Capacity Management Platform",
    year: "2026",
    tech: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Prisma", "Docker Compose"],
    points: [
      "Built a full-stack capacity management platform (NestJS/Prisma/PostgreSQL backend) for allocating resources, forecasting utilization, and detecting over/under-allocation, seeded with 50+ employees and 20+ concurrent projects.",
      "Built an executive dashboard (Next.js, Recharts) with 6+ visualizations: capacity vs. demand by team, utilization distribution, allocation heat maps, and a 6-month forecast.",
      "Implemented a deterministic natural-language \"Ask AI\" assistant answering operational questions (availability, skill matches, overallocation, delivery feasibility) from live Prisma queries.",
    ],
    github: "https://github.com/AksHaYGuPTa28/Capacity-Management",
  },
  {
    name: "Serverless To-Do REST API",
    year: "2026",
    tech: ["AWS Lambda", "API Gateway", "DynamoDB", "Node.js", "TypeScript", "Docker"],
    points: [
      "Built a Lambda-compatible serverless REST API sharing a single handler between local Express development and real AWS API Gateway/Lambda deployment, with zero business-logic duplication.",
      "Designed a layered architecture (handler → service → repository) with Zod validation and full CRUD against DynamoDB; validated with unit tests (mocked repository) and integration tests (real DynamoDB Local).",
    ],
    github: "https://github.com/AksHaYGuPTa28/todo-api-serverless",
  },
];

export const education = [
  {
    school: "Dr. A.P.J. Abdul Kalam Technical University",
    degree: "Bachelor of Technology in Computer Science",
    period: "2017 – 2021",
  },
];
