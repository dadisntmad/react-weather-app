import axios from 'axios';

export const Types = {
  SET_WEATHER: 'WEATHER@SET_WEATHER',
  SET_CURRENT_CITY: 'WEATHER@SET_CURRENT_CITY',
};

export const setWeather = weather => ({
  type: Types.SET_WEATHER,
  payload: weather,
});

export const setCurrentCity = city => ({
  type: Types.SET_CURRENT_CITY,
  payload: city,
});

export const fetchWeather =
  (currentCity = 'Kyiv') =>
  dispatch => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${currentCity}&units=metric&appid=a20e93adc63a3af0b3e33257540e1382`,
      )
      .then(({ data }) => dispatch(setWeather(data)));
  };
