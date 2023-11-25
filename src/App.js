// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Servant from './pages/Servant';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ServantDetail from './pages/ServantDetail';
import War from './pages/War';
import WarsDetail from './pages/WarDetail';
import Profile from './pages/Profile';
import SplashScreen from './components/SplashScreen';

const App = () => {
  return (
    <Router>
      <div
        style={{
          // Ganti dengan warna latar belakang yang Anda inginkan
          backgroundColor: '#2c2c2c', // Contoh warna abu-abu
          minHeight: '100vh',
          fontFamily: 'Roboto, sans-serif', // Menggunakan font Roboto
          fontWeight: '600', // Memberikan ketebalan Normal (400)
        }}
      >
        <Header/>
        <Routes>
          <Route path="/" element={<SplashScreen/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/servant" element={<Servant />} />
          <Route path="/servant/detail/:id" element={<ServantDetail />} />
          <Route path="/war" element={<War />} />
          <Route path="/wardetail/:id" element={<WarsDetail/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
        <Navbar />
      </div>
    </Router>
  );
};

export default App;
