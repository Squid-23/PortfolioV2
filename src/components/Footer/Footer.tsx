import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp
} from "react-icons/fa";

import { Link } from "react-router-dom";

import "./Footer.css";


function Footer() {


  return (

    <footer className="footer">


      <div className="container footer-grid">


        {/* BRAND */}

        <div className="footer-brand">


          <div className="footer-logo">
            RF
          </div>


          <h3>
            Muhammad Rifqi Faizal
          </h3>


          <p>
            Full Stack Developer yang membangun
            aplikasi web modern dengan teknologi
            terbaru.
          </p>



          <div className="social-list">


  <a
    href="https://github.com/Squarepants23"
    target="_blank"
    rel="noopener noreferrer"
    className="github"
    aria-label="GitHub"
  >
    <FaGithub />
  </a>



  <a
    href="https://www.linkedin.com/in/muhammadrifqifaizal23"
    target="_blank"
    rel="noopener noreferrer"
    className="linkedin"
    aria-label="LinkedIn"
  >
    <FaLinkedin />
  </a>



  <a
    href="https://www.instagram.com/zall_23j"
    target="_blank"
    rel="noopener noreferrer"
    className="instagram"
    aria-label="Instagram"
  >
    <FaInstagram />
  </a>



  <a
    href="https://wa.me/6288985715254"
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp"
    aria-label="WhatsApp"
  >
    <FaWhatsapp />
  </a>


</div>


        </div>





        {/* NAVIGATION */}

        <div className="footer-column">


<h4>
Navigation
</h4>


<Link to="/">
Beranda
</Link>


<Link to="/skills">
Skills
</Link>


<Link to="/projects">
Project
</Link>


<Link to="/contact">
Kontak
</Link>


</div>






        {/* SKILLS */}

        <div className="footer-column">


  <h4>
    Development
  </h4>



  <Link to="/skills/frontend">

    Frontend

  </Link>




  <Link to="/skills/backend">

    Backend

  </Link>





  <Link to="/skills/fullstack">

    Full Stack

  </Link>





  <Link to="/skills/database">

    Database

  </Link>



</div>






        {/* CONTACT */}

        <div className="footer-column">


<h4>
Contact
</h4>



<a
  href="https://wa.me/6288985715254"
  target="_blank"
  rel="noopener noreferrer"
>
  WhatsApp
</a>

<a
  href="https://www.instagram.com/zall_23j"
  target="_blank"
  rel="noopener noreferrer"
>
  Instagram
</a>

<a
  href="https://www.linkedin.com/in/muhammadrifqifaizal23"
  target="_blank"
  rel="noopener noreferrer"
>
  LinkedIn
</a>




<a
  href="https://github.com/Squarepants23"
  target="_blank"
  rel="noopener noreferrer"
>
  Github
</a>




<Link to="/contact">
  Contact Form
</Link>



</div>



      </div>





      <div className="footer-bottom">


<div className="copyright">

<p>
© {new Date().getFullYear()}
Muhammad Rifqi Faizal.
All rights reserved.
</p>

</div>




<div className="footer-legal">


<div className="legal-links">


<a href="/terms">
Terms of Service
</a>


<span>
•
</span>


<a href="/privacy">
Privacy Policy
</a>


</div>


</div>



</div>



    </footer>

  );

}


export default Footer;