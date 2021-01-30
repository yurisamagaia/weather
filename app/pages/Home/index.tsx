import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Location from 'expo-location';
import { WeatherActions, WeatherSelectors } from '../../store/index';
import { Coordinates } from '../../store/actions/types';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import WeatherComp from '../../components/Weather';
import {
  Container,
  Content,
  Footer,
  ButtonContainer,
  LoadingContainer,
  Text,
  WeatherContainer
} from './style';

const Home = () => {

  // Initialize coordinates variable
  const [coordinates, setCoordinates] = useState<Coordinates>({} as Coordinates);
  const dispatch = useDispatch();

  // Get value of actions
  const weather = useSelector(WeatherSelectors.getWeather);
  const loading = useSelector(WeatherSelectors.getLoading);
  const error = useSelector(WeatherSelectors.getError);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        dispatch(WeatherActions.fetchWeatherError('Permission to access location was denied'));
      }

      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({});
      setCoordinates({ latitude, longitude });
      dispatch(WeatherActions.fetchWeather(latitude, longitude));
    })();
  }, [dispatch]);

  // Refresh the weather condition
  const handleRefresh = () => {
    dispatch(
      WeatherActions.fetchWeather(
        coordinates.latitude,
        coordinates.longitude
      ),
    );
  };

  // Render content of loading, error or success with the weather params
  const renderContent = () => {
    if (loading) {
      return (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      );
    }
    if (error) {
      return (
        <LoadingContainer>
          <Text>{error}</Text>
        </LoadingContainer>
      );
    }
    return (
      <WeatherContainer>
        <WeatherComp data={weather} />
      </WeatherContainer>
    );
  }

  return (
    <Container>
      <Content>{renderContent()}</Content>
      <Footer>
        <ButtonContainer>
          <Button onPress={handleRefresh}>Refresh</Button>
        </ButtonContainer>
      </Footer>
    </Container>
  );
};

export default Home;