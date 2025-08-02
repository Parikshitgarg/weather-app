import React, { useState } from 'react';
import './App.css';

const dummyWeatherData = {
  Delhi: {
    name: 'Delhi',
    temp: 33,
    humidity: 45,
    condition: 'Sunny',
    icon: '☀️',
  },
  London: {
    name: 'London',
    temp: 22,
    humidity: 70,
    condition: 'Cloudy',
    icon: '☁️',
  },
  Tokyo: {
    name: 'Tokyo',
    temp: 28,
    humidity: 60,
    condition: 'Rainy',
    icon: '🌧️',
  },
  'New York': {
    name: 'New York',
    temp: 25,
    humidity: 55,
    condition: 'Sunny',
    icon: '☀️',
  },
};

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const handleSearch = () => {
    const data = dummyWeatherData[city.trim()];
    if (data) {
      setWeather(data);
    } else {
      setWeather({ message: 'City not found' });
    }
  };

  return (
    <div className="app">
      <div className="weather-container">
        <h1 className="title">🌤️ Weather Finder</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Type a city (e.g. Delhi)"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        {weather && weather.name ? (
          <div className="weather-card">
            <div className="icon">{weather.icon}</div>
            <h2>{weather.name}</h2>
            <p>Temperature: {weather.temp}°C</p>
            <p>Humidity: {weather.humidity}%</p>
            <p>Condition: {weather.condition}</p>
          </div>
        ) : weather && weather.message ? (
          <p className="error">{weather.message}</p>
        ) : null}
      </div>
    </div>
  );
}

export default App;
