// src/pages/SplashScreen.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SplashScreen = () => {
  const navigate = useNavigate();
  const [randomServant, setRandomServant] = useState(null);
  const [hasFetchedData, setHasFetchedData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if data has already been fetched
        if (hasFetchedData) {
          return;
        }

        const response = await axios.get('https://sparkling-elk-fedora.cyclic.app/api/servants');
        const randomIndex = Math.floor(Math.random() * response.data.length);
        const randomServantData = response.data[randomIndex];
        setRandomServant(randomServantData);
        setHasFetchedData(true);
      } catch (error) {
        console.error('Error fetching random Servant:', error);
      }
    };

    // Run fetchData only if data hasn't been fetched yet
    if (!hasFetchedData) {
      fetchData();
    }

    const timeout = setTimeout(() => {
      navigate('/home');
    }, 3000);

    return () => clearTimeout(timeout);

  }, [hasFetchedData, navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {randomServant ? (
        <>
          <img
            src={randomServant.face}
            alt="Random Servant"
            className="w-40 h-40 rounded-full mx-auto mb-4"
          />
          <h1 className="text-3xl font-semibold text-white">{randomServant.name}</h1>
          <p className="text-white">
            {/* Additional text if needed */}
          </p>
        </>
      ) : (
        <h1 className="text-3xl font-semibold text-white">Loading...</h1>
      )}
    </div>
  );
};

export default SplashScreen;
