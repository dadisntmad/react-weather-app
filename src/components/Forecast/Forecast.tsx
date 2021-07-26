import React from 'react';
import {imagePicker} from '../../helpers/imagePicker';
import './index.scss';
import {ForecastType} from "../../types/weather";

type ForecastProps = {
  forecast: ForecastType[]
}

const Forecast: React.FC<ForecastProps> = ({forecast}) => {
  return (
    <div className="forecast">
      {forecast &&
      forecast.map(item => (
        <div className="wrapper" key={item.dt}>
          <div className="forecast__day">{item.dt_txt.slice(5, 16)}</div>
          <div className="forecast__img">
            {imagePicker(item.weather[0].id, item.weather[0].description)}
          </div>
          <div className="forecast__temp">
            {Math.round(item.main.temp)} <span>°</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
