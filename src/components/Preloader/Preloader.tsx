import { useEffect, useRef } from "react";
import gsap from "gsap";

import AOS from "aos";

import "./Preloader.css";


function Preloader() {


  const preloaderRef = useRef<HTMLDivElement>(null);

  const logoRef = useRef<HTMLDivElement>(null);

  const shineRef = useRef<HTMLDivElement>(null);

  const progressRef = useRef<HTMLDivElement>(null);



  useEffect(() => {


    const timeline = gsap.timeline();



    timeline


    // logo masuk

    .fromTo(
      logoRef.current,

      {
        y:80,
        opacity:0,
        scale:.8,
        rotate:-8
      },

      {
        y:0,
        opacity:1,
        scale:1,
        rotate:0,

        duration:1,

        ease:"power4.out"
      }

    )



    // shine

    .to(
 logoRef.current,
 {
   scale:1.05,
   duration:.2,
   ease:"power2.out"
 }
)

.to(
 logoRef.current,
 {
   scale:1,
   duration:.3
 }
)


    // progress

    .to(

      progressRef.current,

      {
        width:"100%",

        duration:1.3,

        ease:"power2.inOut"

      }

    )



    // keluar

    .to(

      preloaderRef.current,

      {
        opacity:0,

        y:-30,

        duration:.7,

        ease:"power3.inOut",

        onComplete(){


if(preloaderRef.current){

    preloaderRef.current.style.display = "none";

  }
          AOS.refresh();

        }

      }

    );



  }, []);



  return (

    <div
      ref={preloaderRef}
      className="preloader"
    >


      <div
        ref={logoRef}
        className="rf-logo"
      >

        RF


        <span
          ref={shineRef}
          className="shine"
        />


      </div>




      <div className="loading">

        <div
          ref={progressRef}
          className="progress"
        />

      </div>


    </div>

  );

}


export default Preloader;