import styled from 'styled-components/native';
import { colors } from '../../theme';

export const Container = styled.TouchableOpacity`
  width: 150px;
  background-color: ${colors.white};
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  margin: 5px;
  padding: 10px;
  border: 1px solid ${colors.blueDark};
`;

export const Text = styled.Text`
  color: ${colors.blue};
  font-size: 20px;
  font-weight: bold;
`;