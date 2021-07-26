import axios from 'axios';

import {Dispatch} from 'redux';
import {ForecastType, WeatherAction, WeatherActionTypes, WeatherState} from "../../types/weather";

export const setWeather = (weather: WeatherState): WeatherAction => ({
  type: WeatherActionTypes.SET_WEATHER,
  payload: weather,
});

export const setCurrentCity = (city: string): WeatherAction => ({
  type: WeatherActionTypes.SET_CURRENT_CITY,
  payload: city,
});

export const setClear = (): WeatherAction => ({
  type: WeatherActionTypes.SET_CLEAR,
});

export const setForecast = (forecast: ForecastType[]): WeatherAction => ({
  type: WeatherActionTypes.SET_FORECAST,
  payload: forecast,
});

export const fetchWeather = (city: string) => async (dispatch: Dispatch<WeatherAction>) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a20e93adc63a3af0b3e33257540e1382`,
    );
    dispatch(setWeather(response.data));
  } catch (e) {
    console.log(e);
  }
};

export const fetchForecast = (city: string) => async (dispatch: Dispatch<WeatherAction>) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=a20e93adc63a3af0b3e33257540e1382`,
    );
    dispatch(setForecast(response.data.list));
  } catch (e) {
    console.log(e);
  }
};
