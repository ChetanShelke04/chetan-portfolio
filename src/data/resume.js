export const resumeData = {
  personalInfo: {
    name: "CHETAN SHELKE",
    title: "Java Backend Developer",
    location: "Pune, Maharashtra",
    phone: "+91-8087635721",
    email: "chetans1681@gmail.com",
    linkedin: "https://linkedin.com/in/chetan-shelke",
    // CONFIRM: Confirm if this is your desired public GitHub link
    github: "https://github.com/ChetanShelke04",
    bio: "Java Backend Developer with 4 years of experience building secure, scalable backend services using Java, Spring Boot, Spring Data JPA, Hibernate and REST APIs across healthcare and BFSI domains. Currently developing an AI-powered medical report analysis platform using Spring AI, Kafka for event-driven processing, Redis for caching and JWT token management, and AWS S3 for document storage. Previously built microservices-based loan and credit-assessment systems on MySQL and integrated the Experian credit bureau API. Skilled in API design, exception handling and database optimization, with experience in Agile teams."
  },

  skills: {
    "Languages": ["Java (Core Java, Java 8)", "SQL", "HTML", "CSS", "JavaScript", "React.js"],
    "Backend Frameworks": ["Spring Framework", "Spring Boot", "Spring MVC", "Spring Security", "Spring AI"],
    "APIs & Architecture": ["REST APIs", "Microservices", "Event-Driven Architecture", "Webhooks", "JWT Authentication", "Load Balancer"],
    "ORM & Persistence": ["Spring Data JPA", "Hibernate"],
    "Databases, Messaging & Cloud": ["MySQL", "PostgreSQL", "Redis", "Apache Kafka", "AWS (S3)"],
    "Testing": ["JUnit"],
    "Build, Version Control & DevOps": ["Git", "GitHub", "Maven", "Docker", "CI/CD"],
    "Tools & IDEs": ["Postman", "STS", "Eclipse", "IntelliJ IDEA", "Lombok"],
    "Core Concepts": ["OOP", "Collections Framework", "Exception Handling", "Multithreading", "Agile"]
  },

  experience: [
    {
      role: "Software Engineer",
      company: "DMH & Research Centre",
      location: "Pune",
      period: "Oct 2025 – Present",
      // CONFIRM: Resume states start date Oct 2025 – Present (confirm timeline accuracy)
      highlights: [
        "Design and develop secure, scalable backend services for healthcare applications using Java and Spring Boot, ensuring data security, compliance and reliability.",
        "Built an AI-powered Medical Report Analyzer that generates automated insights from patient reports.",
        "Implemented event-driven architecture with Apache Kafka to improve system responsiveness and throughput.",
        "Reduced API latency using Redis caching and token management.",
        "Integrated AWS S3 for secure, scalable storage of medical documents.",
        "Collaborated with doctors and system administrators to deliver reliable healthcare solutions."
      ]
    },
    {
      role: "Java Backend Developer",
      company: "Vibhuprada Services Private Limited",
      location: "Pune",
      period: "Dec 2022 – Jun 2025",
      highlights: [
        "Developed scalable, secure backend systems using Java, Spring Boot and a microservices architecture.",
        "Designed and consumed REST APIs with request validation, exception handling and logging.",
        "Used MySQL with Spring Data JPA for efficient CRUD operations and reliable relational data management.",
        "Integrated the Experian Credit Bureau API for loan eligibility and credit risk checks (BFSI domain).",
        "Worked in Agile teams using Git, Postman, STS, Eclipse and IntelliJ; contributed to performance improvements, clean code practices and cross-team collaboration."
      ]
    }
  ],

  projects: [
    {
      title: "AI Medical Report Analyzer",
      technologies: ["Java", "Spring Boot", "Microservices", "Spring AI", "Kafka", "Redis", "PostgreSQL", "AWS S3", "Docker"],
      category: "Healthcare / AI",
      highlights: [
        "Built a production-grade AI system that simplifies complex medical reports, with OCR-based extraction from PDFs and images and AI-based summarization.",
        "Designed an event-driven architecture on Kafka for scalable asynchronous processing, with retry mechanisms for fault tolerance.",
        "Developed secure APIs with JWT authentication and Redis-based token blacklisting; adopted a database-per-service design for scalability and loose coupling.",
        "Stored documents in AWS S3 and containerized services with Docker for deployment readiness."
      ]
    },
    {
      title: "Loan Eligibility Web Application",
      technologies: ["Java", "Spring Boot", "Microservices", "REST APIs", "Hibernate", "MySQL", "JUnit"],
      category: "BFSI / Fintech",
      highlights: [
        "Developed a Spring Boot backend that calculates loan eligibility from credit and financial data, structured as independent microservices (User Service, Loan Service), each with its own codebase, REST APIs and database for modular deployment and scaling.",
        "Implemented REST APIs for user data, eligibility rules and scoring logic with input validation and exception handling; persisted records using Hibernate with MySQL.",
        "Wrote JUnit test cases to verify business logic and reduce defects."
      ]
    }
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Indira Gandhi National Open University (IGNOU), Pune",
      period: "2022 – 2024"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Bharati Vidyapeeth University, Karad",
      period: "2019 – 2022"
    }
  ]
};

export default resumeData;
