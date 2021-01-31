import { FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_ERROR } from '../consts'

// This file defines the types of params
export type Coordinates = {
  latitude: number;
  longitude: number;
};

export interface WeatherData {
  kind: string;
  title: string;
  icon: string;
  temperature: number;
  temp_max: number;
  temp_min: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  wind: number;
  city: string;
  country: string;
}

export type WeatherState = {
  data: WeatherData;
  loading: boolean;
  error: string | null;
};

interface FetchWeatherLoading {
  type: typeof FETCH_WEATHER_REQUEST;
}

interface FetchWeatherSuccess {
  type: typeof FETCH_WEATHER_SUCCESS;
  data: WeatherData;
}

interface FetchWeatherError {
  type: typeof FETCH_WEATHER_ERROR;
  error: string;
}

export type WeatherActionTypes = | FetchWeatherLoading | FetchWeatherSuccess | FetchWeatherError;