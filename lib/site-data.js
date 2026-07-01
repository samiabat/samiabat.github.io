export const navigation = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/#projects" },
  { label: "Research", href: "/research" },
  { label: "Experience", href: "/experience" },
  { label: "Blog", href: "/blog" },
  { label: "GitHub", href: "/github" },
  { label: "Contact", href: "/contact" },
];

export const heroRoles = [
  "AI Engineer",
  "Backend Engineer",
  "ML Researcher",
];

export const statHighlights = [
  { value: 4, suffix: "+", label: "Years Experience" },
  { value: 20, suffix: "+", label: "AI Projects" },
  { value: 10, suffix: "k+", label: "Concurrent Users Tested" },
  { value: 1000, suffix: "+", label: "Algorithm Problems" },
];

export const credibilityBadges = [
  "Top Rated Plus",
  "Best AI Research Award",
  "99.9% availability",
  "30s -> 300ms latency improvement",
];

export const techCategories = [
  {
    title: "AI",
    items: [
      "OpenAI",
      "Claude",
      "Gemini",
      "LangChain",
      "RAG",
      "Fine-tuning",
      "LLMs",
      "Embeddings",
      "Prompt Engineering",
    ],
  },
  {
    title: "Machine Learning",
    items: [
      "PyTorch",
      "TensorFlow",
      "NLP",
      "Reinforcement Learning",
      "Stable Diffusion",
      "LoRA",
      "Computer Vision",
    ],
  },
  {
    title: "Backend",
    items: [
      "FastAPI",
      "Django",
      "Flask",
      "Node",
      "REST APIs",
      "GraphQL",
    ],
  },
  {
    title: "Cloud",
    items: ["AWS", "Docker", "GitHub Actions", "Linux", "CI/CD"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "Redis", "MongoDB", "Qdrant", "Pinecone"],
  },
  {
    title: "Languages",
    items: ["Python", "TypeScript", "Java", "C++", "C#"],
  },
];

export const featuredProjects = [
  {
    title: "BibleClass AI",
    badge: "Flagship RAG Product",
    description:
      "A theological search and study platform designed to answer doctrinal questions with high-confidence retrieval, multilingual understanding, and production-ready backend orchestration.",
    architecture: [
      "Ingestion pipeline for scripture, commentary, and structured theological resources.",
      "Embedding workflow with multilingual retrieval and relevance reranking.",
      "Confidence routing to decide when to answer, clarify, or fall back to broader search.",
      "FastAPI services behind Dockerized deployment on AWS.",
    ],
    technologies: [
      "RAG",
      "FastAPI",
      "Qdrant",
      "LangChain",
      "OpenAI",
      "Docker",
      "AWS",
    ],
    githubUrl: null,
    liveUrl: null,
    diagram: "rag",
  },
  {
    title: "OpenClaw",
    badge: "Autonomous Agent Systems",
    description:
      "An AI coding agent concept focused on terminal execution, MCP-style tool calling, memory, VFS isolation, and autonomous planning for developer workflows.",
    architecture: [
      "Planner loop decomposes tasks into executable steps with tool selection.",
      "Terminal execution and VFS access isolate file operations from higher-level planning.",
      "Memory layer stores goals, observations, and recovery context between actions.",
      "Redis-backed orchestration enables extensible coordination for multi-step sessions.",
    ],
    technologies: [
      "AI Agents",
      "MCP",
      "Tool Calling",
      "Docker",
      "Redis",
      "Planning",
      "VFS",
    ],
    githubUrl: null,
    liveUrl: null,
    diagram: "agent",
  },
  {
    title: "AI Course Builder",
    badge: "Content Automation",
    description:
      "A pipeline for turning raw learning materials into structured AI-assisted courses through scraping, chunking, vector indexing, and document generation.",
    architecture: [
      "Scrapers collect content from source pages and normalize metadata.",
      "Chunking and embeddings prepare material for retrieval and curriculum assembly.",
      "Vector search powers concept lookup and lesson generation.",
      "Structured outputs generate notes, exercises, and guided learning paths.",
    ],
    technologies: [
      "Scraping",
      "Chunking",
      "Embeddings",
      "RAG",
      "Vector DB",
      "Document Generation",
    ],
    githubUrl: "https://github.com/samiabat/AI-Takeoff-Builder",
    liveUrl: null,
    diagram: "pipeline",
  },
  {
    title: "AI Live Streamer",
    badge: "Real-Time Inference",
    description:
      "A real-time interactive AI stack for voice, avatars, and GPU-backed generation optimized for low-latency streaming experiences.",
    architecture: [
      "Text-to-speech and query generation feed a low-latency response loop.",
      "RAG provides contextual grounding for conversational answers.",
      "Streaming transport coordinates avatars, speech, and incremental response tokens.",
      "GPU inference pipeline reduces wait time for interactive content generation.",
    ],
    technologies: [
      "TTS",
      "RAG",
      "Streaming",
      "GPU Inference",
      "Avatars",
      "Python",
    ],
    githubUrl: "https://github.com/samiabat/ESPnet-text-2-byte-audio-buffer",
    liveUrl: null,
    diagram: "stream",
  },
  {
    title: "Private Crypto Platform",
    badge: "Confidential Client Work",
    description:
      "A private crypto platform concept combining escrow mechanics, blockchain verification, payment orchestration, and security-focused service design.",
    architecture: [
      "Escrow workflow enforces step-based release rules across payment states.",
      "Blockchain-linked verification protects auditability for critical transactions.",
      "Backend services coordinate payment flow, dispute handling, and reconciliation.",
      "Security layers focus on access control, integrity checks, and operational safety.",
    ],
    technologies: [
      "Escrow",
      "Blockchain",
      "Backend",
      "Payments",
      "Security",
    ],
    githubUrl: null,
    liveUrl: null,
    diagram: "cloud",
  },
];

export const experienceTimeline = [
  {
    year: "2024 - Present",
    title: "Machine Learning Engineer",
    company: "Upwork",
    description:
      "Working with international clients to build production AI applications, LLM systems, RAG pipelines, backend services, cloud infrastructure, text-to-image systems, and speech synthesis products.",
    bullets: [
      "Architected distributed backend systems benchmarked for 10,000+ concurrent users.",
      "Deployed multi-provider LLM redundancy and near-zero interruption RAG pipelines.",
      "Reduced latency from roughly 30 seconds to under 300 milliseconds with GPU-backed optimization.",
    ],
  },
  {
    year: "2023 - 2024",
    title: "AI Researcher",
    company: "Addis Ababa University",
    description:
      "Developed an NLP threat detection system for live social and communication contexts, later adopted for practical use by the Ethiopian government.",
    bullets: [
      "Built applied NLP models for hate speech and threat detection.",
      "Won Best Researcher and Best Poster Presenter for the capstone research.",
      "Focused on societal-impact AI, methodology, and applied deployment.",
    ],
  },
  {
    year: "2021 - 2023",
    title: "Algorithms Instructor",
    company: "Africa to Silicon Valley (A2SV)",
    description:
      "Mentored students on algorithms, competitive programming, backend projects, and hackathons while contributing to product development and high-performance problem-solving culture.",
    bullets: [
      "Helped drive a 20% increase in top-tier student placements.",
      "Solved 1,000+ algorithmic challenges across LeetCode and Codeforces.",
      "Contributed to hackathon-winning backend and offline-first systems.",
    ],
  },
];

export const achievements = [
  "Best Researcher",
  "Best Poster",
  "Top Rated Plus",
  "National Rank #140",
  "Hackathon Winner",
  "1000+ LeetCode",
];

export const researchAreas = [
  "Machine Learning",
  "Applied Reinforcement Learning",
  "Systems Programming",
  "Cybersecurity",
  "Distributed Systems",
  "Generative AI",
];

export const architectureGallery = [
  {
    title: "RAG Pipeline",
    text: "Document ingestion, chunking, embeddings, vector retrieval, reranking, and grounded answer synthesis.",
  },
  {
    title: "Cloud Architecture",
    text: "Containerized services, asynchronous workers, API gateways, and observability-friendly deployment surfaces.",
  },
  {
    title: "Database Flow",
    text: "PostgreSQL for relational consistency, Redis for speed, and vector stores for semantic search.",
  },
  {
    title: "LLM Routing",
    text: "Provider failover, confidence thresholds, structured outputs, and prompt orchestration in production.",
  },
  {
    title: "Docker Runtime",
    text: "Isolated app services, reproducible builds, deployment portability, and safer experimentation.",
  },
  {
    title: "AI Streaming Stack",
    text: "Speech, GPU inference, event streaming, and avatar presentation for real-time applications.",
  },
];

export const contactLinks = [
  {
    label: "Email",
    href: "mailto:samuel.neuralnet@gmail.com",
    text: "samuel.neuralnet@gmail.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/samiabat",
    text: "github.com/samiabat",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/samiabat",
    text: "linkedin.com/in/samiabat",
  },
];

export const resumeLinks = [
  {
    label: "AI Resume",
    href: "/resumes/samuel-abatneh-ai-researcher-engineer.pdf",
  },
  {
    label: "Software Resume",
    href: "/resumes/samuel-abatneh-software-engineer.pdf",
  },
];
