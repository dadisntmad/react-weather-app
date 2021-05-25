import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../../redux/actions/weather';
import { getCurrentDate } from '../helpers/getCurrentDate';
import { imagePicker } from '../helpers/imagePicker';
import SearchBar from '../SearchBar/SearchBar';
import './index.scss';

const Home = () => {
  const dispatch = useDispatch();
  const weather = useSelector(({ weather }) => weather.weather);
  const city = useSelector(({ weather }) => weather.currentCity);

  React.useEffect(() => {
    if (city) {
      dispatch(fetchWeather(city));
    }
  }, [dispatch, city]);

  const upper = letter => {
    return letter[0].toUpperCase() + letter.slice(1);
  };

  return (
    <div className="weather">
      <div className="container">
        <div className="searchbar">
          <SearchBar currentCity={city} />
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
            <h1>No selected city</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
