import React from 'react';
import renderer from 'react-test-renderer';
import Weather from '../../components/Weather';

test('Should render correctly', async () => {
  const weather = {
    kind: 'few clouds',
    title: 'Clouds',
    icon: '03d',
    temperature: 28,
    city: 'Angra dos Reis',
    country: 'BR',
  };
  const component = renderer.create(<Weather data={weather} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});