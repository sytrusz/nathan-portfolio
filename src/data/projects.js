export const profile = {
  name: "Nathan Rener Malagapo",
  role: "Backend & AI Developer",
  location: "Cebu City, Philippines",
  email: "nathanrenermalagapo@gmail.com",
  linkedin: "https://www.linkedin.com/in/nathan-rener-malagapo-60b4a72a5/",
  summary: "Web and AI Developer with experience in building scalable web applications and management systems. Skilled in integrating artificial intelligence, such as RAG pipelines, into practical software solutions."
};

export const education = [
  {
    school: "Cebu Institute of Technology - University",
    degree: "Bachelor of Science in Information Technology",
    year: "2021 - 2026",
    roles: [
      "Communications Liaison Officer - Committee on Volunteers (Computer Students' Society)",
      "Member - Google Developer Groups on Campus - CIT-U"
    ],
    certifications: [
      {
        name: "TESDA AI Certificate - Advanced Institute of Technology",
        issuer: "TESDA",
        year: "2026"
      },
      {
        name: "AWS Academy Graduate - Cloud Architecting",
        issuer: "Amazon Web Services (AWS)",
        year: "2025" 
      },
      {
        name: "AWS Academy Graduate - Cloud Foundations", 
        issuer: "Amazon Web Services (AWS)", 
        year: "2025"
      }
    ]
  }
];

export const skills = {
  languages: ["Java", "Python", "JavaScript", "TypeScript", "C", "PHP"],
  frameworks: ["Spring Boot", "React", "FastAPI", "Next.js", "Django"],
  databases: ["MySQL", "PostgreSQL", "MongoDB", "Pinecone", "Qdrant"],
  ai_ml: ["RAG pipelines", "LLM fine-tuning (Vertex)", "Embedding",  ],
  cloud_devops: ["Google Cloud Platform", "Amazon Web Services", "Git", "CI/CD (GitHub Actions)", "Swagger", "Postman", "Docker"]
};

export const experience = [ 
  {
    role: "Web Developer",
    types: ["Intern"],
    workType: "Hybrid",
    company: "Innodata Knowledge Services Inc.",
    location: "HVG IT Park, Subangdaku, Mandaue, Cebu",
    period: "Feb 2026 - Apr 2026",
    months: 3,
    achievements: [
      "Built a web platform transitioning manual medical records to a secure digital system.",
      "Developed automated tools to parse and organize data from unstructured medical documents.",
      "Implemented features for clinic staff to instantly identify abnormal health results."
    ],
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Python", "OCR"]
  },
  {
    role: "AI Data Annotator",
    types: ["Freelance", "Intern"],
    workType: "Remote", 
    company: "Innodata Knowledge Services Inc.",
    location: "HVG IT Park, Subangdaku, Mandaue, Cebu",
    period: "Jan 2026 - Feb 2026",
    months: 2,
    achievements: [
      "Supported high-impact AI projects by labeling and categorizing complex datasets.",
      "Ensured data quality and consistency to improve machine learning model accuracy."
    ],
    tech: ["Data Analysis", "AI Training", "QA"]
  }
];

export const projects = [
  {
    id: 1,
    title: "ALLY",
    description: "ALLY is a dedicated, AI-powered legal assistant that leverages RAG technology, drawing directly from Philippine Supreme Court cases, to simplify legal inquiries for Filipinos. The platform is designed to democratize access to justice, helping citizens who struggle to secure qualified legal representation easily understand their rights under Philippine law.",
    privateNote: "The repository is temporarily set to private due to copyright and misuse concerns from individuals claiming it as their own thesis/capstone project without our permission.",
    tech: ["Spring Boot", "React", "Python", "Gemini (Fine-tuned)", "MySQL", "Vector DB", "Firebase"],
    categories: ["AI", "RAG", "Web"],
    status: "Open Source",
    architecture: [
      { component: "Frontend", detail: "React SPA with Firebase Auth" },
      { component: "Backend API", detail: "Spring Boot" },
      { component: "AI/RAG Service", detail: "Python FastAPI + Fine-tuned Gemini" },
      { component: "Databases", detail: "MySQL (Relational) + Pinecone - Vector DB (Embeddings)" }
    ],
    githubLink: "https://github.com/piolonrqz/Capstone-ALLY",   
    demoLink: "https://ally-cit.vercel.app/",
    images: [
      { src: "images/ally/ally-1.jpg", caption: "Home page view of ALLY" },
      { src: "images/ally/ally-2.png", caption: "Chat interface powered by Gemini and RAG" },
      { src: "images/ally/ally-3.png", caption: "Supreme court cases retrieved according to user query." },
      { src: "images/ally/ally-4.jpg", caption: "Top 8 out of 80+ teams presented to potential investors and government officials during the CCS TechCon 2025" },
      { src: "images/ally/ally-5.png", caption: "Team poster for CCS TechCon 2025" }

    ]
  },
  {
    id: 2,
    title: "APE System",
    description: "A web-based system for managing Annual Physical Examination (APE) records. Staff upload medical PDF documents, the system extracts relevant patient data using AI, and presents structured records for review and management.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS v4", "PostgreSQL", "Prisma", "Claude AI", "pdf-parse"],
    categories: ["AI", "Healthcare", "Web"],
    status: "Confidential",
    architecture: [
      { component: "Frontend", detail: "Next.js (TS) + Tailwind" },
      { component: "AI Engine", detail: "Claude 3.5 Sonnet via Anthropic API (Function Calling)" },
      { component: "Extraction", detail: "Custom PyMuPDF scripts for text/table parsing" },
      { component: "Backend", detail: "Server Actions + Prisma 7 ORM" },
      { component: "Database", detail: "PostgreSQL" }
    ],
    githubLink: "https://github.com/sytrusz/InnoCare-APE",
    images: ["images/innocare/innocare-1.png", "images/innocare/innocare-2.png", "images/innocare/innocare-3.png", "images/innocare/innocare-4.png", "images/innocare/innocare-5.png"]
  },
  {
    id: 6,
    title: "Payroll System",
    description: "A desktop-based Interactive Payroll Authoring System replacing complex Excel templates with real-time tax/contribution calculations and an Ag-Grid spreadsheet interface.",
    tech: ["Next.js", "Tauri", "TypeScript", "Ag-Grid", "SQLite", "Tailwind CSS"],
    categories: ["Fintech", "Desktop"],
    status: "Confidential",
    architecture: [
    { component: "Frontend", detail: "Next.js + Ag-Grid (Authoring Mode)" },
    { component: "Backend Logic", detail: "TypeScript Engine" },
    { component: "Core Logic", detail: "TypeScript Calculation Engine (Tax Brackets/Contributions)" },
    { component: "Desktop Bridge", detail: "Tauri v2 (Rust backend for system access)" },
    { component: "Reporting", detail: "React-PDF for institutional report generation" },
    { component: "Database", detail: "SQLite" }
    ],
    githubLink: "https://github.com/sytrusz/ConsoLink-Payroll",
    images: ["images/payroll/payroll-1.png", "images/payroll/payroll-2.png", "images/payroll/payroll-3.png"]
  },
  {
    id: 3,
    title: "Network Monitoring Dashboard",
    description: "Real-time monitoring dashboard for MikroTik routers and TP-Link Deco Mesh systems. Features Dual-ISP failover detection, 'True-Negative' connectivity logic, and an integrated Telegram Bot for real-time push notifications and interactive interface controls.",
    tech: ["FastAPI", "Next.js", "Python", "Telegram API", "MikroTik API", "Tailwind CSS"],
    categories: ["Networking", "IoT", "Web"],
    status: "Open Source",
    architecture: [
      { component: "Frontend", detail: "Next.js Dashboard" },
      { component: "Backend", detail: "Python FastAPI Server" },
      { component: "Integration", detail: "MikroTik REST API Polling" },
      { component: "Logic Engine", detail: "Dual-ISP True-Negative Detection" },
      { component: "Integration", detail: "MikroTik REST API" },
      { component: "Alerting", detail: "Telegram Bot API" }
    ],
    githubLink: "https://github.com/sytrusz/MIKROTIK-TPLINK-MESH-MONITORING",
    images: [
      { src: "images/network/network-1.png", caption: "Main Dashboard Overview" },
      { src: "images/network/network-2.jpg", caption: "Real-time MikroTik Router Metrics" },
      { src: "images/network/network-3.jpg", caption: "TP-Link Deco Mesh Topology & Nodes" },
      { src: "images/network/network-4.jpg", caption: "Dual-ISP Failover & Connectivity Status" },
      { src: "images/network/network-5.jpg", caption: "Telegram Bot Push Notifications Interface" },
      { src: "images/network/network-6.jpg", caption: "System Event Logs and Interactive Interface Controls" }
    ]
  },
  {
    id: 9,
    title: "Pharmacy POS System",
    description: "A Point of Sale (POS) and inventory management system designed for pharmacies, featuring sales tracking, stock management, and interactive dashboards.",
    tech: ["React", "Vite", "Tailwind CSS", "Spring Boot", "SQLite"],
    categories: ["Web", "Software"],
    status: "Confidential",
    architecture: [
      { component: "Frontend", detail: "React SPA with Vite & Tailwind CSS" },
      { component: "Backend", detail: "Spring Boot REST API" },
      { component: "Database", detail: "SQLite" }
    ],
    images: []
  },
  {
    id: 4,
    title: "CampusXperience",
    description: "A centralized web platform for handling campus events, student organizations, and announcements.",
    tech: ["Spring Boot", "React", "Firebase", "MySQL"],
    categories: ["Web"],
    status: "Open Source",
    architecture: [
    { component: "Frontend", detail: "React Web Application" },
    { component: "Backend", detail: "Spring Boot" },
    { component: "Authentication", detail: "Firebase Auth" },
    { component: "Database", detail: "MySQL" }
    ],
    githubLink: "https://github.com/sytrusz/campusxperience",
    images: ["images/campusxperience/campusxperience-1.jpg"]    
  },    
  {
    id: 5,
    title: "StudySpace",
    description: "A cross-platform booking solution simplifying the search for co-working spaces for students and freelancers.",
    tech: ["Spring Boot", "React", "Android"],
    categories: ["Web", "Mobile"],
    status: "Open Source",
    architecture: [
    { component: "Web Frontend", detail: "React Web Application" },
    { component: "Mobile App", detail: "Native Android Application" },
    { component: "Backend", detail: "Spring Boot" },
    { component: "Database", detail: "SQL Database" }
    ],
    demoLink: "https://it-342-g6-study-space-i6r8.vercel.app/",
    githubLink: "https://github.com/piolonrqz/IT342G6-StudySpace",
    images: ["images/studyspace/studyspace.jpg"]
  },
  {
    id: 7,
    title: "Notes App (Web3)",
    description: "A hybrid Web3 notes application by Team JKWELEYN, combining fast, user-friendly experiences with the permanence and ownership of the Cardano blockchain.",
    tech: ["Node.js", "Express", "React", "Cardano", "Blockfrost", "CIP-30 Wallet", "MongoDB"],
    categories: ["Web3", "Web"],
    status: "Open Source",
    architecture: [
    { component: "Frontend", detail: "React Web Application" },
    { component: "Wallet", detail: "CIP-30 Browser Extension Integration" },
    { component: "Frontend", detail: "React Interface" },
    { component: "Backend", detail: "Node.js + Express" },
    { component: "Blockchain", detail: "Cardano Network via Blockfrost" },
    { component: "Database", detail: "MongoDB" }
    ],
    githubLink: "https://github.com/piolonrqz/notes-app",
    images: ["images/notesapp/notesapp-1.jpg"]
  },
  {
    id: 8,
    title: "Hotel Management System",
    description: "Desktop application for handling reservations, room status, and guest billing.",
    tech: ["Java", "MySQL"],
    categories: ["Software", "Desktop"],
    status: "Open Source",
    architecture: [
      { component: "Frontend", detail: "Java GUI" },
      { component: "Backend", detail: "Java Core Logic" },
      { component: "Database", detail: "MySQL Server" }
    ],
    githubLink: "https://github.com/kingkuys2123/HotelManagementSystem",
    images: ["images/hotel/hotel-1.jpg"]
  }
];