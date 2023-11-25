// src/pages/Servant.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ServantCard from '../components/ServantCard';
import { useNavigate } from 'react-router-dom';

const Servant = () => {
  const [servants, setServants] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.atlasacademy.io/export/NA/basic_servant.json');
        setServants(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = (id) => {
    // Gantilah '/servant/detail' dengan path yang sesuai di halaman detail Anda
    // Misalnya, '/servant/detail' atau sejenisnya
    navigate(`/servant/detail/${id}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-10 pb-20">
      {servants.map((servant, index) => (
        <ServantCard
          key={index}
          id={servant.id} // Pastikan properti ID tersedia di API Anda
          imageUrl={servant.face}
          mainText={servant.name}
          subText={`Class: ${servant.className}`}
          starValue={servant.rarity}
          onClick={handleCardClick}
        />
      ))}
    </div>
  );
};

export default Servant;
