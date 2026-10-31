// Central data file for portfolio content
export const siteData = {
  name: "K H Nabeel",
  shortName: "Nabeel",
  title: "UI/UX Designer & Frontend Developer",
  tagline: "I design and build experiences that people love.",
  bio: "I'm a passionate 3rd-year B.Tech Computer Science student at NSS College of Engineering, Malappuram, Kerala. With 2+ years of hands-on experience in UI/UX design and frontend development, I transform ideas into user-centric digital solutions that resonate and inspire. I love working at the intersection of design and technology.",
  location: "Malappuram, Kerala, India",
  email: "nabeelnob100@gmail.com",
  phone: "+91 9074787664",
  college: "NSS College of Engineering, Malappuram",
  degree: "B.Tech Computer Science & Engineering",
  year: "3rd Year (2024–2028)",
  stats: [
    { value: "2+", label: "Years Experience" },
    { value: "10+", label: "Projects Completed" },
    { value: "4+", label: "Communities" },
    { value: "100%", label: "Passion" },
  ],
  social: {
    github: "https://github.com/kh-nabeel",
    linkedin: "https://www.linkedin.com/in/k-h-nabeel-2b74b7316",
    behance: "https://www.behance.net/khnabeel",
    dribbble: "https://www.behance.net/khnabeel",
  },
  communities: ["ISTE", "TinkerHub", "STACS", "µLearn", "IEDC"],
  skills: {
    design: ["Figma", "Affinity Designer", "Canva", "UI/UX Design", "Wireframing", "Prototyping"],
    development: ["HTML5", "CSS3", "JavaScript", "Python", "C", "Java", "MySQL", "GitHub"],
  },
  designProjects: [
    {
      id: "kav-website",
      title: "Kottakkal Arya Vaidya Sala",
      subtitle: "Clone Website Design",
      category: "UI/UX Design",
      description:
        "A comprehensive website redesign for Kerala's renowned Ayurvedic institution, blending traditional aesthetics with modern UX patterns. Focused on improved navigation, accessibility, and brand consistency.",
      tags: ["Figma", "UI/UX", "Web Design", "Ayurveda"],
      link: "https://www.figma.com/proto/oGetkRWOl8dTROAAt1J5AI?node-id=0-1&t=82qlzRMGFxdWqtCa-6",
      color: "#4CAF50",
    },
    {
      id: "kav-app",
      title: "Kottakkal Arya Vaidya Sala",
      subtitle: "Clone App Design",
      category: "UI/UX Design",
      description:
        "Mobile app design for the Kottakkal Arya Vaidya Sala, featuring appointment booking, product catalog, and Ayurvedic wellness information in an intuitive mobile interface.",
      tags: ["Figma", "Mobile UI", "App Design"],
      link: "https://www.figma.com/proto/oGetkRWOl8dTROAAt1J5AI?node-id=2710-7&t=82qlzRMGFxdWqtCa-6",
      color: "#8BC34A",
    },
    {
      id: "student-planner",
      title: "Student Planner",
      subtitle: "Mobile App Design",
      category: "UI/UX Design",
      description:
        "A productivity-focused student planner app designed in Figma. Features task management, schedule visualization, deadline tracking, and a clean, motivating interface for students.",
      tags: ["Figma", "Mobile App", "Productivity"],
      link: "https://www.figma.com/design/4LHXaqEu1T5aUBn0dlwjVL/STUDENT-PLANNER?m=auto&t=9WmMmcWAB5WknrZE-6",
      color: "#2196F3",
    },
    {
      id: "portfolio-design",
      title: "Portfolio Design",
      subtitle: "Personal Design Project",
      category: "UI/UX Design",
      description:
        "My personal portfolio design concept created in Figma, experimenting with modern layouts, typography, and motion design principles to create an engaging personal brand.",
      tags: ["Figma", "Portfolio", "Branding"],
      link: "https://www.figma.com/design/dVa3yp2Rf32FUNsVk7y6k3/Portfolio?m=auto&t=B5Uafv3vBTco6fII-6",
      color: "#9C27B0",
    },
  ],
  devProjects: [
    {
      id: "expense-tracker",
      title: "Expense Tracker",
      subtitle: "Web Application",
      category: "Frontend Dev",
      description:
        "A fully functional expense tracking web app with real-time balance calculation, income/expense categorization, transaction history, and local storage persistence for data retention across sessions.",
      tags: ["HTML", "CSS", "JavaScript", "Local Storage"],
      link: "https://github.com/kh-nabeel/ExpenseTracker",
      color: "#FF5722",
    },
    {
      id: "stadiumsense",
      title: "StadiumSense",
      subtitle: "Computer Vision & ML",
      category: "Python / ML",
      description:
        "Smart stadium crowd management and analytics system using computer vision and machine learning for real-time occupancy detection, crowd density analysis, and safety monitoring.",
      tags: ["Python", "Computer Vision", "ML", "OpenCV"],
      link: "https://github.com/kh-nabeel/StadiumSense",
      color: "#3F51B5",
    },
    {
      id: "voteguide",
      title: "VoteGuide India",
      subtitle: "Civic Tech Web App",
      category: "Frontend Dev",
      description:
        "An accessible voter information and election guidance platform for Indian citizens, simplifying complex electoral processes through clean UX and organized information architecture.",
      tags: ["HTML", "CSS", "JavaScript", "Civic Tech"],
      link: "https://github.com/kh-nabeel/Voteguide-india",
      color: "#FF9800",
    },
    {
      id: "qr-quest",
      title: "QR Quest",
      subtitle: "Useless Projects Hackathon",
      category: "Creative Dev",
      description:
        "A QR code treasure hunt game built for TinkerHub's legendary Useless Projects hackathon. Players scan QR codes to navigate through clues in a gamified scavenger hunt experience.",
      tags: ["JavaScript", "QR Code", "Game", "Hackathon"],
      link: "https://github.com/kh-nabeel/useless_project_singularity",
      color: "#009688",
    },
    {
      id: "legal-ai",
      title: "AI for Legal Assistance",
      subtitle: "PromptWars Virtual Hackathon",
      category: "AI / Python",
      description:
        "An AI-powered legal assistance tool to democratize access to legal information for underserved communities. Built with NLP and prompt engineering during the PromptWars Virtual hackathon.",
      tags: ["Python", "NLP", "AI", "Prompt Engineering"],
      link: "https://github.com/kh-nabeel/PromptWars-Virtual---AI-for-Legal-Assistance-Access",
      color: "#607D8B",
    },
    {
      id: "agriml",
      title: "AgriML",
      subtitle: "Machine Learning Project",
      category: "Python / ML",
      description:
        "A machine learning project for agricultural predictions to assist farmers with data-driven decisions on crop management, yield forecasting, and resource optimization.",
      tags: ["Python", "Scikit-learn", "ML", "Agriculture"],
      link: "https://github.com/kh-nabeel/ML-Project---AgriML",
      color: "#4CAF50",
    },
  ],
  experience: [
    {
      role: "Creative Designer",
      org: "IEDC",
      orgFull: "Innovation & Entrepreneurship Development Cell",
      period: "Feb 2026 – Present",
      type: "Ongoing",
      description:
        "Designing promotional materials, social media creatives, and event graphics for IEDC activities. Maintaining consistent visual branding across all IEDC communications.",
    },
    {
      role: "Creative Designer",
      org: "TinkerHub",
      orgFull: "TinkerHub Campus Chapter",
      period: "Aug 2025 – Present",
      type: "Ongoing",
      description:
        "Designing social media handles, event posters, and branding creatives for TinkerHub campus community. Received highly positive feedback for visually compelling designs.",
    },
    {
      role: "Creative Designer",
      org: "ISTE",
      orgFull: "Indian Society for Technical Education",
      period: "Feb 2025 – Aug 2025",
      type: "Completed",
      description:
        "Created design assets for ISTE chapter events, technical workshops, and awareness campaigns. Worked on visual identity materials.",
    },
    {
      role: "Creative Designer",
      org: "STACS",
      orgFull: "Student Association of Computer Science",
      period: "Nov 2024 – Feb 2025",
      type: "Completed",
      description:
        "Designed promotional materials and event graphics for STACS department events, fests, and inter-departmental competitions.",
    },
  ],
  testimonials: [
    {
      text: "Worked on creative poster designs for TinkerHub's social media handles, creating aesthetic and engaging visuals aligned with the brand's tone. The outreach response was highly positive, and the designs were appreciated for their creativity and visual appeal.",
      name: "Anaswara Saigramachi",
      role: "Content Lead at TinkerHub NSSCE",
      avatar: "/testimonial-avatar.jpg",
    },
  ],
};

