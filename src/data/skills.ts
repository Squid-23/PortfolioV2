import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaPhp,
  FaGitAlt,
  FaGithub,
  FaNpm,
} from "react-icons/fa";


import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiExpress,
  SiNextdotjs,
  SiAxios,
  SiJsonwebtokens,
  SiSocketdotio,
  SiSupabase,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiPostman,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";

export const skills = [

  {

    category: "Frontend Development",

    slug: "frontend",


    description:
      "Membangun antarmuka web modern, responsif, dan interaktif.",


    items: [

      {
        name: "HTML5",
        icon: FaHtml5,
      },

      {
        name: "CSS3",
        icon: FaCss3Alt,
      },

      {
        name: "JavaScript",
        icon: SiJavascript,
      },

      {
        name: "TypeScript",
        icon: SiTypescript,
      },

      {
        name: "React",
        icon: FaReact,
      },

      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },

      {
        name: "Framer Motion",
        icon: SiFramer,
      },

    ],

  },





  {

    category: "Backend Development",

    slug: "backend",


    description:
      "Mengembangkan server, API, dan sistem backend aplikasi.",


    items: [

      {
        name: "Node.js",
        icon: FaNodeJs,
      },


      {
        name: "Express.js",
        icon: SiExpress,
      },


      {
        name: "Next.js",
        icon: SiNextdotjs,
      },


      {
        name: "Python",
        icon: FaPython,
      },


      {
        name: "PHP",
        icon: FaPhp,
      },


      {
        name: "Axios",
        icon: SiAxios,
      },


      {
        name: "JWT Authentication",
        icon: SiJsonwebtokens,
      },


      {
        name: "Socket.io",
        icon: SiSocketdotio,
      },

    ],

  },






  {

    category: "Database",

    slug: "database",


    description:
      "Mengelola penyimpanan data dan backend service.",


    items: [

      {
        name: "Supabase",
        icon: SiSupabase,
      },


      {
        name: "MySQL",
        icon: SiMysql,
      },


      {
        name: "PostgreSQL",
        icon: SiPostgresql,
      },


      {
        name: "MongoDB",
        icon: SiMongodb,
      },

    ],

  },






  {

    category: "Tools & Workflow",

    slug: "tools",


    description:
      "Tools yang digunakan untuk pengembangan dan kolaborasi.",


    items: [

      {
        name: "Git",
        icon: FaGitAlt,
      },


      {
        name: "GitHub",
        icon: FaGithub,
      },


      {
        name: "VS Code",
        icon: VscCode,
      },


      {
        name: "NPM",
        icon: FaNpm,
      },


      {
        name: "Postman",
        icon: SiPostman,
      },


    ],

  },


];