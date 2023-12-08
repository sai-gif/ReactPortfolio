import React, { useState } from 'react';
import { MailIcon, LocationMarkerIcon, PhoneIcon } from '@heroicons/react/solid';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-purple-900">
      <div className="bg-white text-gray-800 p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-purple-900">Contact Me</h1>
        <div className="mb-4 flex items-center">
          <MailIcon className="h-5 w-5 mr-2 text-purple-500" />
          <span>Email: saikumarkaluvakolu@gmail.com</span>
        </div>
        <div className="mb-4 flex items-center">
          <LocationMarkerIcon className="h-5 w-5 mr-2 text-purple-500" />
          <span>Address:3307 Drake Plaza Appartments</span>
        </div>
        <div className="flex items-center mb-4">
          <PhoneIcon className="h-5 w-5 mr-2 text-purple-500" />
          <span>Phone: +1 (314) 267-2708</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-bold mb-2 text-purple-500">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-bold mb-2 text-purple-500">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-bold mb-2 text-purple-500">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
