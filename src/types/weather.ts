export enum WeatherActionTypes {
  SET_WEATHER = 'WEATHER@SET_WEATHER',
  SET_CURRENT_CITY = 'WEATHER@SET_CURRENT_CITY',
  SET_CLEAR = 'WEATHER@SET_CLEAR',
  SET_FORECAST = 'WEATHER@SET_FORECAST'
}

type WeatherDescr = {
  id: number,
  description: string,
}

export type WeatherState = {
  id: number,
  main: {
    temp: number,
    temp_max: number,
    humidity: number,
  },
  name: string,
  sys: {
    country: string
  },
  wind: {
    speed: number
  },
  weather: WeatherDescr[],
}

export type ForecastType = {
  dt: number,
  dt_txt: string,
  weather: WeatherDescr[]
  main: {
    temp: number
  }
}

type setWeather = {
  type: WeatherActionTypes.SET_WEATHER,
  payload: WeatherState
}

type setCurrentCity = {
  type: WeatherActionTypes.SET_CURRENT_CITY,
  payload: string,
}

type setClear = {
  type: WeatherActionTypes.SET_CLEAR
}

type setForecast = {
  type: WeatherActionTypes.SET_FORECAST,
  payload: ForecastType[]
}

export type WeatherAction = setWeather | setCurrentCity | setClear | setForecast;