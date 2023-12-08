// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Work from "./components/Work";
import './App.css'; // Import your CSS file for animations

const App = () => {
  return (
    <Router>
      <main className="text-gray-400 bg-white body-font">
        <Navbar />
        <TransitionGroup>
          <CSSTransition
            key={window.location.key}
            classNames="fade"
            timeout={300} // Adjust the duration of the transition as needed
          >
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/work" element={<Work />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/education" element={<Education />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
