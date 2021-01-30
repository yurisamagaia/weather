import React, { FC } from 'react';
import { Container, Text } from './style';

type Props = {
  onPress: () => void
};

const Button: FC<Props> = ({ children, onPress }) => (
  <Container onPress={onPress}>
    <Text>{children}</Text>
  </Container>
);

export default Button;