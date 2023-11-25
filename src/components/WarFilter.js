// src/components/WarFilter.js
import React from 'react';

const WarFilter = ({ activeFilter, onFilterClick }) => {
  return (
    <div className="fixed w-full bg-header text-white pt-2 shadow-md">
        <div className="grid grid-cols-2 gap-8">
      <button
        className={`px-4 py-2 rounded ${
          activeFilter === 'mainRecord' ? 'bg-gray-700 text-white' : 'bg-header'
        }`}
        onClick={() => onFilterClick('mainRecord')}
      >
        Main Record
      </button>
      <button
        className={`px-4 py-2 rounded ${
          activeFilter === 'event' ? 'bg-gray-700 text-white' : 'bg-header'
        }`}
        onClick={() => onFilterClick('event')}
      >
        Event
      </button>
      </div>
    </div>
  );
};

export default WarFilter;
