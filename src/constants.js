/* eslint-disable no-unused-vars */
// Skills Section Logo's

import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import UnityLogo from './assets/tech_logo/unity-tab.png';
import supabaseLogo from './assets/tech_logo/supabase (1).avif';
import csharpLogo from './assets/tech_logo/csharp.avif';




// Experience Section Logo's
import iitdelhilogo from './assets/company_logo/iitdelhi.avif';
import webdevLogo from './assets/company_logo/webdev.avif';

// Education Section Logo's
import ggsipuLogo from './assets/education_logo/ggsipu.pnh.png';
import kvsLogo from './assets/education_logo/kvs-logo.png';

// Project Section Logo's
import hirely from './assets/work_logo/hirely.avif';
import cinevault from './assets/work_logo/cinevault.avif';
import flappydragon from './assets/work_logo/flappydragon.avif';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Supabase', logo: supabaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'Unity', logo: UnityLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Unity', logo: UnityLogo },
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },

    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: iitdelhilogo,
    role: "Research & Development Intern",
    company: "Indian Institute of Technology, Delhi",
    date: "25 Jun 2025 - 24 Aug 2025",
    desc: "Redesigned the official IIT Delhi (TRIP Department) website: rebuilt navbar and navigation, improved mobile responsiveness, accessibility and content readability, added sections (e.g., MSR Students, Alumni, Faculty), restructured staff & PhD students listings and optimized admin workflows. Tested locally with XAMPP and deployed updates via FileZilla.",
    desc2: "Developed and contributed in faculty-led project focused on creating a realistic VR-based pedestrian simulator that could study pedestrian-vehicle interactions under both normal and distracted conditions using unity-xr development. (C#, Vive‑Wave, KatVR); modelled SUMO/RoadRunner traffic scenarios and integrated them into Unity via traci Python scripts for pedestrian controls; integrated OpenFace for facial behavior and micro‑movement analysis.",
    
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "Unity",
      "XR Development",
      "Sumo",
      "RoadRunner",
      "Filezilla",
      "Xampp",

    ],
  },
  {
    id: 1,
    img: webdevLogo,
    role: "Freelance Web Developer",
    desc: "Contributed to innovative projects as a Freelance Fullstack Engineer, leading both frontend and backend development using technologies such as JavaScript, ReactJS, Next.js,  Nodejs, Supabase, Convex, Firebase, ExpressJs Worked closely with both the team  and individually to deliver high-performance  producti0on-ready web applications and improve user experience through seamless integration of various technologies.",
    skills: [
      "ReactJS",
      "Nextjs",
      "JavaScript",
      "Tailwind CSS",
      "Supabase",
      "Convex",
      "Firebase",
      "Nodejs",
      "ExpressJs",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: ggsipuLogo,
    school: "Guru Gobind Singh Indraprastha University, Delhi",
    school2: "Dr. Akhilesh Das Gupta Institute of Professional Studies, New Delhi",
    date: "Aug 2022 - Jul 2026 (Pursuing)",
    grade: "9.1+ CGPA (Till 6th Sem)",
    desc: "I am currently pursuing my Bachelor of Technology (B.Tech) in Computer Science Engineering and trained to be a Software Developer with expertise in Full-stack Web Development, Data Structures & Algorithms and Unity-XR Development.",
    degree: "Bachelor of Technology - B.Tech (Computer Science Engineering)",
  },
  {
    id: 1,
    img: kvsLogo,
    school: "Kendriya Vidyalaya Sangathan School, RK-Puram Sec-8 New Delhi",
    date: "Apr 2019 - March 2021",
    grade: "92.8%",
    desc: "I completed my class 12 education from Kendriya Vidyalaya School, RK-Puram Sec-8, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science aand began my journey into the world of technology and coding.",
    degree: "CBSE(XII) - PCM with Computer Science",
  },
  {
    id: 2,
    img: kvsLogo,
    school: "Kendriya Vidyalaya Sangathan School, SPG Dwarka Sec-8, New Delhi",
    date: "Apr 2017 - March 2019",
    grade: "92.4%",
    desc: "I completed my class 10 education from Kendriya Vidyalaya School, SPG Dwarka Sec-8, under the CBSE board, where I studied Science & learned practical scientific outlook in life.",
    degree: "CBSE(X) - Science",
  },
];

export const projects = [
  {
    id: 0,
    title: "Hirely",
    description:
      "Built real-time job posting, saving, and application tracking with a modern UI using Tailwind, with Advanced filtering features including search by job title, location, and company. Integrated Remotive’s public remote jobs API to display thousands of external listings, implemented a 7-hour smart caching system to handle strict API rate limits efficiently (4 requests/day).",
    image: hirely,
    tags: [ "React JS", "Supabase", "Remotive API", "Tailwind CSS"],
    github: "https://github.com/skd19092003/Hirely",
    webapp: "https://greatjobs.vercel.app/?recruiter=true",
  },
  {
    id: 1,
    title: "CineVault",
    description:
      "Developed CineVault, a comprehensive React-based movie discovery platform featuring advanced search with real-time filtering by genre, year, language, and streaming providers, along with personal movie management through local storage for watchlist, watched, and favorites lists, enabling seamless organization and tracking of movie preferences. Implemented Standout Innovative features like an Intelligent 'Lucky Wheel' Movie Randomizer with customizable filters and visual effects.",
    image: cinevault,
    tags: ["React JS", "TMDB API", "React Bits", "CSS"],
    github: "https://github.com/skd19092003/greatmovies",
    webapp: "https://greatmovies.vercel.app/",
  },
  {
    id: 2,
    title: "Flappy Dragon Game",
    description:
      "FLAPPY DRAGON - A Unity-based 2D game where you control a dragon navigating through obstacles. deployed on WebGL for browser play. Features smooth controls, scoring, and sound effects for an engaging experience.",
    image: flappydragon,
    tags: ["Unity","Unity-WebGL", "C#", "Game Development", "Game Design"],
    github: "https://github.com/skd19092003/flappy_dragon",
    webapp: "https://flyingdragon.vercel.app/",
  },
 
 
 
];  