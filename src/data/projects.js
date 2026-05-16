export const PROJECTS_DATA = [
  {
    id: "mednexus",
    title: "MedNexus — Smart Hospital Management Platform",
    description: "A full-stack healthcare management system designed to streamline patient care, operational workflows, appointments, and billing within hospitals and clinics.",
    category: "Full Stack",
    techStack: ["React", "Node.js", "MySQL", "Docker"],
    githubUrl: "https://github.com/Pawan-19012006/MedNexus",
    liveUrl: "#",
    status: "Completed",
    type: "Team Project",
    isFeatured: true,
    highlights: [
      "Dockerized local deployment",
      "Patient workflow management",
      "Appointment handling",
      "Billing systems",
      "AI assistant integration capability"
    ],
    architectureNotes: [
      {
        title: "Challenges Faced",
        content: "Handling complex relationships between patients, doctors, and appointments while ensuring data integrity. Implementing a robust authentication and role-based access control system for different hospital staff."
      },
      {
        title: "Architecture Decisions",
        content: "Chose a modular monolithic architecture with Node.js to keep deployment simple for smaller clinics, while structuring code by domain (billing, patient care) to allow easy microservice extraction later."
      },
      {
        title: "Scalability Considerations",
        content: "Implemented database indexing on heavily queried fields like patient IDs and appointment dates. Dockerized the entire stack to ensure consistent environments across dev, staging, and production."
      }
    ]
  },
  {
    id: "citil",
    title: "CITIL — Institutional Asset & Workflow Management",
    description: "A role-based institutional management platform built to optimize procurement, inventory tracking, and organizational workflows.",
    category: "Mobile",
    techStack: ["React Native", "Expo", "Backend APIs"],
    githubUrl: "#",
    liveUrl: "#",
    status: "In Progress",
    type: "Team Project",
    isFeatured: true,
    highlights: [
      "Multi-role architecture",
      "Mobile-first experience",
      "Workflow automation",
      "Procurement systems",
      "Asset tracking"
    ],
    architectureNotes: [
      {
        title: "Challenges Faced",
        content: "Ensuring smooth offline-first capabilities for asset tracking in areas with poor connectivity. Managing complex state transitions for the procurement approval workflows."
      },
      {
        title: "Architecture Decisions",
        content: "Utilized React Native with Expo for rapid cross-platform deployment. Implemented a centralized state management solution to handle complex workflow states synchronously."
      },
      {
        title: "What Was Learned",
        content: "Deepened understanding of mobile performance optimization, specifically around list rendering and image caching for large inventory datasets."
      }
    ]
  },
  {
    id: "devwatch",
    title: "DevWatch — Developer-Aware Linux Dashboard",
    description: "A GNOME Shell extension that transforms the Linux desktop into a real-time development monitoring workspace.",
    category: "Developer Tools",
    techStack: ["GJS", "Linux", "GNOME Shell", "JavaScript"],
    githubUrl: "https://github.com/Pawan-19012006/DevWatch",
    liveUrl: "#",
    status: "Completed",
    type: "Personal Project",
    isFeatured: true,
    highlights: [
      "Port tracking",
      "Build monitoring",
      "Active project awareness",
      "Linux desktop integration",
      "Developer workflow optimization"
    ],
    architectureNotes: [
      {
        title: "Challenges Faced",
        content: "Interfacing safely with Linux kernel APIs and system processes (netstat, lsof) without causing UI thread blocking in the GNOME shell."
      },
      {
        title: "Architecture Decisions",
        content: "Leveraged asynchronous child processes via GLib/GIO to offload heavy system polling. Designed a modular plugin system so different 'watchers' (port, build, git) can run independently."
      },
      {
        title: "System Design",
        content: "Built an event-driven architecture using GObject signals to keep the UI perfectly synchronized with background system state changes with minimal overhead."
      }
    ]
  },
  {
    id: "fintwitch",
    title: "FinTwitch",
    description: "A gamified personal finance platform combining learning, habit tracking, and finance simulations in an engaging experience.",
    category: "Full Stack",
    techStack: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/Pawan-19012006/FinTwitch",
    liveUrl: "https://fintwitch-fd0ea.web.app/",
    status: "Completed",
    type: "Personal Project",
    isFeatured: false
  },
  {
    id: "skilltrader",
    title: "SkillTrader",
    description: "A peer-to-peer platform facilitating the exchange of professional skills without currency exchange.",
    category: "Full Stack",
    techStack: ["React", "Express", "PostgreSQL"],
    githubUrl: "#",
    liveUrl: "#",
    status: "In Progress",
    type: "Personal Project",
    isFeatured: false
  },
  {
    id: "codecrypt",
    title: "CodeCrypt",
    description: "A lightweight, secure utility tool for encrypting sensitive developer environment variables and configurations.",
    category: "Developer Tools",
    techStack: ["Python", "Cryptography", "CLI"],
    githubUrl: "#",
    liveUrl: "#",
    status: "Experimental",
    type: "Personal Project",
    isFeatured: false
  }
];

export const PROJECT_CATEGORIES = [
  "All",
  "Full Stack",
  "Backend",
  "AI/ML",
  "Developer Tools",
  "Mobile",
  "System Design"
];
