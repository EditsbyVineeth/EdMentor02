import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

function CourseNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='py-8 mt-10'>
      <div className='px-8 h-16 fixed text-sm md:text-xl border-t-8 border-t-blue-400 bg-gray-300 border-1 border-y-black font-extrabold w-full uppercase flex flex-row items-center gap-12'>
        <div className='bg-opacity-70 flex h-12 items-center w-max justify-evenly'>
          <span className='mr-5 md:mr-14 hover:border-b-2 border-black'><Link to=''>School</Link></span>
          <span className='mr-5 md:mr-14 hover:border-b-2 border-black'><Link to='/course/skills'>Skills</Link></span>
          <span className='mr-5 md:mr-14 hover:border-b-2 border-black'><Link to='/course/graduation'>Graduation</Link></span>
          {/* Modified "Finance" to be a dropdown */}
          <div className="relative inline-block text-left">
            <span>
              <button className="mr-5 md:mr-14 hover:border-b-2 border-black focus:outline-none" onClick={toggleDropdown}>
                Finance
              </button>
            </span>
            {isOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <div className="py-1" role="none">
                  {/* Dropdown items */}
                  <Link to='/course/finance' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Finance & Accounting</Link>
                  <Link to='/course/moneymanagement' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Money Management</Link>
                  <Link to='/course/stockmarket' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Stock Market</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default CourseNavbar;
