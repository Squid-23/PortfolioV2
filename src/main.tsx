import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";


import "./index.css";
import App from "./App.tsx";


import {
  initSmoothScroll
} from "./utils/smoothScroll";



// AOS Animation

AOS.init({

  duration: 900,

  once: true,

  easing: "ease-out-cubic",

  offset:100,

});




// Lenis Smooth Scroll

initSmoothScroll();





createRoot(
  document.getElementById("root")!
).render(

  <StrictMode>

    <BrowserRouter>

      <App />

    </BrowserRouter>

  </StrictMode>

);