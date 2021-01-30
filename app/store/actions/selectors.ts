import { WeatherState } from './types';

// Selectors to get state of variables
const getLoading = ({ loading }: WeatherState) => loading;
const getError = ({ error }: WeatherState) => error;
const getWeather = ({ data }: WeatherState) => data;

const selectors = {
    getLoading,
    getWeather,
    getError
};

export default selectors;