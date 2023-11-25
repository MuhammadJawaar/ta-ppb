// src/components/SpotMapCard.js
import React from 'react';

const SpotMapCard = ({ imageUrl, mainText, subText }) => {
  return (
    <div className="flex items-center text-white">
      <img src={imageUrl} alt="Spot Image" className="w-20 h-20 mr-4 rounded-xl pl-1" />
      <div>
        <h1 className="text-base font-semibold">{mainText}</h1>
      </div>
    </div>
  );
};

export default SpotMapCard;
