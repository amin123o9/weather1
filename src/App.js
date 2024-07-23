import React from 'react';
import './WeatherDisplay.css';

const WeatherDisplay = () => {
  return (
    <div className="weather-container">
      <h1 className="weather-title">Weather in New York</h1>
      <div className="weather-card">
        <div className="weather-main">
          <span className="weather-icon">☀️</span>
          <span className="temperature">72°F</span>
        </div>
        <div className="weather-details">
          <div className="weather-detail">
            <span className="detail-icon">☁️</span>
            <span>Partly Cloudy</span>
          </div>
          <div className="weather-detail">
            <span className="detail-icon">💧</span>
            <span>Humidity: 60%</span>
          </div>
          <div className="weather-detail">
            <span className="detail-icon">💨</span>
            <span>Wind: 5 mph</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
