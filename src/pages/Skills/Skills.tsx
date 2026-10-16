import { useParams } from "react-router-dom";

import { skills } from "../../data/skills";

import "./Skills.css";


function Skills() {


  const { category } = useParams();



  let selectedSkills = skills;



  if(category && category !== "fullstack"){


    selectedSkills = skills.filter(

      (item) => item.slug === category

    );


  }




  let title = "Teknologi yang Saya Gunakan";


  let description =
    "Berbagai teknologi yang saya gunakan untuk membangun aplikasi web modern, mulai dari frontend hingga backend.";





  if(category === "frontend"){


    title = "Frontend Development";


    description =
    "Teknologi yang saya gunakan untuk membangun tampilan website modern, responsif, dan interaktif.";


  }





  if(category === "backend"){


    title = "Backend Development";


    description =
    "Teknologi yang digunakan untuk membangun server, API, dan sistem aplikasi.";


  }





  if(category === "database"){


    title = "Database & Backend Service";


    description =
    "Teknologi yang digunakan untuk mengelola data dan layanan backend aplikasi.";


  }





  if(category === "tools"){


    title = "Tools & Workflow";


    description =
    "Tools yang membantu proses pengembangan, testing, dan kolaborasi project.";


  }





  if(category === "fullstack"){


    title = "Full Stack Development";


    description =
    "Gabungan teknologi frontend, backend, database, dan tools dalam membangun aplikasi secara menyeluruh.";


  }







  return (


    <main className="skills-page">





      {/* HEADER */}


      <section className="skills-hero">


        <div

          className="container"

          data-aos="fade-up"

          data-aos-duration="900"

          data-aos-easing="ease-out-cubic"

        >


          <h1>

            {title}

          </h1>



          <p>

            {description}

          </p>



        </div>


      </section>









      {/* SKILLS */}



      <section className="skills-section">


        <div className="container">


          <div className="skills-grid">



            {

              selectedSkills.map((category, index)=>(



                <div


                  className="skill-category"


                  key={category.slug}



                  data-aos="fade-up"


                  data-aos-duration="900"


                  data-aos-delay={index * 150}


                  data-aos-easing="ease-out-cubic"


                >



                  <h2>

                    {category.category}

                  </h2>




                  <p className="category-desc">

                    {category.description}

                  </p>






                  <div className="skill-items">



                    {


                      category.items.map((skill, skillIndex)=>{


                        const Icon = skill.icon;



                        return (



                          <div


                            className="skill-card"



                            key={skill.name}



                            data-aos="zoom-in"



                            data-aos-duration="700"



                            data-aos-delay={skillIndex * 80}



                            data-aos-easing="ease-out-cubic"



                          >



                            <Icon

                              className="skill-icon"

                            />



                            <span>

                              {skill.name}

                            </span>



                          </div>



                        );


                      })


                    }



                  </div>





                </div>



              ))



            }



          </div>



        </div>



      </section>





    </main>


  );


}


export default Skills;