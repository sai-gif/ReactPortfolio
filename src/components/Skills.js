import React from 'react';
import { BadgeCheckIcon, ChipIcon } from '@heroicons/react/solid';
import { skills } from './data';

const Skills = () => {
  return (
    <section id="skills" className="bg-purple-900 py-16">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <ChipIcon className="w-10 inline-block mb-4 text-green-400" />
          <h1 className="text-4xl font-medium title-font text-white mb-4">
            Skills & Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-300">
          "These skills showcase my expertise and proficiency in various technologies, with each percentage
           reflecting my mastery and capability in the corresponding area."
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill.name} className="p-2 sm:w-1/2 w-full mb-2">
              <div className="bg-purple-800 rounded flex p-4 flex-col h-full items-center">
                <div className="flex items-center mb-2">
                  <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-2" />
                  <span className="text-white font-medium">
                    {skill.name}
                  </span>
                </div>
                <div className="relative w-full h-6 bg-purple-700 rounded-md mt-2 overflow-hidden">
                  <div
                    className="absolute h-full bg-purple-500 rounded-md"
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
