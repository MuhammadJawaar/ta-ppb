// src/pages/Home.js
import React from 'react';
import MenuList from '../components/MenuList';
import backgroundImage from '../images/ezgif.com-webp-to-png.png';

const Home = () => {
  return (
    <div className="container pt-10">
      <div
        className="bg-cover bg-center h-32 md:h-32 rounded-b-xl w-screen mx-auto "
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
        }}
      />
      <div className="mt-4">
        <MenuList />
      </div>
    </div>
  );
};

export default Home;
