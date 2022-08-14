import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as weatherActions from './weather.actions';
import { weatherDataSelector } from './weather.selectors';

export const Weather = ({ weatherData, getWeatherData }) => {
  if (!weatherData) {
    getWeatherData();
    return null;
  }

  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {weatherData.map(city => (
          <li key={city.id} className="city">
            <span className="city__name">{city.name}</span>
            <span className="city__temperature">{`${city.temperature} F`}</span>
          </li>
        ))}
      </ul>
    </main>
  );
};

Weather.propsTypes = {
  weatherData: PropTypes.array.isRequired,
  fetchWeatherData: PropTypes.func.isRequired,
};

const mapState = state => {
  return {
    weatherData: weatherDataSelector(state),
  };
};

const mapDispatch = {
  getWeatherData: weatherActions.getWeatherData,
};

export default connect(mapState, mapDispatch)(Weather);
