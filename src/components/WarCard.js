// src/components/WarCard.js
import React from 'react';

const WarCard = ({ id, imageUrl, mainText, subText, onClick }) => {
  const handleImageError = (event) => {
    // Hide the entire card when there's an error with any data
    event.target.closest('.flex').style.display = 'none';
  };

  return (
    <div className="flex items-center text-white cursor-pointer" onClick={() => onClick(id)}>
      <img
        src={imageUrl}
        alt="War Iage"
        className="w-48 h-16 md:w-60 md:h-20 mr-4 rounded-xl pl-1"
        onError={handleImageError}
      />
      <div>
        <h1 className="text-sm font-semibold text-left">{mainText}</h1>
        
      </div>
    </div>
  );
};

export default WarCard;
