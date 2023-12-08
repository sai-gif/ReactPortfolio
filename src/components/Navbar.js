import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/solid";
import "./Navbar.css"; // Import your CSS file for styles

const Navbar = () => {
  const location = useLocation();

  return (
    <header className="bg-purple-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <NavLink
          to="/about"
          activeClassName="active"
          className="title-font font-medium nav-link mb-4 md:mb-0 ml-3 text-xl"
        >
          Sai Kumar Reddy Kaluvakolu
        </NavLink>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <NavLink
            to="/projects"
            activeClassName="active"
            className="mr-5 hover:text-white nav-link"
          >
            Past Work
          </NavLink>
          <NavLink
            to="/skills"
            activeClassName="active"
            className="mr-5 hover:text-white nav-link"
          >
            Skills
          </NavLink>
          <NavLink
            to="/work"
            activeClassName="active"
            className="mr-5 hover:text-white nav-link"
          >
            Jobs
          </NavLink>
          <NavLink
            to="/education"
            activeClassName="active"
            className="mr-5 hover:text-white nav-link"
          >
            Education
          </NavLink>
        </nav>
        <NavLink
          to="/contact"
          activeClassName="active"
          className="inline-flex items-center bg-purple-800 border-0 py-1 px-3 focus:outline-none hover:bg-purple-700 rounded text-base mt-4 md:mt-0 nav-link"
        >
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
