import {
  ArrowRight,
  Code2,
  Server,
  Layers
} from "lucide-react";

import {
  FaGithub
} from "react-icons/fa";

import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import { Link } from "react-router-dom";

import "./Home.css";


function Home() {

  return (

    <main>


      {/* HERO */}

      <section className="hero">

        <div className="container hero-grid">


          <div
            className="hero-content"
            data-aos="fade-right"
          >


            <h1>

              Halo, saya{" "}
              <span>
                Muhammad Rifqi Faizal
              </span>

            </h1>


            <p className="hero-description">

              Saya membangun aplikasi web modern
              dengan fokus pada pengalaman pengguna,
              struktur kode yang rapi, dan solusi
              digital yang efektif.

            </p>



            <div className="hero-buttons">


              <a
  href="/projects"
  className="btn btn-project"
>
  <span>
    Lihat Project
  </span>

  <ArrowRight className="arrow-icon" size={18}/>
</a>



              <a
  href="https://github.com/Squarepants23"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-github"
>

  <FaGithub className="github-icon" size={18}/>

  <span>
    Github
  </span>

</a>


            </div>


          </div>





          {/* CODE CARD */}


          <div
            className="code-card"
            data-aos="fade-left"
            data-aos-delay="200"
          >


            <div className="code-header">

              <span></span>
              <span></span>
              <span></span>

            </div>



<pre>

<code
className="language-javascript"

dangerouslySetInnerHTML={{
__html: Prism.highlight(
`
const developer = {

  name: "Muhammad Rifqi Faizal",

  role: "Full Stack Developer",

  stack: [
    "React",
    "TypeScript",
    "Node.js",
    "Next.js",
    "PostgreSQL",
    "Tailwind CSS"
  ],

  approach:
    "Clean Code & User Experience"

};
`,
Prism.languages.javascript,
"javascript"
)

}}

/>

</pre>


          </div>


        </div>


      </section>





      {/* WHAT I DO */}


      <section className="services">


        <div className="container">


          <h2 data-aos="fade-up">
            Apa yang Saya Kerjakan
          </h2>



          <div className="service-grid">



            <div
  className="service-card"
  data-aos="fade-up"
>

  <div className="service-icon">
    <Code2 size={32}/>
  </div>


  <h3>
    Frontend Development
  </h3>


  <p>
    Membuat tampilan website modern,
    responsif, dan memberikan pengalaman
    pengguna yang baik.
  </p>


  <Link
to="/skills/frontend"
className="service-link"
>
Explore
<span>
→
</span>
</Link>


</div>





           <div
className="service-card"
data-aos="fade-up"
data-aos-delay="150"
>

<div className="service-icon">
<Server size={32}/>
</div>


<h3>
Backend Development
</h3>


<p>
Mengembangkan API, logic aplikasi,
dan sistem backend yang terstruktur.
</p>


<Link
to="/skills/backend"
className="service-link"
>
Explore
<span>
→
</span>
</Link>

</div>





            <div
className="service-card"
data-aos="fade-up"
data-aos-delay="300"
>

<div className="service-icon">
<Layers size={32}/>
</div>


<h3>
Full Stack Application
</h3>


<p>
Mengintegrasikan frontend dan backend
menjadi aplikasi digital yang lengkap.
</p>


<Link
to="/skills/fullstack"
className="service-link"
>
Explore
<span>
→
</span>
</Link>

</div>

          </div>


        </div>


      </section>






      {/* ABOUT */}


      <section
  className="about"
>

  <div className="container">


    <h2
      data-aos="fade-up"
    >
      Tentang Saya
    </h2>



    <div
      className="about-card"
      data-aos="zoom-in"
      data-aos-delay="150"
    >


      <div className="about-decoration"></div>



      <h3>
        Muhammad Rifqi Faizal
      </h3>


      <span className="about-role">
        Full Stack Developer
      </span>



      <p>

        Saya adalah seorang Full Stack Developer
        yang berfokus dalam membangun aplikasi
        web modern dari sisi frontend hingga
        backend.

        <br/>
        <br/>

        Saya menikmati proses mengubah ide
        menjadi produk digital dengan tampilan
        yang baik, struktur kode yang rapi,
        dan pengalaman pengguna yang optimal.

      </p>




      <div className="about-stack">

        <span>
          React
        </span>

        <span>
          TypeScript
        </span>

        <span>
          Node.js
        </span>

        <span>
          Next.js
        </span>

        <span>
          PostgreSQL
        </span>

        <span>
          Tailwind CSS
        </span>


      </div>


    </div>


  </div>

</section>



    </main>

  );

}


export default Home;