import React, { FC } from 'react';
import { Image } from 'react-native'
import { getWeatherKinds, convertMetersToKm } from '../../utils/kinds';
import { WeatherData } from '../../store/actions/types'
import {
  Container,
  Content,
  IconContainer,
  TextCity,
  TextTemp,
  TextDescription,
  Title,
  ContentFlex,
  Temperature,
  TextCondition
} from './style';

type Props = {
  data: | WeatherData
};

const Weather: FC<Props> = ({ data }) => (
  <Container>
    <Content>
      <TextCity>{data.city} - {data.country}</TextCity>
      <ContentFlex>
        <Content>
          <Temperature>{Math.round(data.temperature)}°</Temperature>
          <ContentFlex>
            <TextTemp>H: {Math.round(data.temp_max)}°</TextTemp>
            <TextTemp>L: {Math.round(data.temp_min)}°</TextTemp>
          </ContentFlex>
        </Content>
        <IconContainer>
          <Image
            source={{ uri: 'https://openweathermap.org/img/wn/' + data.icon + '@4x.png' }}
            style={{ width: 200, height: 200 }}
          />
        </IconContainer>
      </ContentFlex>
    </Content>
    <Content>
      <Title>{data.title}</Title>
      <TextCondition>Feels like: {Math.round(data.feels_like)}°</TextCondition>
      <TextCondition>Wind: {convertMetersToKm(data.wind)}km/h</TextCondition>
      <TextCondition>Humidity: {data.humidity}%</TextCondition>
      <TextCondition>Pressure: {data.pressure}hPa</TextCondition>
    </Content>
    <TextDescription>{getWeatherKinds(data.kind)}</TextDescription>
  </Container>
);

export default Weather;