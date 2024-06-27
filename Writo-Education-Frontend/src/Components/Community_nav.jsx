import React, { useState } from 'react';

const Community_nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className=" w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 md:px-12">
        {/* Main navigation links */}
        <a href="#" className="text-[#1AB780] font-semibold md:hidden">
          Community
        </a>
        <div className="hidden md:flex items-center space-x-10">
          <a href="#" className="text-[#1AB780] text-2xl font-semibold item1">
            Community
          </a>
          <a href="#" className="text-gray-900 font-semibold">
            About
          </a>
          <a href="#" className="text-gray-900">
            FAQ
          </a>
          <a href="#" className="text-gray-900">
            Community Guidelines
          </a>
        </div>
        {/* Buttons section */}
        <div className="flex items-center space-x-10">
          <button className="hidden md:block px-16 py-1 border border-gray-400 font-semibold rounded-lg hover:border-black">
            Search class
          </button>
          <button className="hidden md:block px-4 py-2 bg-[#488B80] text-white rounded">
            View plans
          </button>
          <button className="md:hidden block text-gray-900" onClick={toggleMenu}>
            {/* Hamburger menu icon or label */}
            Menu
          </button>
        </div>
      </div>
      {/* Responsive menu */}
      <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="flex flex-col items-center space-y-4 py-4">
          <a href="#" className="text-gray-900">
            About
          </a>
          <a href="#" className="text-gray-900">
            FAQ
          </a>
          <a href="#" className="text-gray-900">
            Community Guidelines
          </a>
          <button className="px-16 py-1 border border-gray-400 font-semibold rounded-lg hover:border-black">
            Search class
          </button>
          <button className="px-4 py-2 bg-[#488B80] text-white rounded">
            View plans
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Community_nav;
