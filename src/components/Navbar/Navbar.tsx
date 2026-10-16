import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";


function Navbar() {

  const [isOpen, setIsOpen] = useState(false);


  const closeMenu = () => {
    setIsOpen(false);
  };


  return (
    <header className="navbar">

      <div className="container navbar-container">


        {/* Logo */}
        <NavLink 
          to="/" 
          className="logo"
          onClick={closeMenu}
        >

          <span className="logo-mark">
            RF
          </span>

          <span>
            Muhammad Rifqi Faizal
          </span>

        </NavLink>



        {/* Navigation */}
        <nav className={`nav-menu ${isOpen ? "open" : ""}`}>

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive 
              ? "nav-link active" 
              : "nav-link"
            }
            onClick={closeMenu}
          >
            Beranda
          </NavLink>


          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive 
              ? "nav-link active" 
              : "nav-link"
            }
            onClick={closeMenu}
          >
            Skills
          </NavLink>


          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive 
              ? "nav-link active" 
              : "nav-link"
            }
            onClick={closeMenu}
          >
            Project
          </NavLink>


          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive 
              ? "nav-link active" 
              : "nav-link"
            }
            onClick={closeMenu}
          >
            Kontak
          </NavLink>


        </nav>



        {/* Mobile Button */}
        <button
          className="menu-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >

          {
            isOpen 
            ? <X size={26} />
            : <Menu size={26} />
          }

        </button>


      </div>

    </header>
  );
}


export default Navbar;