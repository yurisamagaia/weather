
import styled from 'styled-components/native';
import { colors } from '../../theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.blue};
  padding: 40px 15px;
`;

export const Content = styled.View`
  flex: 1;
`;

export const Footer = styled.View`
  justify-content: flex-end;
  align-items: center;
`;

export const ButtonContainer = styled.View`
  align-items: center;
  padding: 5px;
`;

export const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const WeatherContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-size: 20px;
  text-align: center;
  color: ${colors.white};
`;