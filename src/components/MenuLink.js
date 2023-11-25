// src/components/MenuLink.js
import React from 'react';
import { Link } from 'react-router-dom';

const MenuLink = ({ to, icon, text }) => {
  return (
    <Link to={to} className="flex flex-col items-center">
      <div className="bg-white-300 p-0 mb-2">
        {/* Icon */}
        {icon}
      </div>
      {/* Text */}
      <span className="text-sm text-white">{text}</span>
    </Link>
  );
};

export default MenuLink;
