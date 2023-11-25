// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { UserIcon, HomeIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-navbar text-white p-4 shadow-md bg-opacity-100">
      <div className="grid grid-cols-2 gap-8">
        <Link to="/home" className="text-white text-lg flex items-center justify-center">
          <HomeIcon className="w-8 h-8 mr-2" />
        </Link>
        <Link to="/profile" className="text-white text-lg flex items-center justify-center">
          <UserIcon className="w-8 h-8 mr-2" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
