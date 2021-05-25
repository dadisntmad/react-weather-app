import axios from 'axios';

export const Types = {
  SET_WEATHER: 'WEATHER@SET_WEATHER',
  SET_CURRENT_CITY: 'WEATHER@SET_CURRENT_CITY',
  SET_CLEAR: 'WEATHER@SET_CLEAR',
};

export const setWeather = weather => ({
  type: Types.SET_WEATHER,
  payload: weather,
});

export const setCurrentCity = city => ({
  type: Types.SET_CURRENT_CITY,
  payload: city,
});

export const setClear = () => ({
  type: Types.SET_CLEAR,
});

export const fetchWeather = city => dispatch => {
  axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a20e93adc63a3af0b3e33257540e1382`,
    )
    .then(({ data }) => dispatch(setWeather(data)));
};
