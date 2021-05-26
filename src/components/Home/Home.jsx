import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import unknown from '../../assets/weather/unknown.svg';
import { fetchForecast, fetchWeather, setClear } from '../../redux/actions/weather';
import { getCurrentDate } from '../helpers/getCurrentDate';
import { imagePicker } from '../helpers/imagePicker';
import SearchBar from '../SearchBar/SearchBar';
import './index.scss';

const Home = () => {
  const dispatch = useDispatch();
  const weather = useSelector(({ weather }) => weather.weather);
  const city = useSelector(({ weather }) => weather.currentCity);
  const forecast = useSelector(({ weather }) => weather.forecast);

  const search = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      dispatch(fetchWeather(city));
      dispatch(fetchForecast(city));
      dispatch(setClear());
    }
  };

  const upper = letter => {
    return letter[0].toUpperCase() + letter.slice(1);
  };

  return (
    <div className="weather">
      <div className="container">
        <div className="searchbar">
          <SearchBar currentCity={city} search={search} />
        </div>
        <div className="content">
          {weather.main ? (
            <div key={weather.id}>
              <div className="content__city">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="content__date">{getCurrentDate()}</div>
              <div className="content__img">
                {imagePicker(weather.weather[0].id, weather.weather[0].description)}
              </div>
              <div className="content__temp">
                {Math.round(weather.main.temp)}
                <span>°</span>
                <div>{upper(weather.weather[0].description)}</div>
              </div>
              <div className="content__additional">
                <div className="content__wind">
                  {weather.wind.speed}
                  km/h
                  <p>Wind</p>
                </div>
                <div className="content__humidity">
                  {weather.main.humidity}%<p>Humidity</p>
                </div>
                <div className="content__tempmax">
                  {Math.round(weather.main.temp_max)} <span>°</span>
                  <p>Maximum</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="content__noinfo">
              <img src={unknown} alt="unknown weather" style={{ width: 180 }} />
              <p>No information given</p>
            </div>
          )}
        </div>
      </div>
      <div className="forecast">
        {forecast &&
          forecast.map(item => (
            <div key={item.dt}>
              <div forecast__day>{item.dt_txt}</div>
              <span className="forecast__img">
                {imagePicker(item.weather[0].id, item.weather[0].description)}
              </span>
              <div className="forecast__temp">
                {Math.round(item.main.temp)} <span>°</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
