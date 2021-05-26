import { produce } from 'immer';
import { Types } from '../actions/weather';

const initialState = {
  weather: {},
  currentCity: '',
  forecast: [],
};

const weather = produce((draft, action) => {
  switch (action.type) {
    case Types.SET_WEATHER:
      draft.weather = action.payload;
      break;
    case Types.SET_CURRENT_CITY:
      draft.currentCity = action.payload;
      break;
    case Types.SET_CLEAR:
      draft.currentCity = '';
      break;
    case Types.SET_FORECAST:
      draft.forecast = action.payload;
      break;
    default:
  }
}, initialState);

export default weather;
