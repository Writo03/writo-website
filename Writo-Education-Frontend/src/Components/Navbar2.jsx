import React, { useState } from 'react';
import { IoIosArrowDropdownCircle } from "react-icons/io";
import Services from './Services';
import './NavBar2.css'; 
import Events from './Events'; 

const NavBar2 = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showEvents, setShowEvents] = useState(false); // State for Events component visibility

  const toggleDropdown = () => {
    setDropdownOpen(prevState => !prevState);
  };

  const handleComponent1Click = () => {
    setShowServices(prevState => !prevState);
    setShowEvents(false); // Hide Events component when Services component is clicked
    setDropdownOpen(false); // Close the dropdown when Component 1 is clicked
    console.log("Clicked Component 1");
  };

  const handleComponent2Click = () => {
    setShowEvents(prevState => !prevState);
    setShowServices(false); // Hide Services component when Events component is clicked
    setDropdownOpen(false); // Close the dropdown when Component 2 is clicked
    console.log("Clicked Component 2");
  };

  return (
    <nav className="mt-4 mb-2 relative z-10">
      <div className="container mx-auto flex justify-between items-center nav-bar-container">
        <div className="flex space-x-4 text-2xl">
          <a href="#" className="text-black hover:text-gray-400 item1">Writo</a>
          
          <div className="relative">
            <button 
              className="text-black item2 hover:text-gray-400 flex items-center"
              onClick={handleComponent1Click}
            >
              <span className="mr-1">Component 1</span>
            </button>
          </div>

          <div className="relative">
            <button 
              className="text-black item2 hover:text-gray-400 flex items-center"
              onClick={handleComponent2Click}
            >
              <span className="mr-1">Component 2</span>
              <IoIosArrowDropdownCircle className="text-lg"/>
            </button>
          </div>
        </div>

        <div className="flex space-x-4">
          <button 
            className="text-black px-10 py-3 text-lg mr-10 rounded item3 hover:bg-[#488B80] hover:text-white w-60"
            style={{
              border: '1px solid #C6C6C6', 
            }}
            onClick={toggleDropdown} // Toggle dropdown visibility
          >
            {dropdownOpen ? 'Close Dropdown' : 'Open Dropdown'}
          </button>

          <button 
            className="bg-[#488B80] text-white px-4 py-2 rounded-lg hover:border-[#C6C6C6] hover:bg-transparent hover:text-[#488B80] ml-8"
            style={{
              border: '1px solid #C6C6C6', 
            }}
          >
            View Plans
          </button>
        </div>
      </div>

      {/* Conditional rendering of Services component */}
      {showServices && <Services className="services-component" />}
      
      {/* Conditional rendering of Events component */}
      {showEvents && <Events className="events-component" />}
    </nav>
  );
}

export default NavBar2;
