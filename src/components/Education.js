// src/components/Education.js

import React from 'react';
import { ArrowLeftIcon, ArrowRightIcon, BookOpenIcon } from '@heroicons/react/outline';

const educationData = [
  {
    institution: 'Saint Louis University',
    degree: 'Master of Science in Computer Science',
    year: '2023-2025',
  },
  {
    institution: 'Lovely Professional University',
    degree: 'Bachelor of Science in Computer Science',
    year: '2018-2022',
  },
  {
    institution: 'Geeks For Geeks',
    degree: 'Data Structures and Algorithms',
    year: '2021',
  },
  {
    institution: 'Coursera',
    degree: 'Introduction to Artificial Intelligence',
    year: '2022',
  },
  // Add more education items as needed
];

const Education = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? educationData.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === educationData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="education">
      <div className="flex flex-col items-center justify-center h-screen bg-purple-900 text-white">
      <h1 className="text-3xl font-bold mb-8 text-white">Education & Certification</h1>
      <div className="relative w-96 lg:w-1/2 xl:w-1/3 bg-purple-800 p-4 rounded-md shadow-md text-center mt-8">
        <BookOpenIcon className="h-12 w-12 mx-auto mb-4 text-green-400" />
        <button onClick={goToPrev} className="absolute top-1/2 transform -translate-y-1/2 left-0">
          <ArrowLeftIcon className="h-8 w-8 text-green-400" />
        </button>
        <button onClick={goToNext} className="absolute top-1/2 transform -translate-y-1/2 right-0">
          <ArrowRightIcon className="h-8 w-8 text-green-400" />
        </button>
        <div>
          <h2 className="text-lg font-bold mb-1">
            {educationData[currentIndex].degree}
          </h2>
          <p className="mb-2">
            {educationData[currentIndex].institution}
          </p>
          <p>
            {educationData[currentIndex].year}
          </p>
        </div>
      </div>
      
      <p className="mt-8 text-lg">
        After completing my education, I'm ready to take on new challenges and contribute to innovative projects.
      </p>
    </div>
    </section>
  );
};

export default Education;
