// src/components/ServantCard.js
import React from 'react';

const ServantCard = ({ id, imageUrl, mainText, subText, starValue, onClick }) => {
  const renderStars = () => {
    const starCharacter = '\u2605'; // Karakter Unicode untuk bintang dengan 5 sisi
    return Array.from({ length: starValue }).map((_, index) => (
      <span key={`${id}_star_${index}`} className="text-yellow-500">
        {starCharacter}
      </span>
    ));
  };

  return (
    <div className="flex items-center text-white cursor-pointer" onClick={() => onClick(id)}>
      <img src={imageUrl} alt="Servant Image" className="w-20 h-20 mr-4 rounded-xl pl-1" />
      <div>
        <h1 className="text-base font-semibold">{mainText}</h1>
        <p className="text-xs text-gray-500">{subText}</p>
        <div className="flex items-center mt-1">{renderStars()}</div>
      </div>
    </div>
  );
};

export default ServantCard;
