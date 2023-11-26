// src/components/ServantDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AscensionButtons from '../components/AscensionButtons';

const ServantDetail = () => {
  const { id } = useParams();
  const [servantData, setServantData] = useState(null);
  const [currentAscension, setCurrentAscension] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.atlasacademy.io/nice/NA/servant/${id}`);
        setServantData(response.data);
      } catch (error) {
        console.error('Error fetching servant data:', error);
      }
    };

    fetchData();
  }, [id]);

  const handlePrevAscension = () => {
    setCurrentAscension((prevAscension) => Math.max(1, prevAscension - 1));
  };

  const handleNextAscension = () => {
    setCurrentAscension((prevAscension) => Math.min(4, prevAscension + 1));
  };

  if (!servantData) {
    return <div>Loading...</div>;
  }
  const renderStars = () => {
    const starCharacter = '\u2605'; // Karakter Unicode untuk bintang dengan 5 sisi
    return Array.from({ length: servantData.rarity }).map((_, index) => (
      <span key={`${id}_star_${index}`} className="text-yellow-500">
        {starCharacter}
      </span>
    ));
  };

  const servantStats = [
    { category: 'Attack', value: servantData.atkBase },
    { category: 'Hp', value: servantData.hpBase },
    { category: 'Class', value: servantData.className },
    { category: 'Attribute', value: servantData.attribute },
    { category: 'Rarity', value: renderStars() },
    // Tambahkan stat lainnya sesuai kebutuhan
  ];

  return (
    <div className="flex justify-center pt-14 h-auto">
      <div className="text-center mb-5">
        <AscensionButtons
          onPrevClick={handlePrevAscension}
          onNextClick={handleNextAscension}
          isPrevDisabled={currentAscension === 1}
          isNextDisabled={currentAscension === 4}
        />
        <h1 className="text-xl font-semibold text-white pb-5">{servantData.name}</h1>
        <img
          src={servantData.extraAssets.charaGraph.ascension[currentAscension]}
          alt={servantData.name}
          className="w-64 h-128 rounded-xl mx-auto mb-4"
        />
        <div className="mt-4 pb-10">
          <table className="table-auto mx-auto">
            <tbody>
              {servantStats.map((stat, index) => (
                <tr key={index}>
                  <td className="text-left py-2 pr-14 text-white">{stat.category}</td>
                  <td className="text-center py-2 text-white">{stat.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Tambahkan informasi servant lainnya sesuai kebutuhan */}
      </div>
    </div>
  );
};

export default ServantDetail;
