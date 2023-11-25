// src/components/AscensionButtons.js
import React from 'react';

const AscensionButtons = ({ onPrevClick, onNextClick, isPrevDisabled, isNextDisabled }) => {
  return (
    <div className="flex items-start justify-center h-full w-full absolute space-x-44 mt-48">
      <img
        src="https://apps.atlasacademy.io/db/assets/img_arrow_load-az48b2jg.png"
        alt="Previous"
        className={`cursor-pointer ${isPrevDisabled ? 'opacity-50' : ''}`}
        onClick={onPrevClick}
        style={{ width: '60px', height: '40px', transform: 'rotate(180deg)' }}
      />
      <img
        src="https://apps.atlasacademy.io/db/assets/img_arrow_load-az48b2jg.png"
        alt="Next"
        className={`cursor-pointer ${isNextDisabled ? 'opacity-50' : ''}`}
        onClick={onNextClick}
        style={{ width: '60px', height: '40px' }}
      />
    </div>
  );
};

export default AscensionButtons;
