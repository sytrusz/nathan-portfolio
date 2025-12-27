export const profile = {
  name: "Nathan Rener Malagapo",
  role: "Backend & AI Developer",
  location: "Cebu City, Philippines",
  email: "nathanrenermalagapo@gmail.com",
  linkedin: "https://www.linkedin.com/in/nathan-rener-malagapo-60b4a72a5/",
  summary: "IT student at CIT-U with strong foundations in web development. Experienced in building AI-integrated applications (RAG) and management systems. Passionate about solving local problems through accessible technology."
};

export const education = [
  {
    school: "Cebu Institute of Technology - University",
    degree: "Bachelor of Science in Information Technology",
    year: "2021 - Present",
    certifications: [
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
  languages: ["Java", "Python", "Javascript", "PHP", "HTML/CSS", "C", "SQL"],
  frameworks: ["Spring Boot", "React", "FastAPI", "Node.js", "Django"],
  soft: ["Technical Research", "Project Management", "Team Collaboration"]
};

export const projects = [
  {
    id: 1,
    title: "ALLY",
    description: "AI-powered legal assistant for Filipinos using RAG technology to simplify legal inquiry.",
    tech: ["Spring Boot", "React", "Python", "Gemini (Fine-tuned)", "MySQL", "Vector DB", "Firebase"],
    category: "AI + RAG Website",
    githubLink: "https://github.com/piolonrqz/Capstone-ALLY",   
    demoLink: "https://ally-cit.vercel.app/",
    image: "/images/ally.jpg"
  },
  {
    id: 2,
    title: "CampusXperience",
    description: "A centralized web platform for handling campus events, student organizations, and announcements.",
    tech: ["Spring Boot", "React", "Firebase", "MySQL"],
    category: "Website",
    githubLink: "https://github.com/sytrusz/campusxperience",
    image: "/images/campusxperience.jpg"    
  },    
  {
    id: 3,
    title: "StudySpace",
    description: "A cross-platform booking solution simplifying the search for co-working spaces for students and freelancers.",
    tech: ["Spring Boot", "React", "Android"],
    category: "Website + Mobile App",
    demoLink: "https://it-342-g6-study-space-i6r8.vercel.app/",
    githubLink: "https://github.com/piolonrqz/IT342G6-StudySpace",
    image: "/images/studyspace.jpg"
  },
  {
    id: 4,
    title: "Notes App (Web3)",
    description: "A hybrid Web3 notes application by Team JKWELEYN, combining fast, user-friendly experiences with the permanence and ownership of the Cardano blockchain.",
    tech: ["Node.js", "Express", "React", "Cardano", "Blockfrost", "CIP-30 Wallet", "MongoDB"],
    category: "Web3 Website",
    githubLink: "https://github.com/piolonrqz/notes-app",
    image: "/images/notesapp.jpg"
  },
  {
    id: 5,
    title: "Hotel Management System",
    description: "Desktop application for handling reservations, room status, and guest billing.",
    tech: ["Java", "MySQL"],
    category: "Software",
    githubLink: "https://github.com/kingkuys2123/HotelManagementSystem",
    image: "/images/hotel.jpg"
  }
];