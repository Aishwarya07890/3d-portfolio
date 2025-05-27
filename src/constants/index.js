const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 9, suffix: "+", label: "Months of Experience" },
  { value: 2, suffix: "", label: "capstone projects" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Success Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-5.png",

  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-12.png",

  },
  {
    imgPath: "/images/logos/company-logo-13.png",

  },
  {
    imgPath: "/images/logos/company-logo-14.png",
  },
  {
    imgPath: "/images/logos/company-logo-15.png",
  },
  {
    imgPath: "/images/logos/company-logo-16.png",
  },
  {
    imgPath: "/images/logos/company-logo-17.png",
  },
  {
    imgPath: "/images/logos/company-logo-18.png",
  },
  {
    imgPath: "/images/logos/company-logo-19.png",
  },
  {
    imgPath: "/images/logos/company-logo-21.png",
  },

];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "As a computer science graduate from VIT, I prioritize clean, efficient, and scalable code. My projects adhere to industry best practices",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "team syncs to tackle challenges head-on, using tools like github to ensure transparency. By maintaining a shared progress and encouraging open problem-solving, we turned potential bottlenecks into collaborative wins",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time completion",
    desc: "Making sure projects are completed on schedule, Deadlines matter. For a smart IoT project, my team shipped it 2 weeks early by splitting tasks. I respect time—no last-minute surprises.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "ReactJS",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "JAVA",
    modelPath: "/models/java.compressed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Java Script",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Development",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name:"Database",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Everything went very smoothly in the process of transferring two web urls over to Hostinger. The process was slowed on the other side, previous holder. If I had ANY question about the process, Hostinger's fabulous AI helped me out. We became instant friends",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
     title: "Full Stack Development Project",
    date: "January 2025 - April 2025",
    responsibilities: [
      "PRODUCTION-GRADE UNIVERSITY LIBRARY MANAGEMENT SYSTEM ",
      "Developed and maintained user-facing features for the Hostinger website.",
      "Optimized performance with rate-limiting, DDoS protection, and Redis caching, resulting in 50% faster",
      "Reduced manual effort by 25% by automating email notifications.",
      "Enhanced user experience with a responsive design using Next.js, achieving a 30% improvement in user retention.",
    ],
  },
  {
    review:"A must have for any frontend developer. With CodePen, you can quickly create concepts for your projects and practice your skills. You can even use frameworks like React and tools like Pug and Sass. The community is also great, you'll always get inspired by the crazy things people do with just CSS!",
    imgPath: "/images/exp4.png",
    logoPath: "/images/logo4.png",
    title:"Frontend Development Project",
    date: "January 2025 - January 2025",
    responsibilities: [
        "KEYBOARD HERO",
      "Built a keypress training tool aimed at improving user reflexes and concentration.",
      "Incorporated a 51-key layout of interactive user interface",
      "Organized into multiple categories, and tested focus and response times through a variety of keys.",
    ],
  },
  {
    review: "Vercel really shines when it comes to security and performance. Their hosting infrastructure is very reliable, which gives me peace of mind for my projects. The best part? You get all of these in very afforable pricing. The Free Plan is really a life-saver.",
    imgPath: "/images/exp5.png",
    logoPath: "/images/logo5.png",
    title: "React Project",
    date: "November 2024 - December2024",
    responsibilities: [
        "PATHFINDING VISUALIZATION TOOL",
      "The primary objective of this project is to create an interactive, web-based tool",
      "To visually demonstrate Dijkstra's algorithm for finding the shortest path in a graph or grid. ",
      "Refined comprehension of shortest path logic, providing visual insights for 60+ students to understand pathfinding.",
    ],
  },
  {
    review: "One of the best part is Open source, Handle large datasets, strong security, easy to use and most important community support. Also It provide advance features like: support complex qeries, Custom functions",
    imgPath: "/images/exp8.png",
    logoPath: "/images/logo6.png",
    title: "Data Analysis Project",
    date: "August 2024 - September 2024",
    responsibilities: [
      "ADVANCE SQL PROJECT : SPOTIFY DATA ANALYSIS",
      "Performed data analysis on 20,000+ records using complex SQL queries,",
      "extracting insights to enhance playlist performance and music trend forecasting.",
      "Devised a real-time analytics to evaluate playlist performance metrics, enabling rapid adjustments to user preferences",
    ],
  },
  {
    review: "Setting up Github for new projects is effortless and straight forward even for teams. Creating repositories, forking and cloning are seamless and their documentation and community forums solves the learning curve. I make use of GitHub on a daily basis in my workflow for both team and individual projects..",
    imgPath: "/images/exp10.png",
    logoPath: "/images/logo8.png",
    title: "Software Engineering Intern",
    date: "September 2023 - October 2023",
    responsibilities: [
        "CAMERA SOFTWARE ENGINEERING INTERN",
      "Successfully optimized camera driver performance with an 85% success rate, improving overall functionality.",
      "Reduced system latency by 30%, leading to enhanced responsiveness and overall efficiency. Integrated advanced",
      "features like HDR and real-time video streaming, significantly enhancing product capabilities and performance.",
    ],
  },

];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
  {
    name: "logo4",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo5",
    imgPath: "/images/logo2.png",
  },
];

const testimonials = [
  {
    name: "Pardh",
    mentions: "@Pardhasaradhi293@gmail.com",
    review:
      "Working with Aishwarya on the Brainy Edge project was a game-changer. They took our complicated edge computing setup and turned it into a fast, reliable system that worked better than we imagined. Whenever we hit a snag—like network slowdowns or data flow issues—they jumped in with smart fixes and kept everything running smoothly",
    imgPath: "/images/client1.png",
  },
  {
    name: "Praharshini",
    mentions: "@Praharshini.v@gmail.com",
    review:
        "Aishwarya boosted camera driver performance by 85%, cut latency 30%, and added HDR/real-time streaming. Explained kernel-level programming clearly, solved hardware issues daily, and kept our team aligned. collaborating daily to debug hardware integration issues, and always keeping our group aligned with clear updates. If you want someone who blends technical brilliance with teamwork to deliver results, Aishwarya is the intern you need on your side",
    imgPath: "/images/client3.png",
  },
  {
    name: "Lokesh",
    mentions: "vrslokesh@gmail.com",
    review:"This tool made learning Dijkstra’s algorithm way easier! The interactive grid let me drag nodes and watch paths update live, which helped me finally get how shortest paths work. Over 60 students used it for studying—way better than just reading textbooks. If you’re stuck on pathfinding, try this!",
    imgPath: "/images/client2.png",
  },
  {
    name: "Manikhandhan",
    mentions: "@Manikhandhan@vitfaculty.ac.in",
    review: "Aishwarya delivered a 98% accurate face mask detection system ahead of schedule, optimizing models/datasets for real-time use. Collaborative, open to feedback, and meticulous in documentation, their work now aids campus safety. A disciplined, integrity-driven student.Beyond technical excellence, consistently showed a commendable work ethic: collaborative in team meetings, receptive to feedback, and thorough in documentation. , reflecting its reliability and practical value",
    imgPath: "/images/client5.png",
  },
  {
    name: "Mishra",
    mentions: "@Mishra@hrBhel.in",
    review:
        "consistently excelled under demanding timelines, delivering high-quality work even during our busiest phases. Their ability to prioritize tasks, communicate progress transparently, and adapt to shifting priorities ensured seamless project execution. Beyond technical skill, their calm demeanor and collaborative spirit kept teams motivated under pressure. A reliable professional who turns challenges into opportunities.",
    imgPath: "/images/client4.png",
  },
  {
    name: "John",
    mentions: "@Johnflores@gmail.com",
    review: "As our Health & Wellness Coordinator,to rallying 40% more members through fitness challenges, Aishwarya didn’t just organize—she led, she transformed vision into results.  Even under pressure, she kept morale high, reminding everyone why health matters. Her leadership wasn’t about titles; it was about action, empathy,inspiring others to bring their best. She proves that great leaders build communities, not just schedules.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  // {
  //   name: "insta",
  //   imgPath: "/images/insta.png",
  // },
  // {
  //   name: "fb",
  //   imgPath: "/images/fb.png",
  // },
  // {
  //   name: "x",
  //   imgPath: "/images/x.png",
  //   link:"https://x.com/VAishwarya9?t=sLMBFuskiU3quZmCOpfsRQ&s=08",
  // },
  // {
  //   name: "linkedin",
  //   imgPath: "/images/linkedin.png",
  //   link: "https://www.linkedin.com/in/reddy-aishwarya-967686345/",
  // },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
