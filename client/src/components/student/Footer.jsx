import React from 'react';
import { assets } from '../../assets/assets'; 

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-14">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Column 1: Logo & Description */}
        <div className="px-3">
          <img src={assets.logo_dark} alt="Logo" className="h-12 mx-auto md:mx-0 mb-4" />
          <p className="text-gray-400 text-sm">
            Elevate your skills with our platform. Join thousands of learners in transforming their careers!
          </p>
        </div>

        {/* Column 2: Links */}
        <div className="px-3">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Courses</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Newsletter Signup */}
        <div className="px-3">
          <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
          <p className="text-gray-400 text-sm mb-3">
            Subscribe to our newsletter for the latest updates and exclusive offers.
          </p>
          <div className="flex sm:flex-row items-center sm:items-stretch">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-3 py-2 rounded-t-md sm:rounded-l-md sm:rounded-t-none border-none text-gray-800 w-full"
            />
            <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-b-md sm:rounded-r-md sm:rounded-b-none text-white  sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>
        
      </div>

      {/* Copyright Section */}
      <hr className='mt-5 mb-0 border-gray-700' />
      <p className="text-center text-gray-500 text-sm mt-4">
        © {new Date().getFullYear()} YourCompany. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
