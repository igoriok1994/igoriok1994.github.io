export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  github: string;
  linkedin?: string;
  telegram?: string;
}

export interface Metric {
  value: string;
  label: string;
  description: string;
}

export interface ExperienceRole {
  role: string;
  period: string;
  responsibilities: string[];
}

export interface CompanyExperience {
  company: string;
  period: string;
  location: string;
  roles: ExperienceRole[];
}

export interface Project {
  id: string;
  title: string;
  period: string;
  category: 'AI & LLM' | 'Mobile' | 'High-Load & Web' | 'Enterprise';
  tags: string[];
  description: string;
  bullets: string[];
  link?: string;
}

export interface SkillGroup {
  name: string;
  iconName: string;
  skills: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
}

export interface LanguageItem {
  language: string;
  proficiency: string;
}

export const cvData = {
  personal: {
    name: "Igor Vilghelm",
    title: "Senior Full-Stack Developer / Team Lead",
    location: "Vilnius, Lithuania",
    avatarUrl: "/avatar.jpg",
    pdfUrl: "/cv.pdf",
    contacts: {
      phone: "+37060636962",
      email: "igoriok19944@gmail.com",
      location: "Vilnius, Lithuania",
      github: "https://github.com/igoriok1994",
      linkedin: "https://www.linkedin.com/in/igor-vilghem-8ab819139/",
      telegram: "https://t.me/ccg007agent",
    } as ContactInfo,
    about: {
      summary: "Senior Full-Stack Developer with 10+ years of experience building large-scale web systems for energy metering and data processing.",
      details: [
        "Experienced in system architecture, data visualization, cloud deployment, and CI/CD automation. Led development of complex SCADA-like interfaces and backend systems working with high-volume relational databases and complex data models.",
        "Strong focus on performance, clean architecture, and scalable systems.",
        "Proven leadership background directing technical decisions, mentoring engineering talent, and coordinating across cross-functional infrastructure and database teams."
      ]
    }
  },

  metrics: [
    {
      value: "10+ Years",
      label: "Enterprise Experience",
      description: "Architecting, developing & maintaining high-load web systems. In IT since 2016."
    },
    {
      value: "1M+",
      label: "Metering Devices",
      description: "Real-time automated data processing and monitoring platform."
    },
    {
      value: "Per-Second",
      label: "Aggregation Scale",
      description: "Time-series data engine from per-second to monthly resolutions."
    },
    {
      value: "Multi-Region",
      label: "Deployments",
      description: "National-scale systems across Lithuania, Latvia & Central Asia."
    }
  ] as Metric[],

  achievements: [
    "Delivered and deployed energy management systems across multiple regions, including Lithuania and Latvia at different operational levels, as well as national-scale implementations in Central Asia.",
    "Built and scaled a high-load platform processing data from 1M+ metering devices and millions of data points.",
    "Engineered a time-series data system supporting per-second to monthly aggregation levels.",
    "Delivered high-performance data visualization (grids, charts, SCADA-like UI), ensuring smooth UX with large-scale datasets.",
    "Led the architecture and development of a SCADA-like real-time system for energy data visualization and processing.",
    "Built and scaled a high-load data processing system handling large volumes of metering and IoT data.",
    "Designed and implemented a reusable frontend architecture (React + Redux), improving development consistency and scalability.",
    "Optimized database queries and backend performance for complex Oracle and MariaDB systems.",
    "Established CI/CD pipelines using Jenkins, improving development and deployment workflows.",
    "Developed a mobile application (React Native) with offline-first capabilities for field engineers.",
    "Designed and implemented a backend service for AI-powered data querying within the energy management system.",
    "Implemented and integrated an AI Assistant interface into the enterprise web frontend, providing automated contextual data summaries, event analysis, and operational recommendations.",
    "Engineered ML-based anomaly detection and time-series forecasting for metering archives, paired with automated LLM summaries of detected anomalies."
  ],

  experience: [
    {
      company: "UAB Sigma Telas",
      period: "2016 – Present",
      location: "Vilnius, Lithuania",
      roles: [
        {
          role: "Team Lead & Full Stack Developer",
          period: "2024 – Present",
          responsibilities: [
            "Assign tasks to team members and manage workload distribution",
            "Review code and deliverables to ensure quality and consistency",
            "Support team members in solving technical challenges and blockers",
            "Coordinate with cross-functional teams (e.g., DevOps, DB) when needed",
            "Monitor progress and ensure timely delivery of features and tasks",
            "Participate in technical decision-making and architecture discussions",
            "Improve team processes and development workflows",
            "Actively contribute to the codebase (backend & frontend development)"
          ]
        },
        {
          role: "Full Stack Developer",
          period: "2016 – 2024",
          responsibilities: [
            "Worked in multiple projects across different domains and business areas",
            "Designed and developed applications from scratch, including architecture and core systems",
            "Delivered end-to-end features from concept to production",
            "Improved application performance and reliability through optimizations, bug fixing, and refactoring",
            "Implemented features based on business and client requirements",
            "Maintained and improved existing codebase",
            "Built and integrated backend services and APIs",
            "Developed responsive and user-friendly frontend interfaces",
            "Set up and maintained CI/CD pipelines to streamline development and deployment",
            "Ensured code quality through testing, code reviews, and best practices"
          ]
        }
      ]
    }
  ] as CompanyExperience[],

  projects: [
    {
      id: "ai-assistant",
      title: "AI Assistant Backend Service for Web Application",
      link: "https://www.sigmatelas.lt/en/emcos-corporate",
      period: "2026 – Present",
      category: "AI & LLM",
      tags: ["Node.js", "Fastify", "Ollama", "LM Studio", "LLM", "REST API", "Microservices"],
      description: "Backend service powering an intelligent assistant for the Web Energy Management System with local/hosted LLM integration.",
      bullets: [
        "Developed a backend service using Node.js (Fastify) to power an AI assistant for the Web Energy Management System, enabling users to analyze system events and receive actionable recommendations via a dedicated 'Ask AI' interface.",
        "Integrated LLM-based solutions (Ollama / LM Studio) to provide contextual explanations of system behavior and assist in decision-making.",
        "Designed scalable APIs and integrated AI capabilities into the existing system architecture."
      ]
    },
    {
      id: "mobile-energy",
      title: "Mobile Energy Management System",
      link: "https://www.sigmatelas.lt/en/emcos-corporate",
      period: "2025 – Present",
      category: "Mobile",
      tags: ["React Native", "Expo", "TypeScript", "Offline-First", "Mobile UX", "REST API"],
      description: "Field engineer cross-platform mobile solution for real-time monitoring and offline data access.",
      bullets: [
        "Designed and developed a mobile energy management application using React Native (Expo) for field engineers, enabling real-time monitoring and data access on the go.",
        "Focused on performance optimization, offline-first capabilities, and seamless integration with existing backend services."
      ]
    },
    {
      id: "web-energy-maintenance",
      title: "Web Energy Management System – Maintenance & Evolution",
      link: "https://www.sigmatelas.lt/en/emcos-corporate",
      period: "2020 – Present",
      category: "High-Load & Web",
      tags: ["High-Load", "Oracle", "MariaDB", "Relational DBs", "Performance Tuning"],
      description: "Ensuring high availability, resilience, and horizontal scaling of 24/7 mission-critical energy management infrastructure.",
      bullets: [
        "Maintained and evolved a high-load energy management system, ensuring scalability, performance, and reliability in production environments.",
        "Worked with high-volume relational databases and complex data models."
      ]
    },
    {
      id: "web-energy-development",
      title: "Web Energy Management System – Architecture & Development",
      link: "https://www.sigmatelas.lt/en/emcos-corporate",
      period: "2017 – Present",
      category: "Enterprise",
      tags: ["React", "Redux", "SCADA SVG", "REST APIs", "Oracle", "MariaDB", "Jenkins", "IoT", "Big Data", "SSO"],
      description: "Flagship smart metering & automated commercial energy accounting platform with real-time SCADA scheme viewer.",
      bullets: [
        "Led the design and development of a smart metering system for automated commercial energy accounting.",
        "Designed and implemented system architecture (frontend & backend), including reusable component libraries and scalable module structure.",
        "Built a custom component system using React and Redux, enabling consistent UI development across the application.",
        "Developed and maintained backend endpoints for communication with Oracle and MariaDB databases and data acquisition systems (REST APIs).",
        "Implemented real-time data visualization, including SCADA-like SVG-based interactive scheme viewer & editor with live data binding.",
        "Worked with large-scale data processing, including Big Data and IoT integrations, data analysis, and data visualization pipelines.",
        "Optimized application performance and query execution, including analysis and tuning of complex database queries, procedures, and functions.",
        "Integrated and adapted third-party npm components (charts, grids) to meet specific business requirements.",
        "Set up and maintained CI/CD pipelines using Jenkins, including custom automation workflows.",
        "Contributed to cloud adaptation, SSO integration, and infrastructure improvements.",
        "Provided technical guidance to team members and participated in architecture decisions."
      ]
    },
    {
      id: "legacy-support",
      title: "Legacy Web Application Support & Migration",
      link: "https://www.sigmatelas.lt/en/emcos-corporate",
      period: "2016 – 2018",
      category: "High-Load & Web",
      tags: ["ASP 2.0", "Flash ActionScript 2", "Refactoring", "New features", "Performance", "Legacy Migration", "Troubleshooting"],
      description: "Support and progressive modernization of legacy web systems ensuring business continuity.",
      bullets: [
        "Maintained and supported a legacy web application, ensuring system stability and resolving production issues.",
        "Worked on bug fixing, performance improvements, and gradual refactoring of legacy codebase."
      ]
    }
  ] as Project[],

  skillGroups: [
    {
      name: "Core & Frontend",
      iconName: "Layout",
      skills: [
        "JavaScript (ES6+)",
        "TypeScript",
        "React",
        "React Native (Expo)",
        "Redux / State Management",
        "SVG-based SCADA Visualizations",
        "Responsive & User-Friendly UI",
        "HTML5 / CSS3 / Tailwind"
      ]
    },
    {
      name: "Backend & Architecture",
      iconName: "Server",
      skills: [
        "Node.js (Fastify)",
        "PHP (Phalcon 5, modern & legacy)",
        "REST API Architecture",
        "High-Load Systems",
        "Real-Time Data Processing",
        "Clean Architecture & Modular Design",
        "LLM & AI Integration (Ollama, LM Studio)"
      ]
    },
    {
      name: "Databases & Data Processing",
      iconName: "Database",
      skills: [
        "Oracle",
        "MariaDB",
        "PostgreSQL",
        "Complex Query Optimization",
        "Stored Procedures & Functions",
        "Time-Series Data Modeling",
        "Big Data & IoT Pipelines"
      ]
    },
    {
      name: "DevOps & Infrastructure",
      iconName: "Cpu",
      skills: [
        "Jenkins CI/CD Automation",
        "Nginx / Apache / IIS",
        "Cloud Computing & Adaptation",
        "SSO (Single Sign-On) Integration",
        "Git Workflows",
        "Production Monitoring & Troubleshooting"
      ]
    },
    {
      name: "Engineering Leadership",
      iconName: "Users",
      skills: [
        "Team Leadership & Workload Distribution",
        "Code Reviews & Standards Enforcement",
        "Technical Mentorship & Blocker Resolution",
        "Cross-Functional Team Coordination",
        "Architecture & Technical Decision-Making",
        "Agile / Workflow Process Optimization"
      ]
    }
  ] as SkillGroup[],

  education: [
    {
      institution: "Vilnius University",
      degree: "Master's degree in Computer Modeling",
      period: "2019 – 2021"
    },
    {
      institution: "Vilnius University",
      degree: "Additional studies",
      period: "2018 – 2019"
    },
    {
      institution: "Vilniaus Kolegija",
      degree: "Bachelor's degree, Information systems engineer",
      period: "2014 – 2017"
    }
  ] as EducationItem[],

  languages: [
    {
      language: "Lithuanian",
      proficiency: "Fluent / Professional"
    },
    {
      language: "English",
      proficiency: "Professional Working Proficiency"
    },
    {
      language: "Russian",
      proficiency: "Native / Bilingual"
    }
  ] as LanguageItem[],

  navLinks: [
    { href: "/", label: "About Me" },
    { href: "/cv", label: "Full CV" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ]
};
