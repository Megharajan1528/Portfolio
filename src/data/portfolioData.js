export const portfolioData = {
  personal: {
    name: "Megha Rajan",
    role: "Full Stack Web & Software Developer",
    statusBadge: "Open to Full-Time & Internship Opportunities",
    tagline: "Building scalable backend architectures, responsive web applications, and high-performance database solutions.",
    bio: "Computer Science & Engineering graduate (College of Engineering Trikaripur, 2021–2025) with specialized industry training in Java Full Stack development from KodNest Technologies and professional internship experience at Elevate Labs. Adept at building robust Spring Boot and Django backend services, intuitive React user interfaces, and optimizing SQL databases for high throughput.",
    contact: {
      phone: "7907474600",
      formattedPhone: "+91 7907474600",
      email: "megharajannair390@gmail.com",
      linkedin: "https://linkedin.com/in/megharajan15",
      github: "https://github.com/Megharajan1528",
      location: "Kerala / Bengaluru, India"
    }
  },

  skills: {
    categories: [
      {
        id: "languages",
        name: "Programming Languages",
        icon: "Code2",
        description: "Core languages for application logic, systems, and data manipulation",
        items: [
          { name: "Java", level: "Advanced", highlight: "Core & Enterprise, OOP" },
          { name: "Python", level: "Proficient", highlight: "Scripting, Django backend" },
          { name: "JavaScript", level: "Proficient", highlight: "ES6+, Async, DOM" },
          { name: "SQL", level: "Advanced", highlight: "Queries, Tuning & Indexing" }
        ]
      },
      {
        id: "frameworks",
        name: "Frameworks & Libraries",
        icon: "Layers",
        description: "Modern frameworks powering backend systems and client-side interfaces",
        items: [
          { name: "Spring Boot", level: "Advanced", highlight: "REST APIs, MVC, Microservices" },
          { name: "Django", level: "Proficient", highlight: "ORM, Routing, Admin" },
          { name: "React.js", level: "Proficient", highlight: "Hooks, SPA, Component Architecture" },
          { name: "Node.js", level: "Intermediate", highlight: "Runtime & Server-side JS" },
          { name: "Express.js", level: "Intermediate", highlight: "Lightweight API routing" }
        ]
      },
      {
        id: "databases",
        name: "Databases & Storage",
        icon: "Database",
        description: "Relational and NoSQL storage systems with query optimization",
        items: [
          { name: "MySQL", level: "Advanced", highlight: "Schema design, Indexing, Joins" },
          { name: "PostgreSQL", level: "Proficient", highlight: "Relational queries & transactions" },
          { name: "Oracle", level: "Proficient", highlight: "Enterprise SQL & procedures" },
          { name: "MongoDB", level: "Intermediate", highlight: "Document-oriented NoSQL" }
        ]
      },
      {
        id: "core",
        name: "Core Competencies & Practices",
        icon: "Cpu",
        description: "Software engineering fundamentals and quality assurance",
        items: [
          { name: "REST APIs", level: "Advanced", highlight: "Contract design, JSON, HTTP" },
          { name: "OOP (Object-Oriented)", level: "Advanced", highlight: "Inheritance, Polymorphism, SOLID" },
          { name: "DSA", level: "Proficient", highlight: "Data Structures & Algorithms" },
          { name: "Debugging", level: "Advanced", highlight: "Root-cause analysis, Profiling" },
          { name: "Manual Testing", level: "Proficient", highlight: "Test scenarios, Edge cases" },
          { name: "SDLC", level: "Proficient", highlight: "Agile, Sprint cycles, Best practices" }
        ]
      },
      {
        id: "tools",
        name: "Tools, OS & Cloud",
        icon: "Wrench",
        description: "Development environments, version control, and infrastructure fundamentals",
        items: [
          { name: "Git", level: "Proficient", highlight: "Branching, Merging, Rebase" },
          { name: "GitHub", level: "Proficient", highlight: "Collaboration, PR reviews" },
          { name: "Linux", level: "Proficient", highlight: "Bash, CLI, File permissions" },
          { name: "Windows", level: "Advanced", highlight: "System administration & Dev tools" },
          { name: "AWS Fundamentals", level: "Familiar", highlight: "Cloud computing concepts, EC2, S3" }
        ]
      }
    ]
  },

  projects: [
    {
      id: "sales-savvy",
      title: "Sales Savvy",
      category: "Full Stack Enterprise Application",
      headline: "Scalable E-Commerce Engine with Spring Boot & React",
      description: "An end-to-end full-stack e-commerce system engineered to handle high-concurrency product exploration, dynamic shopping cart operations, and streamlined order checkout pipelines.",
      technologies: ["Java", "Spring Boot", "React", "MySQL", "REST APIs"],
      features: [
        "Interactive Product Catalog: Dynamic product search, filtering, category exploration, and real-time inventory checks.",
        "Shopping Cart Pipeline: Persistent cart state handling addition, quantity updates, and synchronized subtotal computations.",
        "Secure Order Processing: Clean transactional order checkout flow managing customer records and order histories.",
        "API Integration & Optimization: Architected clean Spring Boot REST endpoints coupled with tailored React hooks and state management.",
        "SQL Query Optimization: Structured relational schemas with indexed primary/foreign keys to reduce database latency."
      ],
      metrics: [
        { label: "Architecture", value: "Decoupled REST" },
        { label: "Backend", value: "Java Spring Boot" },
        { label: "Frontend", value: "React SPA" },
        { label: "Database", value: "MySQL Optimized" }
      ],
      repositoryStatus: {
        isAvailable: false,
        message: "Code repository & live deployment demo currently being prepared for release. Available upon direct inquiry.",
        githubUrl: null,
        liveUrl: null
      }
    },
    {
      id: "mealpro",
      title: "MealPro",
      category: "Backend & Database Engineering",
      headline: "Nutritional Planning & Recipe Management Platform",
      description: "A robust dietary planning platform built with Python and Django, designed to manage high-volume recipe data, nutritional metrics, and customized meal planning schedules.",
      technologies: ["Python", "Django", "MySQL"],
      features: [
        "Modular Django Architecture: Structured models and services governing dietary guidelines, recipe ingredients, and meal schedules.",
        "Database SQL Tuning: Tuned complex multi-table SQL queries, reducing redundant joins and memory footprints.",
        "Index Architecture: Implemented targeted indexes on frequently searched recipe attributes to accelerate query lookup times.",
        "Data-Access Debugging: Systematically identified and resolved data-access bottlenecks and edge-case transaction anomalies.",
        "RESTful Services: Designed reliable API endpoints to feed meal plans and nutritional summaries to downstream clients."
      ],
      metrics: [
        { label: "Framework", value: "Python Django" },
        { label: "Performance", value: "Indexed SQL" },
        { label: "Focus", value: "Backend Logic" },
        { label: "Database", value: "MySQL Relational" }
      ],
      repositoryStatus: {
        isAvailable: false,
        message: "Code repository & live deployment demo currently being prepared for release. Available upon direct inquiry.",
        githubUrl: null,
        liveUrl: null
      }
    }
  ],

  experience: [
    {
      id: "elevate-labs",
      type: "Internship",
      role: "Java Developer Intern & Web Development Intern",
      organization: "Elevate Labs",
      period: "Nov 2025 – Dec 2025",
      badge: "Industry Internship",
      description: "Contributed as both a Java Developer Intern and Web Development Intern, actively engineering software components and refining web-based applications.",
      points: [
        "Developed and maintained modular application features utilizing Java and modern web development standards.",
        "Integrated frontend interfaces with backend services, participating in functional testing and debugging sessions.",
        "Collaborated within cross-functional teams adhering to structured SDLC and agile development cycles.",
        "Wrote clean, maintainable code following object-oriented design principles and version control standards in Git/GitHub."
      ],
      skillsUsed: ["Java", "Web Development", "REST APIs", "Debugging", "SDLC", "Git"]
    },
    {
      id: "kodnest-technologies",
      type: "Professional Training",
      role: "Certified Full Stack Development Program",
      organization: "KodNest Technologies",
      location: "Bengaluru, Karnataka",
      period: "Jun 2025 – Feb 2026",
      badge: "Full Stack Certification",
      description: "Underwent intensive, corporate-aligned full stack software engineering training focused on enterprise software craftsmanship and algorithmic problem solving.",
      points: [
        "Mastered full stack web technologies including Java, Spring Boot, React.js, and SQL database engineering.",
        "Gained deep hands-on expertise in REST API creation, database normalization, indexing, and end-to-end integration.",
        "Practiced algorithmic problem-solving with Data Structures & Algorithms (DSA) and Object-Oriented Programming (OOP).",
        "Conducted manual testing suites, bug identification, log inspection, and data-access debugging across real-world problem sets."
      ],
      skillsUsed: ["Java", "Spring Boot", "React.js", "SQL", "DSA", "OOP", "Manual Testing"]
    }
  ],

  education: [
    {
      id: "btech-cse",
      degree: "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
      institution: "College of Engineering Trikaripur",
      period: "2021 – 2025",
      score: "CGPA: 7.09",
      scoreType: "CGPA",
      scoreValue: "7.09 / 10",
      description: "Comprehensive 4-year undergraduate degree in Computer Science & Engineering covering computer systems, software architecture, algorithm design, and database systems.",
      highlights: [
        "Data Structures & Algorithms",
        "Database Management Systems (DBMS)",
        "Operating Systems & Linux",
        "Computer Networks",
        "Object-Oriented Programming",
        "Software Engineering & SDLC"
      ]
    },
    {
      id: "higher-secondary",
      degree: "Higher Secondary Education",
      institution: "Durga Higher Secondary School",
      period: "2019 – 2021",
      score: "90.6%",
      scoreType: "Percentage",
      scoreValue: "90.6%",
      description: "Completed higher secondary education with distinction, building a solid analytical foundation in mathematics, science, and computer science concepts.",
      highlights: [
        "Scored 90.6% aggregate",
        "Strong foundation in Mathematics and Problem Solving",
        "Foundational Computing Principles"
      ]
    }
  ]
};
