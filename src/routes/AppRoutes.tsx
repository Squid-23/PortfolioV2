import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Terms from "../pages/Legal/Terms";
import Privacy from "../pages/Legal/Privacy";
import Skills from "../pages/Skills/Skills";
import Projects from "../pages/Projects/Projects";
import Contact from "../pages/Contact/Contact";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route 
path="/terms" 
element={<Terms />}
/>


<Route 
path="/privacy" 
element={<Privacy />}
/>

      <Route path="/skills" element={<Skills />} />

      <Route 
path="/skills/:category"
element={<Skills />}
/>

      <Route path="/projects" element={<Projects />} />

      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;