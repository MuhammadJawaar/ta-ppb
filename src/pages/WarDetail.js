// src/pages/WarsDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SpotMapCard from '../components/SpotsMapsCard';

const WarsDetail = () => {
  const { id } = useParams();
  const [warData, setWarData] = useState(null);

  useEffect(() => {
    const fetchWarDetail = async () => {
      try {
        const response = await axios.get(`https://api.atlasacademy.io/nice/NA/war/${id}`);
        setWarData(response.data);
      } catch (error) {
        console.error('Error fetching war detail:', error);
      }
    };

    fetchWarDetail();
  }, [id]);

  if (!warData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center pt-14 h-auto">
      <div className="text-center mb-5">
        <h1 className="text-xl font-semibold text-white mb-5">{warData.name}</h1>
        <img src={warData.maps[0].mapImage} alt={warData.name} className="w-80 h-80 rounded-xl mx-auto mb-4" />
        <h1 className="text-xl font-semibold text-left text-white pl-4">Spots</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-10">
        {warData.spots.map((spot, index) => (
          <SpotMapCard
            key={index}
            imageUrl={spot.image}
            mainText={spot.name}
            subText={null} // You mentioned there is no subtext for spots
          />
        ))}
      </div>

      </div>
    </div>
    
  );
};

export default WarsDetail;
