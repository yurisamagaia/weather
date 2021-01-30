import styled from 'styled-components/native';
import { colors } from '../../theme';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
`;

export const IconContainer = styled.View`
  align-self: center;
`;

export const TextCity = styled.Text`
  font-size: 22px;
  color: ${colors.white};
`;

export const TextTemp = styled.Text`
  font-size: 50px;
  color: ${colors.white};
`;

export const TextDescription = styled.Text`
  font-size: 20px;
  text-align: center;
  color: ${colors.white};
  font-style: italic;
  margin-top: 10px;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: ${colors.white};
  padding-bottom: 10px;
`;