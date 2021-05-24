import { produce } from 'immer';
import { Types } from '../actions/weather';

const initialState = {
  weather: {},
  currentCity: 'Kyiv',
};

const weather = produce((draft, action) => {
  switch (action.type) {
    case Types.SET_WEATHER:
      draft.weather = action.payload;
      break;
    case Types.SET_CURRENT_CITY:
      draft.currentCity = action.payload;
      break;
    default:
  }
}, initialState);

export default weather;
