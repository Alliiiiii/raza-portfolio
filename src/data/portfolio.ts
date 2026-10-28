// Single source of truth. Edit here only. Everything below comes from the resume.
export const P = {
  name: "Raza Ali",
  role: "BSc IT student · Cybersecurity",
  location: "Hyderabad, Pakistan",
  email: "razaalilashari12@gmail.com",
  github: "https://github.com/Alliiiiii",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "", // set in .env.local
  resume: "/Raza_Ali_Resume.pdf",
  headline: "Engineering a more secure digital future.",
  intro: "IT student at the University of Sindh building secure systems, from Linux hardening to network threat detection.",
  about: [
    "I’m an IT student with a strong foundation in programming and a growing passion for cybersecurity. I enjoy writing clean, efficient code and exploring cyber defense techniques, with a working understanding of network security, ethical hacking and digital forensics.",
    "I learn quickly, solve problems methodically and keep up with new trends. My goal is a cybersecurity career protecting digital assets and systems.",
  ],
  skills: {
    Cybersecurity: ["Ethical Hacking", "Network Security", "Cryptography", "Digital Forensics", "System Hardening"],
    Programming: ["Python", "C++", "Java"],
    "Web & Databases": ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "SQL"],
    "Systems & Tools": ["Linux Administration", "Cloud Computing", "Git & GitHub", "Wireshark", "Nmap"],
  } as Record<string, string[]>,
  projects: [
    { title: "Cybersecurity Threat Detection Tool", dates: "Feb–Apr 2025", cat: "security", tags: ["Python", "Packet analysis"], repo: "",
      points: ["Python tool that monitors network traffic and flags suspicious activity.", "Basic anomaly detection using packet analysis and logging.", "Deepened understanding of security protocols and threat mitigation."] },
    { title: "Student Portal Web Application", dates: "Sep–Dec 2024", cat: "web", tags: ["PHP", "MySQL", "JavaScript"], repo: "",
      points: ["Full-stack app in HTML, CSS, JavaScript and PHP.", "MySQL database for student data and course registration.", "User authentication and role-based access control."] },
    { title: "Linux Server Hardening", dates: "Jun–Jul 2024", cat: "security", tags: ["Linux", "SSH", "Firewall"], repo: "",
      points: ["Disabled unused services and configured firewalls.", "Set up SSH key authentication.", "Documented the hardening procedure."] },
  ],
  education: { degree: "BSc Information Technology", school: "University of Sindh, Jamshoro", dates: "Jan 2024 – present" },
  certs: [
    "Foundations of Cybersecurity — Google (Jan 2025)", "Play It Safe: Manage Security Risks — Google (Jan 2025)",
    "Connect and Protect: Networks and Network Security — Google (Jan 2025)", "Tools of the Trade: Linux and SQL — Google (Feb 2025)",
    "People and Soft Skills Specialization — IBM (Feb 2025)", "AI For Everyone — DeepLearning.AI (Dec 2024)",
    "Build a Free Website with WordPress — Coursera Project Network (Apr 2025)", "Use WordPress to Create a Blog for Your Business — Coursera Project Network (Mar 2025)",
  ],
};
