// Footer.js

import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-gray-400 bg-purple-900 body-font border-t border-purple-800">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-sm text-white text-center sm:text-left">
          © 2023 Sai Kumar Reddy Kaluvakolu
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <a
            href="https://github.com/sai-gif"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 text-purple-400 hover:text-white transition-colors duration-300"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/saikumarkaluvakolu/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 text-purple-400 hover:text-white transition-colors duration-300"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/saikumarkaluvakolu/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 text-purple-400 hover:text-white transition-colors duration-300"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
