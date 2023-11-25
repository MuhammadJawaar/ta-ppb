// src/components/MenuList.js
import React from 'react';
import { Link } from 'react-router-dom';
import MenuLink from './MenuLink';
import {UserGroupIcon,GlobeAsiaAustraliaIcon } from '@heroicons/react/24/solid';

const menus = [
  { to: '/war', icon: <GlobeAsiaAustraliaIcon className="w-12 h-12 md:w-20 md:h-20 text-white" />, text: 'War' },
  { to: '/Servant', icon: <UserGroupIcon className="w-12 h-12 md:w-20 md:h-20 text-white" />, text: 'Servant' },
  // Tambahkan menu tambahan sesuai kebutuhan
];

const MenuList = () => {
  return (
    <div className="grid grid-cols-2 pt-6 md:pl-40 md:grid-cols-2 gap-y-10 justify-left mt-4">
      {menus.map((menu, index) => (
        <MenuLink
          key={index}
          to={menu.to}
          icon={menu.icon}
          text={menu.text}
        />
      ))}
    </div>
  );
};

export default MenuList;
