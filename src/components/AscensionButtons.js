// src/components/AscensionButtons.js
import React from 'react';

const AscensionButtons = ({ onPrevClick, onNextClick, isPrevDisabled, isNextDisabled }) => {
  return (
    <div className="flex items-start justify-center w-reverse w-64 absolute space-x-52 mt-48">
      <img
        src="https://apps.atlasacademy.io/db/assets/img_arrow_load-az48b2jg.png"
        alt="Previous"
        className={`cursor-pointer ${isPrevDisabled ? 'opacity-50' : ''} transform rotate-180 w-12 h-12`}
        onClick={onPrevClick}
      />
      <img
        src="https://apps.atlasacademy.io/db/assets/img_arrow_load-az48b2jg.png"
        alt="Next"
        className={`cursor-pointer ${isNextDisabled ? 'opacity-50' : ''} w-12 h-12`}
        onClick={onNextClick}
      />
    </div>
  );
};

export default AscensionButtons;
