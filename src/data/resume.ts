export const profile = {
  name: "Akshay Gupta",
  titles: ["AI Full Stack Lead"],
  email: "inbox.akshaygupta@gmail.com",
  linkedin: "https://www.linkedin.com/in/akshay-gupta-7a433a122/",
  github: "https://github.com/AksHaYGuPTa28",
  location: "India",
  summary:
    "AI Full Stack Lead with 6+ years of experience building scalable, production-grade web applications, APIs, data platforms and AI-powered systems. Currently leading the design and delivery of a cloud data platform on AWS Serverless, Node.js and Snowflake for a large enterprise client in the travel and transport sector. Experienced designing and shipping RAG pipelines, LLM-integrated applications and agentic tooling with the OpenAI, Claude and Gemini APIs, on a strong full-stack foundation in React, Node.js and microfrontend architecture. Uses AI coding agents (Claude Code, Cursor, GitHub Copilot) daily to accelerate delivery, improve code quality and prototype rapidly across the stack.",
};

export const stats = [
  { label: "Years of experience", value: "6+" },
  { label: "Engineers led (previous role)", value: "4" },
  { label: "Hotels API latency cut (previous role)", value: "42%" },
  { label: "API success rate (previous role)", value: "99.9%" },
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
      "LLM Evaluation",
      "Agent Evals",
    ],
  },
  {
    title: "RAG & Vector Search",
    skills: [
      "LangChain",
      "Embeddings",
      "ChromaDB",
      "Semantic Search",
      "Hybrid Search",
      "Chunking Strategies",
      "Reranking",
      "Hallucination Mitigation",
    ],
  },
  {
    title: "AI Dev Tools",
    skills: ["Claude Code", "Cursor", "GitHub Copilot", "ChatGPT", "Gemini"],
  },
  {
    title: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "SQL", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "NestJS",
      "FastAPI",
      "Redux",
      "Angular",
    ],
  },
  {
    title: "Cloud & Serverless",
    skills: [
      "AWS Lambda",
      "API Gateway",
      "Step Functions",
      "DynamoDB",
      "S3",
      "CloudWatch",
      "GCP",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    title: "Data & Databases",
    skills: [
      "Snowflake",
      "Data Pipelines",
      "Serverless Data Engineering",
      "PostgreSQL",
      "DynamoDB",
      "Prisma",
    ],
  },
  {
    title: "Infrastructure & CI/CD",
    skills: ["Terraform (IaC)", "Bitbucket Pipelines", "GitHub Actions", "Vercel"],
  },
  {
    title: "Testing & Dev Tools",
    skills: ["Jest", "React Testing Library", "Git", "Postman", "Chrome DevTools"],
  },
  {
    title: "Practices & Architecture",
    skills: [
      "Agile/Scrum",
      "REST API Design",
      "OAuth",
      "Microfrontend Architecture",
      "Data Versioning",
      "Change Management (CAB)",
      "Component-driven Design",
    ],
  },
];

export const experience = [
  {
    role: "AI Full Stack Lead (Contract)",
    company: "VITA Solutions",
    location: "Geneva, Switzerland (Remote)",
    period: "Aug 2026 – Present",
    summary:
      "Leading the design and delivery of a data platform for a large enterprise client in the travel and transport sector.",
    highlights: [
      "Build and maintain cloud data pipelines and serverless services in Node.js on AWS, using Snowflake as the data warehouse.",
      "Design APIs and scheduled file deliveries that give customers reliable, versioned data in the format they need.",
      "Turn business requirements into configurable features, so each customer can choose their own reporting options.",
      "Own code quality end to end: unit tests, pull request reviews, staging tests and production releases.",
      "Work with product, data and partner teams to plan, estimate and ship on schedule.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Coforge (Client: IndiGo Airlines)",
    location: "Gurugram",
    period: "May 2024 – Jul 2026",
    highlights: [
      "Led the development of hotel cross-sell strips across Web Check-in and Itinerary for IndiGo's hotel booking micro frontend, driving a 31% increase in hotel visibility and 7% growth in cross-bookings.",
      "Designed and built the Sightseeing API from scratch, integrating 500+ activities across 100+ destinations in collaboration with the external partner, Vernost.",
      "Owned and optimized the Hotels API, reducing response time by 42% and improving API success rate to 99.9%.",
      "Led a team of 4 engineers, driving feature delivery, code reviews and sprint execution for the hotel booking workstream.",
      "Integrated AI-assisted development tools (Cursor, Claude Code) into the team's workflow, speeding up feature delivery and code review turnaround.",
    ],
  },
  {
    role: "Software Engineer",
    company: "VoerEir",
    location: "Hybrid – Noida",
    period: "Feb 2022 – May 2024",
    highlights: [
      "Solely led the migration of Touchstone (VoerEir's flagship product) from Angular to React, driving architecture decisions, dependency upgrades and component migration from the legacy codebase to production.",
      "Built a reusable component library and centralized application state using Redux, improving code consistency, maintainability and scalability.",
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
      "Developed user interfaces for platforms like Unlock.fit and deployed full-stack applications on Heroku, Vercel, Netlify and CPanel, gaining hands-on DevOps exposure.",
    ],
  },
];

export const projects = [
  {
    name: "agent-evals: data-cleaning agent with an eval harness",
    year: "2026",
    tech: ["Node.js", "JavaScript", "Gemini API", "Anthropic API", "GitHub Actions"],
    points: [
      "Built a small tool-using data-cleaning agent from scratch (no framework or dependencies) and the evaluation setup around it: 24 test cases (synthetic data plus a small extract of real OpenFlights data), repeated runs, regression gates and an HTML trace report.",
      "The evals surfaced real failures: a tool interface the model could not write reliably went from 0/3 to 3/3 after a redesign, and re-running with neutral tool descriptions dropped one case from 3/3 to 1/3.",
      "Includes a demo where a person reviews a before/after diff and approves the agent's work before anything can be downloaded. Results come from small Gemini models, 3 runs per case on the free tier; fixes are tested offline and only partly re-validated live.",
    ],
    github: "https://github.com/AksHaYGuPTa28/agent-evals",
  },
  {
    name: "RAG-Based Enterprise Document Q&A Assistant",
    year: "2026",
    tech: ["Python", "FastAPI", "LangChain", "OpenAI API", "Claude API", "Gemini API", "ChromaDB", "Next.js"],
    points: [
      "Built an end-to-end RAG pipeline (ingestion, chunking, embedding, retrieval) enabling natural-language Q&A over uploaded documents, using OpenAI embeddings (with a local fallback), ChromaDB, hybrid dense and BM25 search, and a cross-encoder reranker.",
      "Wrote a grounding prompt that answers only from numbered context, cites every claim and says so when the documents do not cover a question, to reduce hallucinations.",
      "Built a streaming chat interface in Next.js with function calling and structured JSON outputs, with pluggable OpenAI, Claude and Gemini models.",
    ],
    github: "https://github.com/AksHaYGuPTa28/rag-doc-qa",
  },
  {
    name: "Capacity Management Platform",
    year: "2026",
    tech: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Prisma", "Docker Compose"],
    points: [
      "Built a full-stack capacity management platform (NestJS/Prisma/PostgreSQL backend) for allocating resources, forecasting utilization and detecting over/under-allocation, seeded with 50+ employees and 20+ concurrent projects.",
      "Built an executive dashboard (Next.js, Recharts) with 6+ visualizations: capacity vs. demand by team, utilization distribution, allocation heat maps and a 6-month forecast.",
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
  {
    name: "Cloud data platform on AWS and Snowflake",
    year: "Case study",
    tech: ["AWS", "Node.js", "Snowflake", "Serverless"],
    points: [
      "Serverless pipelines in Node.js on AWS feeding a Snowflake data warehouse.",
      "Versioned file deliveries and APIs, so customers get reliable data in the format they need.",
      "Configurable customer outputs: each customer chooses their own reporting options.",
    ],
  },
];

export const education = [
  {
    school: "Dr. A.P.J. Abdul Kalam Technical University",
    degree: "Bachelor of Technology in Computer Science",
    period: "2017 – 2021",
  },
];
