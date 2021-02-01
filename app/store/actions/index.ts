import { AppThunk } from '../../store/store'
import { FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_ERROR, APIKEY } from '../consts';
import { WeatherData, WeatherActionTypes } from './types';

export const fetchWeatherLoading = (): WeatherActionTypes => ({
  type: FETCH_WEATHER_REQUEST,
});

export const fetchWeatherSuccess = (data: WeatherData): WeatherActionTypes => ({
  type: FETCH_WEATHER_SUCCESS,
  data
});

export const fetchWeatherError = (error: string): WeatherActionTypes => ({
  type: FETCH_WEATHER_ERROR,
  error
});

export const fetchWeather = (lat: number, lon: number): AppThunk => {
  return function (dispatch) {
    // Emit the action loading
    dispatch(fetchWeatherLoading());

    // Set the URL defining appid, lat, lon and units (unitis means the unit of temperature; metric = Celcius)
    const url: string = 'https://api.openweathermap.org/data/2.5/weather?appid=' + APIKEY + '&lat=' + lat + '&lon=' + lon + '&units=metric';

    return fetch(url)
      .then(
        (response) => response.json(),
        // Emit the action error
        (error) => dispatch(fetchWeatherError(error.message)),
      )
      .then((data) => {
        // Verify the status request returned
        if (data.cod !== 200) {
          return dispatch(fetchWeatherError(data.message));
        }
        // Set data of weather
        const weather = {
          kind: data.weather[0].description,
          title: data.weather[0].main,
          icon: data.weather[0].icon,
          temperature: data.main.temp,
          temp_max: data.main.temp_max,
          temp_min: data.main.temp_min,
          feels_like: data.main.feels_like,
          humidity: data.main.humidity,
          pressure: data.main.pressure,
          wind: data.wind.speed,
          deg: data.wind.deg,
          city: data.name,
          country: data.sys.country,
        };
        // Emit the action success
        dispatch(fetchWeatherSuccess(weather));
      })
      .catch((error) => error);
  };
};