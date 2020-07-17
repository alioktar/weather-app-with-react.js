import React, { useState } from 'react';

import { fetchWeather } from './api/fetchWeather';
import './App.css';
import City from './City';

const App = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const searc = async (e) => {
    if (e.key === 'Enter') {
      const data = await fetchWeather(query);

      console.log(data);
      setWeather(data);
      setQuery('');
    }
  };

  return (
    <div className='main-container'>
      <input
        type='text'
        className='search'
        placeholder='Search..'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={searc}
      />
      {
        weather.success && (
          <div className='city-container'>
            <div className='city city-title'>
              <h2 className='city-name'>
                <span>{weather.city.toUpperCase()}</span>
              </h2>
            </div>
            <City weather={weather} />
          </div>
        ) //eğer weather.main datası varsa çalışır yokse çalışmaz
      }
    </div>
  );
};

export default App;
