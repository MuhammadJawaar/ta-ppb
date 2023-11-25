// src/pages/Profile.js
import React from 'react';

const Profile = () => {
  const profileData = {
    imageUrl: 'https://wiki.gbl.gg/images/thumb/a/af/MBTL_Neco-Arc_Art.png/800px-MBTL_Neco-Arc_Art.png', // Replace with your image URL
    name: 'Neko Neko',
    subText: 'Kelompok 36',
  };

  return (
    <div className="flex flex-col items-center justify-center pt-14 h-screen">
      <img src={profileData.imageUrl} alt="Profile" className="w-30 h-40 rounded-full mb-4" />
      <h1 className="text-xl font-semibold text-white mb-2">{profileData.name}</h1>
      <p className="text-sm text-gray-500">{profileData.subText}</p>
    </div>
  );
};

export default Profile;
