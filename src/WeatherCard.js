import React, { Component } from 'react';

export default class WeatherCard extends Component {
  render() {
    return (
      <div className='city'>
        <h2 className='city-name'>
          <p>
            <sup>
              {this.props.weather.date + ' - ' + this.props.weather.day}
            </sup>
          </p>
        </h2>
        <div className='city-temp'>
          {Math.round(this.props.weather.degree)}
          <sup>&deg;</sup>
        </div>
        <div className='info'>
          <img
            className='city-icon'
            src={this.props.weather.icon}
            alt={this.props.weather.description}
          />
          <p>{this.props.weather.description}</p>
        </div>
      </div>
    );
  }
}
