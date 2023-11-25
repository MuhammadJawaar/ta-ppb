// src/pages/War.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WarFilter from '../components/WarFilter';
import WarCard from '../components/WarCard';
import axios from 'axios';

const War = () => {
  const [wars, setWars] = useState([]);
  const [activeFilter, setActiveFilter] = useState('mainRecord');
  const navigate = useNavigate();

  useEffect(() => {
    fetchWars(activeFilter);
  }, [activeFilter]);

  const fetchWars = async (filter) => {
    try {
      const response = await axios.get('https://api.atlasacademy.io/export/NA/nice_war.json');
      // Filter the wars based on the selected filter
      const filteredWars = response.data.filter((war) => {
        if (filter === 'mainRecord') {
          return war.flags && war.flags.includes('mainScenario');
        } else if (filter === 'event') {
          return war.flags && war.flags.includes('isEvent');
        }
        return true; // If no filter selected, include all wars
      });

      setWars(filteredWars);
    } catch (error) {
      console.error('Error fetching war data:', error);
    }
  };

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const handleWarCardClick = (warId) => {
    // Navigate to WarDetail page with the clicked warId
    navigate(`/wardetail/${warId}`);
  };

  return (
    <div className="pt-10">
      <WarFilter activeFilter={activeFilter} onFilterClick={handleFilterClick} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-12 pb-20">
        {wars.map((war) => (
          <WarCard
            key={war.id}
            imageUrl={war.banner}
            mainText={war.name}
            onClick={() => handleWarCardClick(war.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default War;
