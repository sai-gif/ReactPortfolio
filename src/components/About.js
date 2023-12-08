// src/components/About.js
import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
            Hi, I'm Sai Kumar Reddy Kaluvakolu.
            <br className="hidden lg:inline-block" />I'm a passionate computer science student who loves coding.
          </h1>
          <p className="mb-8 leading-relaxed text-black">
            I am a Computer Science enthusiast fueled by a fervor to ascend as a versatile full-stack developer. My
            ardor extends to the enchanting world of Artificial Intelligence, where I aspire to craft innovative
            solutions. Driven by an insatiable curiosity, I am committed to continuous learning and dedicated to 
            implementing cutting-edge technologies that push the boundaries of what's possible.
          </p>

          <div className="flex justify-center">
            <Link
              to="/contact"
              className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              Work With Me
            </Link>
            <Link
              to="/projects"
              className="ml-4 inline-flex text-purple-800 bg-purple-300 border-0 py-2 px-6 focus:outline-none hover:bg-purple-400 hover:text-white rounded text-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              See My Past Work
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={"process.env.PUBLIC_URL +"/images/selfi.jpg"}
          />
        </div>
        
      </div>
    </section>
  );
}
