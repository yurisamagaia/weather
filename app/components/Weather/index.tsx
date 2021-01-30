import React, { FC } from 'react';
import { Image } from 'react-native'
import { getWeatherKinds } from '../../utils/kinds';
import { WeatherData } from '../../store/actions/types'
import {
  Container,
  Content,
  IconContainer,
  TextCity,
  TextTemp,
  TextDescription,
  Title
} from './style';

type Props = {
  data: | WeatherData
};

const Weather: FC<Props> = ({ data }) => (
  <Container>
    <Content>
        <TextCity>{data.city} - {data.country}</TextCity>
      <IconContainer>
        <Image
          source={{ uri: 'https://openweathermap.org/img/wn/' + data.icon + '@4x.png' }}
          style={{ width: 180, height: 180 }}
        />
      </IconContainer>
      <TextTemp>{Math.round(data.temperature)}°</TextTemp>
      <Title>{data.title}</Title>
      <TextDescription>{getWeatherKinds(data.kind)}</TextDescription>
    </Content>
  </Container>
);

export default Weather;