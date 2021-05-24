import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../../redux/actions/weather';
import SearchBar from '../SearchBar/SearchBar';
import './index.scss';

const Home = () => {
  const dispatch = useDispatch();
  const weather = useSelector(({ weather }) => weather.weather);

  React.useEffect(() => {
    dispatch(fetchWeather());
  }, []);

  return (
    <div className="weather">
      <div className="container">
        <div className="searchbar">
          <SearchBar />
        </div>
        <div className="content">
          {weather.main && (
            <div key={weather.id}>
              <div className="content__city">{weather.name}</div>
              <div className="content__img">
                <img
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt={weather.weather[0].description}
                />
              </div>
              <div className="content__temp">
                {Math.round(weather.main.temp)}
                <span>°</span>
              </div>
              <div className="content__humidity">{weather.main.humidity}%</div>
              <div className="content__wind">{weather.wind.speed}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
