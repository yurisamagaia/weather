import React, { FC } from 'react';
import { ActivityIndicator } from 'react-native';
import { colors } from '../../theme';

const Loading: FC = () => (
  <ActivityIndicator size="large" color={colors.white} />
);

export default Loading;