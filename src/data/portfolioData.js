export const aboutData = {
  name: 'Mohamed Amr Fouad Abuewisha',
  title: 'Senior Front End Software Engineering',
  location: 'Egypt, Suez',
  email: 'mohamedabuewisha00@gmail.com',
  linkedin: {
    label: 'mohamed abuewisha',
    url: 'https://www.linkedin.com/in/mohamed-abuewisha',
  },
};

export const educationData = {
  degree: 'BSc in Computer Engineering System',
  university: 'Badr University of Cairo',
  period: 'Sep 2018 – Jul 2023',
  grade: 'Good',
  graduationProject: 'Excellent',
  logo: '/assets/buc-logo.png',
};

export const skillsData = [
  {
    title: 'Front End Developer',
    items: ['React', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery'],
  },
  {
    title: 'Back End Developer',
    items: ['.NET', 'SQL Server'],
  },
  {
    title: 'Wireframing & UI/UX',
    items: ['Figma'],
  },
  {
    title: 'Databases & Tools',
    items: ['MySQL', 'Git'],
  },
  {
    title: 'Management',
    items: ['Agile Methodologies', 'Scrum', 'SDLC/STLC'],
  },
  {
    title: 'Soft Skills',
    items: ['Analytical Skills', 'Communication', 'Time Management', 'Teamwork', 'Self-Learning'],
  },
];

export const experienceData = {
  company: 'SimpleWay for Digital Solution',
  role: 'Business Analyst & Software Engineer',
  period: '2023/10 – Present',
  positions: [
    {
      title: 'Business Analyst',
      period: '2023/10 – 2025/6',
      responsibilities: [
        'Stakeholder Engagement: Conducted elicitation planning and facilitated requirement elicitation through documentation analysis, workshops, and interviews.',
        'Service Inventory Collection: Compiled a comprehensive inventory of services, including details such as target audience, providers, SLAs, and more.',
        'Requirement Modeling: Created detailed models for "As-Is" and "To-Be" processes using BPMN v2 standards and tools like Visio and ARIS. This included process flows, procedure descriptions, business rules and validations, forms and templates, roles and responsibilities, and performance metrics.',
        'Process Optimization: Recommended process improvements and reengineering initiatives to enhance operational efficiency and achieve business goals.',
      ],
    },
    {
      title: 'Software Engineer',
      period: '2025/7 – Present',
      responsibilities: [
        'Develop software solutions using PHP, JavaScript, MySQL, HTML, CSS, Bootstrap, jQuery.',
        'Develop software solutions using React, SQL Server, HTML, CSS, JavaScript, Bootstrap, jQuery.',
        'We develop a responsive web page that works seamlessly on all devices.',
        'We integrate the web page with an API to handle data efficiently.',
        'We design the frontend interface using Figma.',
      ],
    },
  ],
};

export const projectsData = [
  {
    id: 'grc-product',
    title: 'GRC Product Development',
    startDate: '2025/7',
    endDate: 'Present',
    coverImage: '/assets/projects/grc-cover.png',
    images: [
      '/assets/projects/grc-1.png',
      '/assets/projects/grc-2.png',
      '/assets/projects/grc-3.png',
      '/assets/projects/grc-4.png',
      '/assets/projects/grc-5.png',
      '/assets/projects/grc-6.png',
      '/assets/projects/grc-7.png',
      '/assets/projects/grc-8.png',
      '/assets/projects/grc-9.png',
    ],
    responsibilities: [
      'Contributed to product roadmap creation, requirement analysis, database design, and development of the UI, backend, and APIs for a Governance, Risk, and Compliance (GRC) solution as part of a collaborative team.',
    ],
    tools: ['React', '.NET', 'SQL Server', 'Figma', 'Git'],
  },
  {
    id: 'buc-bpmn',
    title: 'Badr University in Cairo',
    startDate: '2024/6',
    endDate: '2025/6',
    coverImage: '/assets/projects/buc-cover.png',
    images: [
      '/assets/projects/buc-1.png',
      '/assets/projects/buc-2.png',
      '/assets/projects/buc-3.png',
      '/assets/projects/buc-4.png',
      '/assets/projects/buc-5.png',
      '/assets/projects/buc-6.png',
      '/assets/projects/buc-7.png',
      '/assets/projects/buc-8.png',
      '/assets/projects/buc-9.png',
      '/assets/projects/buc-10.png',
      '/assets/projects/buc-11.png',
      '/assets/projects/buc-12.png',
    ],
    departments: [
      'Financial Management',
      'Marketing Department',
      'Security Department',
      'Student Affairs Department',
      'Warehouse Management',
      'Procurement Department',
    ],
    responsibilities: [
      'Model business processes according to BPMN v2 standards using Visio to improve the efficiency of administrative functions.',
      'Documented services, operations, procedures, and policies for multiple university departments.',
      'Created organizational structures, workflow diagrams, roles & responsibilities, and approval authorities.',
      'Designed forms, communication templates, and work rules for each department.',
    ],
    tools: ['Visio', 'BPMN v2', 'Microsoft Excel', 'Microsoft Word'],
  },
  {
    id: 'goeic',
    title: 'General Organization for Export & Import Control',
    startDate: '2024/4',
    endDate: '2024/5',
    coverImage: '/assets/projects/goeic-cover.png',
    images: [
      '/assets/projects/goeic-1.png',
      '/assets/projects/goeic-2.png',
      '/assets/projects/goeic-3.png',
      '/assets/projects/goeic-4.png',
      '/assets/projects/goeic-5.png',
      '/assets/projects/goeic-6.png',
      '/assets/projects/goeic-7.png',
      '/assets/projects/goeic-8.png',
      '/assets/projects/goeic-9.png',
      '/assets/projects/goeic-10.png',
      '/assets/projects/goeic-11.png',
      '/assets/projects/goeic-12.png',
      '/assets/projects/goeic-13.png',
      '/assets/projects/goeic-14.png',
      '/assets/projects/goeic-15.png',
    ],
    services: [
      'Unit 43',
      'Training',
      'Employment',
    ],
    responsibilities: [
      'Analyze and document business processes using ARIS to improve workflow and enhance operational performance.',
      'Created stakeholder maps, business roles catalogues, and organizational charts using ArchiMate standards.',
      'Designed data object catalogues, attribute allocation diagrams, and business object indexes.',
      'Modeled value-added chain diagrams and collaborative BPMN workflows for training and certification services.',
      'Documented glossary of terms, process flows, and required supporting documents for importer registry services.',
    ],
    tools: ['ARIS', 'ArchiMate', 'BPMN v2', 'Visio', 'Microsoft Excel'],
  },
  {
    id: 'chemistry-admin',
    title: 'Chemistry Administration',
    startDate: '2024/1',
    endDate: '2024/2',
    coverImage: '/assets/projects/chemistry-cover.png',
    images: [
      '/assets/projects/chemistry-1.png',
      '/assets/projects/chemistry-2.png',
      '/assets/projects/chemistry-3.png',
      '/assets/projects/chemistry-4.png',
      '/assets/projects/chemistry-5.png',
      '/assets/projects/chemistry-6.png',
      '/assets/projects/chemistry-7.png',
      '/assets/projects/chemistry-8.png',
      '/assets/projects/chemistry-9.png',
      '/assets/projects/chemistry-10.png',
      '/assets/projects/chemistry-11.png',
      '/assets/projects/chemistry-12.png',
      '/assets/projects/chemistry-13.png',
      '/assets/projects/chemistry-14.png',
    ],
    services: [
      'Chemical Sample Analysis at the Central Laboratories Administration',
      'Sample Analysis - Internal Laboratories',
      'Sample Analysis - External Laboratories',
      'Sample Analysis - Inter-Laboratory Transfer',
    ],
    responsibilities: [
      'Analyze and document business processes using ARIS to improve workflow and enhance operational performance.',
      'Created stakeholder maps, business actors catalogues, and organizational charts for the Central Laboratories Administration.',
      'Designed business objects catalogues, value chain diagrams, and service models for sample analysis workflows.',
      'Modeled collaborative BPMN workflows for internal, external, and inter-laboratory sample analysis processes.',
      'Documented business rules, control factors, laws, regulations, and non-functional requirements.',
    ],
    tools: ['ARIS', 'ArchiMate', 'BPMN v2', 'Visio', 'Microsoft Excel'],
  },
];

export const navLinks = [
  { id: 'about', label: 'About Me' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Project Experience' },
];
