import React, { Component } from 'react';

const Weather = (props) => {
  if (props.weatherType === 'sun-shower') {
    return (
      <div className="icon-weather sun-shower">
        <div className="cloud"></div>
        <div className="sun">
          <div className="rays"></div>
        </div>
        <div className="rain"></div>
      </div>
    )
  }
  if (props.weatherType === 'thunder-storm') {
    return (
      <div className="icon-weather thunder-storm">
        <div className="cloud"></div>
        <div className="lightning">
          <div className="bolt"></div>
          <div className="bolt"></div>
        </div>
      </div>
    )
  }
  if (props.weatherType === 'cloudy') {
    return (
      <div className="icon-weather cloudy">
        <div className="cloud"></div>
        <div className="cloud"></div>
      </div>
    )
  }
  if (props.weatherType === 'flurries') {
    return (
      <div className="icon-weather flurries">
        <div className="cloud"></div>
        <div className="snow">
          <div className="flake"></div>
          <div className="flake"></div>
        </div>
      </div>
    )
  }
  if (props.weatherType === 'sunny') {
    return (
      <div className="icon-weather sunny">
        <div className="sun">
          <div className="rays"></div>
        </div>
      </div>
    )
  }
  if (props.weatherType === 'rainy') {
    return (
      <div className="icon-weather rainy">
        <div className="cloud"></div>
        <div className="rain"></div>
      </div>
    )
  }
}

export default Weather;
