import {produce} from 'immer';
import {ForecastType, WeatherAction, WeatherActionTypes, WeatherState} from "../../types/weather";

const initialState = {
  weather: {} as WeatherState,
  currentCity: '',
  forecast: [] as ForecastType[],
};

const weather = produce((draft, action: WeatherAction) => {
  switch (action.type) {
    case WeatherActionTypes.SET_WEATHER:
      draft.weather = action.payload;
      break;
    case WeatherActionTypes.SET_CURRENT_CITY:
      draft.currentCity = action.payload;
      break;
    case WeatherActionTypes.SET_CLEAR:
      draft.currentCity = '';
      break;
    case WeatherActionTypes.SET_FORECAST:
      draft.forecast = action.payload;
      break;
    default:
  }
}, initialState);

export default weather;
