import { WeatherActionTypes, WeatherState, WeatherData } from '../actions/types';
import { FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_ERROR } from '../consts';
  
// Define initial state of loading, error and weather data
const INITIAL_STATE: WeatherState = {
    data: {} as WeatherData,
    loading: true,
    error: null,
};

// Reducer
const weatherReducer = (state = INITIAL_STATE, action: WeatherActionTypes) => {
  switch (action.type) {
    case FETCH_WEATHER_REQUEST:
      return { ...state, error: null, loading: true };
    case FETCH_WEATHER_SUCCESS:
      return { ...state, loading: false, data: action.data };
    case FETCH_WEATHER_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
  
export default weatherReducer;