export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Academtic Experiences", link: "#aca-experiences" },
  { name: "Professional Experiences", link: "#pro-experiences"},
  { name: "My Methodologies", link:"#methodologies"},
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize delivering seamless, high-quality code.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] ",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/ModernPortfolio/fullstack.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm ready to work anytime anywhere",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I am constantly trying to improve and evolve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 h-[20rem]",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/ModernPortfolio/grid.svg",
    spareImg: "/ModernPortfolio/b4.svg",
  },

  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Periodic screenshot app",
    des: "Developed a periodic screenshot app that captures screenshots at regular intervals, designed to help users monitor their screen activity and track changes over time.",
    img: "/ModernPortfolio/screenshotmanager.png",
    iconLists: ["/ModernPortfolio/re.svg", "/ModernPortfolio/tail.svg", "/ModernPortfolio/ts.svg", "/ModernPortfolio/electronjs-icon.svg","/ModernPortfolio/nodejs.svg"],
    link: "https://github.com/raedbaff/Screenshot-Manager",
  },
  {
    id: 2,
    title: "Medical Website (Medigest)",
    des: "This is a doctor management website where doctors can receive appointments and talk freely to their clients, I worked on this project for my graduation project inside polytechnique.",
    img: "/ModernPortfolio/medigest.PNG",
    iconLists: ["/ModernPortfolio/angular.png", "/ModernPortfolio/tail.svg", "/ModernPortfolio/ts.svg",],
    link: "https://github.com/raedbaff/MedGest",
  },
  {
    id: 3,
    title: "Modern Portfolio app",
    des: "Developed a sleek and responsive portfolio app showcasing my projects, skills, and experiences, complete with interactive elements, seamless navigation, and an intuitive user interface to highlight my professional journey and achievements",
    img: "/ModernPortfolio/portfolio.PNG",
    iconLists: ["/ModernPortfolio/next.svg", "/ModernPortfolio/tail.svg", "/ModernPortfolio/ts.svg"],
    link: "https://github.com/raedbaff/ModernPortfolio",
  },
  {
    id: 4,
    title: "Gaming quiz app",
    des: "Developed a fun and interactive gaming quiz app featuring a wide range of questions, engaging visuals, and real-time scoring, designed to entertain users and test their knowledge of popular games and gaming culture.",
    img: "/ModernPortfolio/brainiacs.png",
    iconLists: ["/ModernPortfolio/next.svg", "/ModernPortfolio/tail.svg", "/ModernPortfolio/ts.svg"],
    link: "https://github.com/raedbaff/GameBrainiacs",
  },
  {
    id: 5,
    title: "Mini reddit app",
    des: "Developed a mini reddit app where users can post and comment on posts, I used technologies such as react js and node js for this project.",
    img: "/ModernPortfolio/bafftalk.png",
    iconLists: ["/ModernPortfolio/next.svg", "/ModernPortfolio/tail.svg", "/ModernPortfolio/ts.svg"],
    link: "https://github.com/raedbaff/BaffTalk",
  },
];

export const Academic = [
  {
    description:
      "I studied for 3 years after baccalaureat where i got my degree in STIC(Sciences et technologies de l'information et communication) .",
    name: "Graduated From ESSTHS",
    place: "Tunisia- Sousse",
  },
  {
    description:
      "I studied for 3 years after my STIC degree where i got my degree in engineering where i studied various concepts and fields such as programmating, network and so on.",
    name: "Graduated From Polytechnique",
    place: "Tunisia- Sousse",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Fullstack Engineer Intern within ITGATE group",
    desc: "Assisted in the development of a web-based platform using Angular & springboot within ITGATE group.",
    className: "md:col-span-2",
    thumbnail: "/ModernPortfolio/exp1.svg",
  },
  {
    id: 2,
    title: "Part-time fullstack engineer within ITGATE group",
    desc: "Designed and developed web apps withing ITGATE group using various technologies such as react js , next js and many more",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/ModernPortfolio/exp2.svg",
  },
  {
    id: 3,
    title: "Fullstack engineer within e-saad services",
    desc: "Worked as a fullstack engineer within e-saad services focusing on education themed projects using technologies such as sails js , RDF RDFS and apache fuseki for database.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/ModernPortfolio/exp3.svg",
  },
  {
    id: 4,
    title: "Fullstack engineer within HPC group",
    desc: "Worked as a fullstack developer using various technologies such as Sveltekit node js Docker sqlite etc...",
    className: "md:col-span-2",
    thumbnail: "/ModernPortfolio/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/ModernPortfolio/git.svg",
    link: "https://github.com/raedbaff"
  },
  {
    id: 2,
    img: "/ModernPortfolio/link.svg",
    link:"https://www.linkedin.com/in/raed-baffoun-884088242/"
  },
];
