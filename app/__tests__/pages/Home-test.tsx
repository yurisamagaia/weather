import fetch from 'jest-fetch-mock';
import mockStore from '../../test/mockStore';
import mockApiResponse from '../../test/mockApiResponse';
import { fetchWeather } from '../../store/actions';
import { FETCH_WEATHER_SUCCESS, FETCH_WEATHER_REQUEST, FETCH_WEATHER_ERROR } from '../../store/consts';
import weatherReducer from '../../store/reducers';
import { WeatherData, Coordinates } from '../../store/actions/types';

const coords: Coordinates = {
  latitude: -23.0473482,
  longitude: -44.4257681
}

const mockedWeather: WeatherData = {
  kind: 'few clouds',
  title: 'Clouds',
  icon: '03d',
  temperature: 28,
  city: 'Angra dos Reis',
  country: 'BR',
};

describe('Home tests', () => {
  it('Should fetch weather and emit success action', async () => {
    fetch.mockResponse(JSON.stringify(mockApiResponse));

    const store = mockStore({
      loading: false,
      error: null,
      data: {},
    });

    return store.dispatch(fetchWeather(coords.latitude, coords.longitude)).then(() => {
      const [fetchLoading, fetchSuccess] = store.getActions();

      expect(fetchLoading.type).toEqual(FETCH_WEATHER_REQUEST);
      expect(fetchSuccess.type).toEqual(FETCH_WEATHER_SUCCESS);

      expect(fetchSuccess.data.city).toEqual(mockApiResponse.name);
    });
  });

  it('Should update store on fetchLoading action', async () => {
    const action = { type: FETCH_WEATHER_REQUEST } as const;

    const initialState = {
      loading: false,
      error: null,
      data: {} as WeatherData,
    };

    const nextState = {
      ...initialState,
      loading: true,
      error: null,
    };

    expect(weatherReducer(initialState, action)).toEqual(nextState);
  });

  it('Should update store on fetchSuccess action', async () => {
    const data = mockedWeather;

    const action = { type: FETCH_WEATHER_SUCCESS, data } as const;

    const initialState = {
      loading: true,
      error: null,
      data: {} as WeatherData,
    };

    const nextState = {
      ...initialState,
      loading: false,
      error: null,
      data,
    };

    expect(weatherReducer(initialState, action)).toEqual(nextState);
  });
});