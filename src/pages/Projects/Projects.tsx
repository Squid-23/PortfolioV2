import { useState } from "react";

import {
  ExternalLink,
} from "lucide-react";

import { SiGithub } from "react-icons/si";

import Tilt from "react-parallax-tilt";

import {
  motion,
  AnimatePresence
} from "framer-motion";


import { projects } from "../../data/projects";

import "./Projects.css";



function Projects() {


  const [filter,setFilter] = useState("All");



  const categories = [
    "All",
    "Frontend",
    "Backend",
    "Full Stack"
  ];



  const filteredProjects =

    filter === "All"

    ?

    projects

    :

    projects.filter(

      project =>
      project.category === filter

    );





  return (


    <main className="projects-page">



      {/* HERO */}


      <section className="projects-hero">


        <div

        className="container"

        data-aos="fade-up"

        >


          <span className="projects-label">

            PORTFOLIO

          </span>



          <h1>

            Projects Saya

          </h1>




          <p>

            Beberapa project yang saya bangun
            menggunakan teknologi modern
            dengan fokus pada performa,
            pengalaman pengguna, dan solusi digital.

          </p>



        </div>


      </section>







      {/* FILTER */}



      <section className="project-filter">


        <div className="container">


          <div className="filter-wrapper">


          {

            categories.map(item=>(


              <button

              key={item}

              className={
                filter === item
                ?
                "active"
                :
                ""
              }


              onClick={()=>setFilter(item)}

              >

                {item}

              </button>



            ))

          }


          </div>


        </div>


      </section>









      {/* PROJECT CARD */}



      <section className="projects-section">


        <div className="container">


          <motion.div

          layout

          className="projects-grid"

          >


          <AnimatePresence>



          {


          filteredProjects.map(

          (project,index)=>(



          <motion.div


          key={project.title}


          layout


          initial={{
            opacity:0,
            y:60,
            scale:.95
          }}


          animate={{
            opacity:1,
            y:0,
            scale:1
          }}


          exit={{
            opacity:0,
            scale:.9
          }}


          transition={{
            duration:.6,
            delay:index*.08,
            type:"spring"
          }}


          >





          <Tilt


          tiltMaxAngleX={10}


          tiltMaxAngleY={10}


          perspective={1000}


          scale={1.04}


          transitionSpeed={1500}


          glareEnable={true}


          glareMaxOpacity={0.15}


          >






          <article


          className="project-card"


          data-aos="fade-up"


          data-aos-delay={index*100}


          >



          <div className="project-number">

            0{index+1}

          </div>




          <span className="project-category">

            {project.category}

          </span>





          <h2>

            {project.title}

          </h2>





          <p>

            {project.description}

          </p>







          <div className="tech-list">


          {
project.tech.map(

(tech)=>(

<motion.span

key={tech.name}

whileHover={{

y:-5,

scale:1.08

}}

transition={{

type:"spring",

stiffness:300

}}

>


<tech.icon />

{tech.name}


</motion.span>


)

)
}



          </div>








          <div className="project-links">



          {


          project.github && (


          <a

          href={project.github}

          target="_blank"

          rel="noopener noreferrer"

          >

          <SiGithub size={18}/>

          Repository

          </a>


          )


          }






          {


          project.demo && (


          <a

          href={project.demo}

          target="_blank"

          rel="noopener noreferrer"

          className="demo"

          >


          <ExternalLink size={18}/>

          Live Demo


          </a>


          )


          }





          </div>






          </article>






          </Tilt>



          </motion.div>



          )

          )



          }





          </AnimatePresence>



          </motion.div>


        </div>


      </section>



    </main>


  );

}


export default Projects;