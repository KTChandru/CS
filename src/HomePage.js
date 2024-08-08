// src/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import cal from './images/cal.webp';
import database from './images/database.webp';
import guide from './images/guide.png';
import safety from './images/safety.jpg';
import tips from './images/tips.webp';
import video from './images/video.jpg';
import './styles.css';
function HomePage() {
  return (
    <div className="homepage">
      <center><h1><b><i>Drive it better!!</i></b></h1></center>
      <p><center>These are the services offered by CS</center></p>
      <div className="card-container">
        <Link to="/service-calculator" className="card">
          <img src={cal} alt="Service Calculator" className="card-img" />
          <div className="card-content">
            <h3>Service Calculator</h3>
            <p>Know when to service.</p>
          </div>
        </Link>
        <Link to="/guide" className="card">
          <img src={video} alt="Video Assistance" className="card-img" />
          <div className="card-content">
            <h3>Video Assistance</h3>
            <p>Video assistance.</p>
          </div>
        </Link>
        <Link to="/video-assistance" className="card">
          <img src={guide} alt="Guide" className="card-img" />
          <div className="card-content">
            <h3>Guide</h3>
            <p>Know about services curated for your brand.</p>
          </div>
        </Link>
        
        <Link to="/local-service-shop" className="card">
          <img src={database} alt="Local Service Shop" className="card-img" />
          <div className="card-content">
            <h3>Local Service Shop</h3>
            <p>Know details about shops in your area.</p>
          </div>
        </Link>
        <Link to="/tips" className="card">
          <img src={tips} alt="Tips" className="card-img" />
          <div className="card-content">
            <h3>Tips</h3>
            <p>Know some tips!!</p>
          </div>
        </Link>
        <Link to="/safety" className="card">
          <img src={safety} alt="Safety" className="card-img" />
          <div className="card-content">
            <h3>Safety</h3>
            <p>Look at safety measures!!</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
