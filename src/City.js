import React, { Component } from 'react';

import WeatherCard from './WeatherCard';

export default class City extends Component {
  render() {
    return (
      <div className='weather-card-container'>
        {this.props.weather.result.map((w, i) => {
          if (i < 2) {
            return <WeatherCard key={i} weather={w} />;
          }
          return null;
        })}
      </div>
    ); //eğer weather.main datası varsa çalışır yokse çalışmaz
  }
}
