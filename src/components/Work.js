import React from "react";
import { BriefcaseIcon, CalendarIcon } from "@heroicons/react/solid";

const Work = () => {
  return (
    <section id="jobs" className="bg-purple-900 text-white p-8 text-center">
      <div className="mb-6">
        <BriefcaseIcon className="w-8 h-8 inline-block mr-2 text-green-400" />
        <h2 className="text-3xl font-semibold inline-block align-middle">Jobs</h2>
      </div>

      {/* Testing Engineer */}
      <div className="card bg-purple-800 p-6 rounded-md shadow-lg mb-4">
        <h3 className="text-xl font-bold mb-2">Testing Engineer</h3>
        <div className="card_description mb-4">
          <div className="flex mb-2">
            <span className="mr-2"><b>Company:</b></span>
            <span>Global networks, HYD IND</span>
          </div>
          <p>
            As a Testing Support Engineer at Global Networks, a prominent systems integration firm in
            Hyderabad, I skillfully oversaw extensive documentation processes. My professional journey
            includes leveraging testing expertise acquired from roles at esteemed organizations like
            Deloitte and Genpact. I excel in meticulous documentation and contribute significantly to
            testing processes, showcasing versatility across various roles.
          </p>
          <div className="text-gray-400 flex items-center justify-center">
            <CalendarIcon className="w-4 h-4 mr-1" />
            January 2022 - July 2022
          </div>
        </div>
      </div>

      {/* Volunteer */}
      <div className="card bg-purple-800 p-6 rounded-md shadow-lg mb-4">
        <h3 className="text-xl font-bold mb-2">Volunteer</h3>
        <div className="card_description mb-4">
          <div className="flex mb-2">
            <span className="mr-2"><b>Company:</b></span>
            <span>Seva Bharathi (NGO), HYD IND</span>
          </div>
          <p>
            Initiated impactful educational awareness campaigns and championed cleanliness initiatives in
            Hyderabad's slums. Actively engaged with the community, offering guidance and assistance,
            including organizing food distribution at Gandhi Hospital. Demonstrated a commitment to
            social welfare and community empowerment through hands-on involvement.
          </p>
          <div className="text-gray-400 flex items-center justify-center">
            <CalendarIcon className="w-4 h-4 mr-1" />
            May 2020 - July 2020
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
