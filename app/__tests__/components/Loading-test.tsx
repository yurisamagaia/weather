import React from 'react';
import renderer from 'react-test-renderer';
import Loading from '../../components/Loading';

test('Should render correctly', () => {
  const tree = renderer.create(<Loading />).toJSON();
  expect(tree).toMatchSnapshot();
});

